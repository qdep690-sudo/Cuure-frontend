import React, { useState } from 'react';
import { Trash2, MessageSquare, Edit2, Check, X } from 'lucide-react';

const ChatHistoryItem = ({ session, isActive, onSelect, onDelete, onRename }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(session.title);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const lastMsg = session.messages?.[session.messages.length - 1];
  const preview = lastMsg?.text
    ? lastMsg.text.substring(0, 45) + (lastMsg.text.length > 45 ? '...' : '')
    : 'No messages yet';

  const handleRenameSubmit = () => {
    if (editTitle.trim()) {
      onRename(session.id, editTitle.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleRenameSubmit();
    if (e.key === 'Escape') { setEditTitle(session.title); setIsEditing(false); }
  };

  if (showDeleteConfirm) {
    return (
      <div className={`chat-history-item ${isActive ? 'active' : ''} delete-confirm`}>
        <p>Delete this conversation?</p>
        <div className="delete-actions">
          <button className="confirm-delete-btn" onClick={() => onDelete(session.id)}>Delete</button>
          <button className="cancel-delete-btn" onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`chat-history-item ${isActive ? 'active' : ''}`} onClick={() => onSelect(session.id)}>
      <MessageSquare size={14} className="chat-history-icon" />
      <div className="chat-history-content">
        {isEditing ? (
          <div className="rename-input-wrap" onClick={e => e.stopPropagation()}>
            <input
              className="rename-input"
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button onClick={handleRenameSubmit}><Check size={13} /></button>
            <button onClick={() => { setEditTitle(session.title); setIsEditing(false); }}><X size={13} /></button>
          </div>
        ) : (
          <>
            <span className="chat-history-title">{session.title}</span>
            <span className="chat-history-preview">{preview}</span>
          </>
        )}
      </div>
      <div className="chat-history-actions" onClick={e => e.stopPropagation()}>
        <button title="Rename" onClick={() => setIsEditing(true)}><Edit2 size={13} /></button>
        <button title="Delete" onClick={() => setShowDeleteConfirm(true)}><Trash2 size={13} /></button>
      </div>
    </div>
  );
};

export default ChatHistoryItem;
