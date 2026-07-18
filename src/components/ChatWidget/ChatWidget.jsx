import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import { sendChatMessage, uploadReport as uploadReportApi } from '../../services/chatApi';
import {
  loadConversations, createConversation, addMessageToConversation,
  deleteConversation, renameConversation
} from '../../utils/storageHelper';

import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import InteractiveOptions from './InteractiveOptions';
import BookingWizard from './BookingWizard';
import ChatSidebar from './ChatSidebar';
import MedicalReportUploader from './MedicalReportUploader';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  // Sessions state
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [messages, setMessages] = useState([]);

  // Chat state
  const [conversationState, setConversationState] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(null);
  const [showBookingPrompt, setShowBookingPrompt] = useState(false);
  const [mode, setMode] = useState('chat');

  // File upload state
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const messagesEndRef = useRef(null);

  // ── Scroll to bottom ──────────────────────────────────────────────
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => { if (isOpen) scrollToBottom(); }, [messages, isOpen, isLoading, currentOptions, showBookingPrompt]);

  // ── Load sessions from localStorage ──────────────────────────────
  const refreshSessions = useCallback(() => {
    const stored = loadConversations();
    setSessions(stored);
    return stored;
  }, []);

  useEffect(() => {
    const stored = refreshSessions();
    if (stored.length > 0) {
      const latest = stored[0];
      setActiveSessionId(latest.id);
      setMessages(latest.messages || []);
    }
  }, []);

  // ── Session Management ────────────────────────────────────────────
  const handleNewChat = () => {
    const welcome = { sender: 'assistant', text: 'Hi! I am Cuure AI. How can I help you today?', timestamp: new Date().toISOString() };
    const session = createConversation(null);
    const updated = addMessageToConversation(session.id, welcome);
    refreshSessions();
    setActiveSessionId(session.id);
    setMessages(updated?.messages || [welcome]);
    setConversationState({});
    setCurrentOptions(null);
    setShowBookingPrompt(false);
    setMode('chat');
  };

  const handleSelectSession = (sessionId) => {
    const stored = loadConversations();
    const session = stored.find(s => s.id === sessionId);
    if (!session) return;
    setActiveSessionId(sessionId);
    setMessages(session.messages || []);
    setConversationState({});
    setCurrentOptions(null);
    setShowBookingPrompt(false);
    setMode('chat');
  };

  const handleDeleteSession = (sessionId) => {
    const remaining = deleteConversation(sessionId);
    refreshSessions();
    if (sessionId === activeSessionId) {
      if (remaining.length > 0) {
        handleSelectSession(remaining[0].id);
      } else {
        handleNewChat();
      }
    }
  };

  const handleRenameSession = (sessionId, newTitle) => {
    renameConversation(sessionId, newTitle);
    refreshSessions();
  };

  // ── Add message to state + storage ───────────────────────────────
  const addMsg = useCallback((msg) => {
    let sessionId = activeSessionId;
    if (!sessionId) {
      const session = createConversation(null);
      sessionId = session.id;
      setActiveSessionId(sessionId);
    }
    const updated = addMessageToConversation(sessionId, msg);
    if (updated) {
      setMessages(updated.messages);
      refreshSessions();
    }
    return sessionId;
  }, [activeSessionId, refreshSessions]);

  // ── Handle open chatbot (ensure at least one session) ─────────────
  const handleOpen = () => {
    setIsOpen(true);
    const stored = loadConversations();
    if (stored.length === 0) {
      handleNewChat();
    } else {
      setActiveSessionId(stored[0].id);
      setMessages(stored[0].messages || []);
    }
  };

  // ── Send text message ─────────────────────────────────────────────
  const handleSendMessage = async (textOverride = null) => {
    const textToSend = textOverride || inputValue.trim();
    if ((!textToSend && !selectedFile) || isLoading || isUploading) return;

    // Handle file upload first
    if (selectedFile) {
      await handleFileUpload();
      return;
    }

    const userMsg = { sender: 'user', text: textToSend };
    addMsg(userMsg);
    setInputValue('');
    setIsLoading(true);
    setCurrentOptions(null);
    setShowBookingPrompt(false);

    try {
      // Build messages for Gemini (only current session)
      const storedSession = loadConversations().find(s => s.id === activeSessionId);
      const geminiMessages = (storedSession?.messages || []).map(m => ({
        role: m.sender === 'user' ? 'user' : 'model',
        content: m.text || ''
      }));

      const response = await sendChatMessage(geminiMessages, conversationState);
      const aiMsg = { sender: 'assistant', text: response.text };
      addMsg(aiMsg);

      if (response.showBookingButton) {
        setShowBookingPrompt(true);
      } else if (response.options && response.options.length > 0) {
        setCurrentOptions({ type: response.questionType, options: response.options });
      }
    } catch {
      addMsg({ sender: 'assistant', text: 'Sorry, I am having trouble connecting. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // ── Handle file upload ────────────────────────────────────────────
  const handleFileUpload = async () => {
    if (!selectedFile) return;
    const file = selectedFile;

    addMsg({ sender: 'user', type: 'file-upload', filename: file.name, text: `Uploaded: ${file.name}` });
    setSelectedFile(null);
    setIsUploading(true);
    setUploadProgress(0);

    try {
      const result = await uploadReportApi(file, (pct) => setUploadProgress(pct));
      addMsg({
        sender: 'assistant',
        type: 'report',
        summary: result.summary,
        filename: result.filename,
        mimetype: result.mimetype,
        text: `Medical Report Analysis: ${result.filename}`
      });
    } catch (err) {
      const errMsg = err?.response?.data?.error || "We couldn't summarize the report right now. Please try again.";
      addMsg({ sender: 'assistant', text: errMsg });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  // ── Option select ─────────────────────────────────────────────────
  const handleOptionSelect = (selectedOptions) => {
    const answerText = selectedOptions.join(', ');
    setCurrentOptions(null);
    handleSendMessage(answerText);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isLoading && !isUploading) handleSendMessage();
  };

  const handleBookingStart = () => { setMode('booking'); setShowBookingPrompt(false); };
  const handleBookingComplete = () => {
    setMode('chat');
    addMsg({ sender: 'assistant', text: '🎉 Appointment booked successfully! Our team will contact you shortly.' });
  };

  // ── Render ────────────────────────────────────────────────────────
  return (
    <div className="chat-widget-container">
      {isOpen && (
        <div className="chat-window">
          {/* Sidebar */}
          {showSidebar && (
            <ChatSidebar
              sessions={sessions}
              activeSessionId={activeSessionId}
              onSelectSession={handleSelectSession}
              onNewChat={handleNewChat}
              onDeleteSession={handleDeleteSession}
              onRenameSession={handleRenameSession}
            />
          )}

          {/* Main chat area */}
          <div className="chat-main">
            <div className="chat-header">
              <button className="sidebar-toggle-btn" onClick={() => setShowSidebar(s => !s)} title="Toggle sidebar">
                {showSidebar ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
              </button>
              <h3>Cuure AI</h3>
              <button onClick={() => setIsOpen(false)} className="close-btn"><X size={20} /></button>
            </div>

            <div className="chat-content-area">
              {mode === 'chat' ? (
                <>
                  <div className="chat-messages">
                    {messages.length === 0 && (
                      <div className="chat-welcome">
                        <p>👋 Hi! I'm <strong>Cuure AI</strong>.</p>
                        <p>Tell me your symptoms or upload a medical report.</p>
                      </div>
                    )}

                    {messages.map((msg, idx) => (
                      <ChatMessage
                        key={msg.id || idx}
                        msg={msg}
                        onBookAppointment={() => setShowBookingPrompt(true)}
                      />
                    ))}

                    {isLoading && <TypingIndicator />}
                    {isUploading && <TypingIndicator label="Analyzing Medical Report..." />}

                    {currentOptions && !isLoading && (
                      <InteractiveOptions
                        options={currentOptions.options}
                        type={currentOptions.type}
                        onSelect={handleOptionSelect}
                      />
                    )}

                    {showBookingPrompt && !isLoading && (
                      <div className="booking-prompt-container">
                        <p className="booking-prompt-text">Would you like to book an appointment?</p>
                        <div className="booking-prompt-actions">
                          <button className="primary-btn" onClick={handleBookingStart}>Yes</button>
                          <button className="secondary-btn" onClick={() => setShowBookingPrompt(false)}>Maybe Later</button>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggestions (only at start) */}
                  {messages.filter(m => m.sender === 'user').length === 0 && (
                    <div className="chat-suggestions">
                      <button onClick={() => handleSendMessage("I have a fever")}>🌡️ Fever</button>
                      <button onClick={() => handleSendMessage("I have a headache")}>🤕 Headache</button>
                      <button onClick={() => handleSendMessage("I want to book an appointment")}>📅 Book Appointment</button>
                    </div>
                  )}

                  {/* File preview above input */}
                  {selectedFile && (
                    <div className="file-preview-area">
                      <MedicalReportUploader
                        selectedFile={selectedFile}
                        onFileSelected={setSelectedFile}
                        onFileRemoved={() => setSelectedFile(null)}
                        uploadProgress={uploadProgress}
                        isUploading={isUploading}
                      />
                    </div>
                  )}

                  <div className="chat-input-area">
                    <MedicalReportUploader
                      onFileSelected={setSelectedFile}
                      onFileRemoved={() => setSelectedFile(null)}
                      selectedFile={null}
                      uploadProgress={uploadProgress}
                      isUploading={isUploading}
                    />
                    <input
                      type="text"
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={selectedFile ? 'Press send to analyze file...' : 'Type your message...'}
                      disabled={isLoading || isUploading || !!currentOptions}
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={isLoading || isUploading || (!inputValue.trim() && !selectedFile) || !!currentOptions}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </>
              ) : (
                <BookingWizard
                  preFilledReason={messages.filter(m => m.sender === 'user').map(m => m.text).join('. ')}
                  onBookingComplete={handleBookingComplete}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button className="chat-trigger-btn" onClick={handleOpen}>
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
