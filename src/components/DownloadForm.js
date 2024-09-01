import React, { useState } from "react";
import "../styles/DownloadForm.css";

function DownloadForm() {
  const [link, setLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add functionality for download here
  };

  return (
    <div className="download-section">
      <h1>Download Terabox Videos & Files</h1>
      <p>
        TeraDownloader.com simplifies Terabox file and video downloads. Skip
        Terabox login, download directly from servers. No data storage, ensuring
        privacy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Terabox link here"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit">Download</button>
      </form>
    </div>
  );
}

export default DownloadForm;
