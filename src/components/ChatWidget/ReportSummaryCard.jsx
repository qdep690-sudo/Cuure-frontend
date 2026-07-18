import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Calendar } from 'lucide-react';

const ReportSummaryCard = ({ summary, filename, mimetype, onBookAppointment }) => {
  const [expanded, setExpanded] = useState(true);
  const isImage = mimetype && mimetype.startsWith('image/');

  return (
    <div className="report-summary-card">
      <div className="report-card-header" onClick={() => setExpanded(e => !e)}>
        <span className="report-icon">{isImage ? '🖼️' : '📄'}</span>
        <div className="report-card-title">
          <strong>Medical Report Analysis</strong>
          <span className="report-filename">{filename}</span>
        </div>
        <span className="report-expand-icon">{expanded ? '▲' : '▼'}</span>
      </div>

      {expanded && (
        <div className="report-card-body">
          <div className="report-markdown">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </div>
          {onBookAppointment && (
            <button className="book-from-report-btn" onClick={onBookAppointment}>
              <Calendar size={15} />
              Book Doctor Appointment
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ReportSummaryCard;
