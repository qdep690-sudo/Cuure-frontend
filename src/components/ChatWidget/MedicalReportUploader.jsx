import React, { useRef, useState, useEffect } from 'react';
import { Paperclip, X, FileText, Camera, Upload } from 'lucide-react';

const ALLOWED_TYPES = ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
const MAX_SIZE = 20 * 1024 * 1024; // 20MB

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const MedicalReportUploader = ({ onFileSelected, onFileRemoved, selectedFile, uploadProgress, isUploading }) => {
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [error, setError] = useState(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    if (showMenu) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setError(null);
    setShowMenu(false);

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('Invalid file type. Only PDF, PNG, JPG, JPEG, WEBP allowed.');
      e.target.value = '';
      return;
    }
    if (file.size > MAX_SIZE) {
      setError('File too large. Maximum size is 20MB.');
      e.target.value = '';
      return;
    }
    onFileSelected(file);
    e.target.value = '';
  };

  const isImage = selectedFile && selectedFile.type.startsWith('image/');

  return (
    <>
      {/* Hidden file input for uploads */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.png,.jpg,.jpeg,.webp"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {/* Hidden camera input — capture from camera */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* Paperclip button + popup menu */}
      <div className="attach-menu-wrap" ref={menuRef}>
        <button
          className={`attach-btn ${showMenu ? 'active' : ''}`}
          onClick={() => setShowMenu(v => !v)}
          disabled={isUploading}
          title="Attach file or take photo"
          aria-label="Attach file or take photo"
        >
          <Paperclip size={18} />
        </button>

        {showMenu && (
          <div className="attach-popup">
            <button
              className="attach-popup-item"
              onClick={() => { setShowMenu(false); fileInputRef.current?.click(); }}
            >
              <span className="attach-popup-icon upload-icon"><Upload size={16} /></span>
              <div className="attach-popup-text">
                <span className="attach-popup-label">Upload File</span>
                <span className="attach-popup-sub">PDF, PNG, JPG, WEBP (max 20MB)</span>
              </div>
            </button>

            <button
              className="attach-popup-item"
              onClick={() => { setShowMenu(false); cameraInputRef.current?.click(); }}
            >
              <span className="attach-popup-icon camera-icon"><Camera size={16} /></span>
              <div className="attach-popup-text">
                <span className="attach-popup-label">Take Photo</span>
                <span className="attach-popup-sub">Capture using camera</span>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* File preview card */}
      {selectedFile && (
        <div className="file-preview-card">
          <div className="file-preview-info">
            {isImage ? (
              <div className="file-thumb-wrap">
                <img src={URL.createObjectURL(selectedFile)} alt="preview" className="file-thumb" />
              </div>
            ) : (
              <div className="file-icon-wrap">
                <FileText size={28} color="#667eea" />
              </div>
            )}
            <div className="file-meta">
              <span className="file-name">{selectedFile.name}</span>
              <span className="file-size">{formatBytes(selectedFile.size)}</span>
              {isUploading && (
                <div className="upload-progress-bar">
                  <div className="upload-progress-fill" style={{ width: `${uploadProgress}%` }} />
                </div>
              )}
              {isUploading && (
                <span className="upload-status">Analyzing report… {uploadProgress}%</span>
              )}
            </div>
          </div>
          {!isUploading && (
            <button className="file-remove-btn" onClick={onFileRemoved} aria-label="Remove file">
              <X size={16} />
            </button>
          )}
        </div>
      )}

      {error && <div className="file-error">{error}</div>}
    </>
  );
};

export default MedicalReportUploader;
