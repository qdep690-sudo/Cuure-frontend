// =============================================
// storageHelper.js - All localStorage logic
// =============================================

const STORAGE_KEY = 'cuure_chat_sessions';

const loadConversations = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveAllConversations = (sessions) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
};

const createConversation = (firstMessage = null) => {
  const id = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const now = new Date().toISOString();
  const session = {
    id,
    title: firstMessage ? generateConversationTitle(firstMessage) : 'New Conversation',
    createdAt: now,
    updatedAt: now,
    messages: firstMessage
      ? [{
          id: `msg_${Date.now()}`,
          sender: 'user',
          text: firstMessage,
          timestamp: now
        }]
      : []
  };
  const sessions = loadConversations();
  sessions.unshift(session);
  saveAllConversations(sessions);
  return session;
};

const saveConversation = (session) => {
  const sessions = loadConversations();
  const index = sessions.findIndex(s => s.id === session.id);
  const updated = { ...session, updatedAt: new Date().toISOString() };
  if (index >= 0) {
    sessions[index] = updated;
  } else {
    sessions.unshift(updated);
  }
  saveAllConversations(sessions);
  return updated;
};

const updateConversation = (sessionId, updater) => {
  const sessions = loadConversations();
  const index = sessions.findIndex(s => s.id === sessionId);
  if (index < 0) return null;
  const updated = { ...updater(sessions[index]), updatedAt: new Date().toISOString() };
  sessions[index] = updated;
  saveAllConversations(sessions);
  return updated;
};

const addMessageToConversation = (sessionId, message) => {
  return updateConversation(sessionId, (session) => {
    const messages = [...(session.messages || []), {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      ...message,
      timestamp: new Date().toISOString()
    }];
    // Auto-title from first user message if still default
    let title = session.title;
    if (title === 'New Conversation' && message.sender === 'user') {
      title = generateConversationTitle(message.text);
    }
    return { ...session, messages, title };
  });
};

const deleteConversation = (sessionId) => {
  const sessions = loadConversations().filter(s => s.id !== sessionId);
  saveAllConversations(sessions);
  return sessions;
};

const renameConversation = (sessionId, newTitle) => {
  return updateConversation(sessionId, (session) => ({ ...session, title: newTitle }));
};

const generateConversationTitle = (text) => {
  if (!text || typeof text !== 'string') return 'New Conversation';
  const t = text.trim().toLowerCase();
  // Common symptom patterns
  if (t.includes('fever') || t.includes('temperature')) return 'Fever Consultation';
  if (t.includes('headache') || t.includes('head pain')) return 'Headache Discussion';
  if (t.includes('chest pain') || t.includes('chest')) return 'Chest Pain Discussion';
  if (t.includes('cough')) return 'Cough Consultation';
  if (t.includes('cold') || t.includes('flu')) return 'Cold & Flu Consultation';
  if (t.includes('diabetes')) return 'Diabetes Consultation';
  if (t.includes('blood pressure') || t.includes('hypertension')) return 'Blood Pressure Discussion';
  if (t.includes('appointment') || t.includes('book')) return 'Appointment Request';
  if (t.includes('report') || t.includes('upload')) return 'Medical Report Analysis';
  if (t.includes('stomach') || t.includes('abdomen') || t.includes('nausea')) return 'Stomach Issue Consultation';
  // Fallback: capitalize first 40 chars
  const trimmed = text.trim().substring(0, 40);
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1) + (text.length > 40 ? '...' : '');
};

const searchConversations = (query) => {
  if (!query.trim()) return loadConversations();
  const q = query.toLowerCase();
  return loadConversations().filter(session => {
    if (session.title.toLowerCase().includes(q)) return true;
    return (session.messages || []).some(m => m.text?.toLowerCase().includes(q));
  });
};

// Group sessions by time
const groupConversations = (sessions) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const groups = { today: [], yesterday: [], previous7Days: [], older: [] };
  sessions.forEach(session => {
    const updated = new Date(session.updatedAt);
    if (updated >= today) groups.today.push(session);
    else if (updated >= yesterday) groups.yesterday.push(session);
    else if (updated >= sevenDaysAgo) groups.previous7Days.push(session);
    else groups.older.push(session);
  });
  return groups;
};

export {
  loadConversations,
  createConversation,
  saveConversation,
  updateConversation,
  addMessageToConversation,
  deleteConversation,
  renameConversation,
  generateConversationTitle,
  searchConversations,
  groupConversations
};
