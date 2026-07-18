import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Copy, Check, RotateCcw, FileText } from 'lucide-react';
import ReportSummaryCard from './ReportSummaryCard';

const ChatMessage = ({ msg, onRetry, onBookAppointment }) => {
  const [copied, setCopied] = useState(false);
  const isUser = msg.sender === 'user' || msg.role === 'user';

  const handleCopy = () => {
    const text = msg.text || msg.content || '';
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Report message
  if (msg.type === 'report') {
    return (
      <div className="message-row model">
        <ReportSummaryCard
          summary={msg.summary}
          filename={msg.filename}
          mimetype={msg.mimetype}
          onBookAppointment={onBookAppointment}
        />
      </div>
    );
  }

  // File upload message from user (shows the file card they sent)
  if (msg.type === 'file-upload') {
    return (
      <div className="message-row user">
        <div className="message-bubble user file-upload-bubble">
          <FileText size={18} />
          <div>
            <span className="file-upload-name">{msg.filename}</span>
            <span className="file-upload-label">Medical report uploaded</span>
          </div>
        </div>
      </div>
    );
  }

  const text = msg.text || msg.content || '';

  return (
    <div className={`message-row ${isUser ? 'user' : 'model'}`}>
      <div className={`message-bubble ${isUser ? 'user' : 'model'}`}>
        {isUser ? (
          <p>{text}</p>
        ) : (
          <div className="markdown-content">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        )}
      </div>
      {!isUser && (
        <div className="message-actions">
          <button className="msg-action-btn" onClick={handleCopy} title="Copy">
            {copied ? <Check size={13} /> : <Copy size={13} />}
          </button>
          {onRetry && (
            <button className="msg-action-btn" onClick={onRetry} title="Retry">
              <RotateCcw size={13} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
