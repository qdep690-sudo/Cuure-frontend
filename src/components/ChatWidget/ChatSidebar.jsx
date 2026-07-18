import React, { useState, useMemo } from 'react';
import { Plus, Search, X } from 'lucide-react';
import ChatHistoryItem from './ChatHistoryItem';
import { groupConversations, searchConversations } from '../../utils/storageHelper';

const ChatSidebar = ({ sessions, activeSessionId, onSelectSession, onNewChat, onDeleteSession, onRenameSession }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSessions = useMemo(() => {
    if (!searchQuery.trim()) return sessions;
    return searchConversations(searchQuery);
  }, [sessions, searchQuery]);

  const grouped = useMemo(() => groupConversations(filteredSessions), [filteredSessions]);

  const renderGroup = (title, items) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="sidebar-group" key={title}>
        <p className="sidebar-group-label">{title}</p>
        {items.map(session => (
          <ChatHistoryItem
            key={session.id}
            session={session}
            isActive={session.id === activeSessionId}
            onSelect={onSelectSession}
            onDelete={onDeleteSession}
            onRename={onRenameSession}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="chat-sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">Cuure AI</span>
        <button className="new-chat-btn" onClick={onNewChat} title="New Chat">
          <Plus size={16} /> New Chat
        </button>
      </div>

      <div className="sidebar-search-wrap">
        <Search size={14} className="sidebar-search-icon" />
        <input
          className="sidebar-search"
          placeholder="Search chats..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className="sidebar-search-clear" onClick={() => setSearchQuery('')}>
            <X size={13} />
          </button>
        )}
      </div>

      <div className="sidebar-sessions">
        {filteredSessions.length === 0 ? (
          <p className="sidebar-empty">
            {searchQuery ? 'No chats found.' : 'No conversations yet.\nStart chatting!'}
          </p>
        ) : (
          <>
            {renderGroup('Today', grouped.today)}
            {renderGroup('Yesterday', grouped.yesterday)}
            {renderGroup('Previous 7 Days', grouped.previous7Days)}
            {renderGroup('Older', grouped.older)}
          </>
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;
