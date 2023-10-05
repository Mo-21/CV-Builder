import { useState } from "react";
import "../styles/App.css";
import "../styles/Preview-Panel.css";
import CreateInputs from "./Inputs";
import EditPreviewPanel from "./Preview-Panel";

function App() {
  const [currentPersonalInfo, setPersonalInfo] = useState({
    name: "",
    profession: "",
    summary: "",
  });

  const handleNameInput = (event) => {
    setPersonalInfo({ ...currentPersonalInfo, name: event.target.value });
  };

  const handleProfessionInput = (event) => {
    setPersonalInfo({ ...currentPersonalInfo, profession: event.target.value });
  };

  const handleSummaryInput = (event) => {
    setPersonalInfo({ ...currentPersonalInfo, summary: event.target.value });
  };

  return (
    <>
      <div className="grid-container">
        <div className="main-station">
          <div className="personal-info info">
            <h4>Personal Information</h4>
            {/* name */}
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                value={currentPersonalInfo.name}
                onChange={handleNameInput}
                type="text"
              />
            </div>

            {/* position name */}
            <div className="input-container">
              <label htmlFor="profession">Profession</label>
              <input
                value={currentPersonalInfo.profession}
                onChange={handleProfessionInput}
                type="text"
              />
            </div>

            {/* personal summary */}
            <div className="input-container">
              <label htmlFor="summary">Summary</label>
              <textarea
                cols="30"
                rows="10"
                value={currentPersonalInfo.summary}
                onChange={handleSummaryInput}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="preview-panel">
          <div className="personal-Info-preview preview">
            <div className="name">{currentPersonalInfo.name}</div>
            <div className="profession">{currentPersonalInfo.profession}</div>
            <div className="summary">{currentPersonalInfo.summary}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
