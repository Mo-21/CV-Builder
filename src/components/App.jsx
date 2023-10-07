import { useState } from "react";
import "../styles/App.css";
import "../styles/PreviewPanel.css";
import "../styles/MainStation.css";
import { v4 as uuidv4 } from "uuid";
import html2pdf from "html2pdf.js";
import mailLogo from "../assets/mail.svg";
import locationLogo from "../assets/location.svg";
import phoneLogo from "../assets/phone.svg";

const handleSaveClick = () => {
  const element = document.getElementById("preview-panel");
  const opt = {
    margin: 5,
    filename: "cv.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf(element, opt);
};

function App() {
  // --------------Personal Info State-------------------
  const [currentPersonalInfo, setPersonalInfo] = useState({
    name: "",
    profession: "",
    summary: "",
  });

  const handleNameInput = (event) => {
    setPersonalInfo({ ...currentPersonalInfo, name: event.target.value });
  };

  const handleProfessionInput = (event) => {
    setPersonalInfo({
      ...currentPersonalInfo,
      profession: event.target.value,
    });
  };

  const handleSummaryInput = (event) => {
    setPersonalInfo({ ...currentPersonalInfo, summary: event.target.value });
  };

  // ------------Contact Info State ----------------
  const [currentContactInfo, setCurrentContactInfo] = useState({
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleEmailInput = (event) => {
    setCurrentContactInfo({
      ...currentContactInfo,
      email: event.target.value,
    });
  };

  const handlePhoneInput = (event) => {
    setCurrentContactInfo({
      ...currentContactInfo,
      phoneNumber: event.target.value,
    });
  };

  const handleAddressInput = (event) => {
    setCurrentContactInfo({
      ...currentContactInfo,
      address: event.target.value,
    });
  };

  // -----------Skills State-----------
  const [currentSkill, setSkill] = useState({ skill: "" });
  const [skillsList, setSkillsList] = useState([]);

  const handleSkillInput = (event) => {
    setSkill({ ...currentSkill, skill: event.target.value });
  };

  const handleButtonClick = () => {
    const newItem = {
      id: uuidv4(),
      value: currentSkill.skill,
    };
    setSkillsList([...skillsList, newItem]);
    setSkill({ ...currentSkill, skill: "" });
  };

  const list = skillsList.map((item) => (
    <li key={item.id}>
      {item.value}
      <div className="button-container">
        <button onClick={() => handleEditClick(item.id)}>Edit</button>
        <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
      </div>
    </li>
  ));

  const handleEditClick = (id) => {
    const updatedValue = prompt("Enter the new value:");
    if (updatedValue !== null) {
      const updatedItems = skillsList.map((item) =>
        item.id === id ? { ...item, value: updatedValue } : item
      );
      setSkillsList(updatedItems);
    }
  };

  const handleDeleteClick = (id) => {
    const updatedItems = skillsList.filter((item) => item.id !== id);
    setSkillsList(updatedItems);
  };

  // ----------Work Experience State------------
  const [currentWorkInfo, setCurrentWorkInfo] = useState({
    position: "",
    company: "",
    location: "",
    from: "",
    to: "",
  });

  const [workList, setWorkList] = useState([]);

  const handlePositionInput = (event) => {
    setCurrentWorkInfo({ ...currentWorkInfo, position: event.target.value });
  };
  const handleCompanyInput = (event) => {
    setCurrentWorkInfo({ ...currentWorkInfo, company: event.target.value });
  };
  const handleLocationInput = (event) => {
    setCurrentWorkInfo({ ...currentWorkInfo, location: event.target.value });
  };
  const handleFromInput = (event) => {
    setCurrentWorkInfo({ ...currentWorkInfo, from: event.target.value });
  };
  const handleToInput = (event) => {
    setCurrentWorkInfo({ ...currentWorkInfo, to: event.target.value });
  };
  const handleTasksInput = (event) => {
    setCurrentWorkInfo({ ...currentWorkInfo, tasks: event.target.value });
  };

  const handleButtonClickWork = () => {
    const newItem = {
      id: uuidv4(),
      value: {
        position: currentWorkInfo.position,
        company: currentWorkInfo.company,
        location: currentWorkInfo.location,
        from: currentWorkInfo.from,
        to: currentWorkInfo.to,
        tasks: currentWorkInfo.tasks,
      },
    };
    setWorkList([...workList, newItem]);
    setCurrentWorkInfo({
      ...workList,
      position: "",
      company: "",
      location: "",
      from: "",
      to: "",
      tasks: "",
    });
  };

  const listOfWork = workList.map((item) => (
    <div className="work-job" key={item.id}>
      <div className="position-name">{item.value.position}</div>
      <div className="company-name">{item.value.company}</div>
      <div className="location-name">{item.value.location}</div>
      <div className="date">
        <div>{item.value.from} -</div>
        <div>- {item.value.to}</div>
      </div>
      <div className="tasks-name">{item.value.tasks}</div>
      <div className="button-container">
        <button onClick={() => handleDeleteClickWork(item.id)}>Delete</button>
      </div>
    </div>
  ));

  const handleDeleteClickWork = (id) => {
    const updatedItems = workList.filter((item) => item.id !== id);
    setWorkList(updatedItems);
  };

  // --------------Education State--------------
  const [currentEduInfo, setCurrentEduInfo] = useState({
    degree: "",
    institute: "",
    location: "",
    from: "",
    to: "",
  });

  const [eduList, setEduList] = useState([]);

  const handleDegreeInput = (event) => {
    setCurrentEduInfo({ ...currentEduInfo, degree: event.target.value });
  };
  const handleInstituteInput = (event) => {
    setCurrentEduInfo({ ...currentEduInfo, institute: event.target.value });
  };
  const handleInstituteLocationInput = (event) => {
    setCurrentEduInfo({ ...currentEduInfo, location: event.target.value });
  };
  const handleInstituteFromInput = (event) => {
    setCurrentEduInfo({ ...currentEduInfo, from: event.target.value });
  };
  const handleInstituteToInput = (event) => {
    setCurrentEduInfo({ ...currentEduInfo, to: event.target.value });
  };

  const handleButtonClickEdu = () => {
    const newItem = {
      id: uuidv4(),
      value: {
        degree: currentEduInfo.degree,
        institute: currentEduInfo.institute,
        location: currentEduInfo.location,
        from: currentEduInfo.from,
        to: currentEduInfo.to,
      },
    };
    setEduList([...eduList, newItem]);
    setCurrentEduInfo({
      ...eduList,
      degree: "",
      institute: "",
      location: "",
      from: "",
      to: "",
    });
  };

  const listOfEdu = eduList.map((item) => (
    <div className="work-job" key={item.id}>
      <div className="position-name">{item.value.degree}</div>
      <div className="company-name">{item.value.institute}</div>
      <div className="location-name">{item.value.location}</div>
      <div className="date">
        <div>{item.value.from} -</div>
        <div>- {item.value.to}</div>
      </div>
      <div className="button-container">
        <button onClick={() => handleDeleteClickEdu(item.id)}>Delete</button>
      </div>
    </div>
  ));

  const handleDeleteClickEdu = (id) => {
    const updatedItems = eduList.filter((item) => item.id !== id);
    setEduList(updatedItems);
  };

  // --------------Languages--------------
  const [currentLanguage, setCurrentLanguage] = useState({
    language: "",
    level: "",
  });

  const [languageList, setLanguageList] = useState([]);

  const handleLanguageInput = (event) => {
    setCurrentLanguage({ ...currentLanguage, language: event.target.value });
  };

  const handleLevelInput = (event) => {
    setCurrentLanguage({ ...currentLanguage, level: event.target.value });
  };

  const handleButtonClickLanguage = () => {
    const newItems = {
      id: uuidv4(),
      value: {
        language: currentLanguage.language,
        level: currentLanguage.level,
      },
    };
    setLanguageList([...languageList, newItems]);
    setCurrentLanguage({
      ...languageList,
      language: "",
      level: "",
    });
  };

  const listOfLanguages = languageList.map((item) => (
    <div key={item.id}>
      <div className="position-name">{item.value.language}</div>
      <div className="company-name level">{item.value.level}</div>
      <div className="button-container">
        <button onClick={() => handleDeleteClickLang(item.id)}>Delete</button>
      </div>
    </div>
  ));

  const handleDeleteClickLang = (id) => {
    const updatedItems = eduList.filter((item) => item.id !== id);
    setLanguageList(updatedItems);
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

          <div className="contact-info info">
            <h4>Contact Information</h4>
            {/* Email Address */}
            <div className="input-container">
              <label htmlFor="email">Email Address</label>
              <input
                value={currentContactInfo.email.emailValue}
                onChange={handleEmailInput}
                type="email"
              />
            </div>

            {/* phone number */}
            <div className="input-container">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                value={currentContactInfo.phoneNumber}
                onChange={handlePhoneInput}
                type="number"
              />
            </div>

            {/* address */}
            <div className="input-container">
              <label htmlFor="address">Address</label>
              <input
                value={currentContactInfo.address}
                onChange={handleAddressInput}
                type="text"
              />
            </div>
          </div>

          {/* skills */}
          <div className="skills info">
            <h4>Skills</h4>
            <div className="input-container">
              <label htmlFor="skill">Add Skill</label>
              <input
                value={currentSkill.skill}
                onChange={handleSkillInput}
                type="text"
              />
            </div>
            <div className="btn">
              <button onClick={handleButtonClick} className="add">
                Add
              </button>
            </div>
          </div>

          {/* work experience */}
          <div className="work-ex info">
            <h4>Work Experience</h4>
            <div className="input-container">
              <label htmlFor="experience">Position Name</label>
              <input
                value={currentWorkInfo.position}
                onChange={handlePositionInput}
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="experience">Company</label>
              <input
                value={currentWorkInfo.company}
                onChange={handleCompanyInput}
                type="text"
              />
            </div>

            <div className="input-container">
              <label htmlFor="experience">Location</label>
              <input
                value={currentWorkInfo.location}
                onChange={handleLocationInput}
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="experience">From</label>
              <input
                value={currentWorkInfo.from}
                onChange={handleFromInput}
                type="date"
              />
            </div>
            <div className="input-container">
              <label htmlFor="experience">To</label>
              <input
                value={currentWorkInfo.to}
                onChange={handleToInput}
                type="date"
              />
            </div>
            <div className="input-container">
              <label htmlFor="experience">Description</label>
              <textarea
                cols="30"
                rows="10"
                value={currentWorkInfo.tasks}
                onChange={handleTasksInput}
                type="text"
              />
            </div>
            <div className="btn">
              <button onClick={handleButtonClickWork} className="add">
                Add
              </button>
            </div>
          </div>

          {/* Education */}
          <div className="education info">
            <h4>Education</h4>
            <div className="input-container">
              <label htmlFor="experience">Degree</label>
              <input
                value={currentEduInfo.degree}
                onChange={handleDegreeInput}
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="experience">Institute</label>
              <input
                value={currentEduInfo.institute}
                onChange={handleInstituteInput}
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="experience">Location</label>
              <input
                value={currentEduInfo.location}
                onChange={handleInstituteLocationInput}
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="experience">From</label>
              <input
                value={currentEduInfo.from}
                onChange={handleInstituteFromInput}
                type="date"
              />
            </div>
            <div className="input-container">
              <label htmlFor="experience">To</label>
              <input
                value={currentEduInfo.to}
                onChange={handleInstituteToInput}
                type="date"
              />
            </div>
            <div className="btn">
              <button onClick={handleButtonClickEdu} className="add">
                Add
              </button>
            </div>
          </div>

          {/* Languages */}
          <div className="languages info">
            <h4>Languages</h4>
            <div className="input-container">
              <label htmlFor="experience">Language</label>
              <input
                value={currentLanguage.language}
                onChange={handleLanguageInput}
                type="text"
              />
            </div>

            <div className="input-container">
              <label htmlFor="dropdown">Level</label>

              <select
                id="dropdown"
                name="dropdown"
                value={currentLanguage.level}
                onChange={handleLevelInput}
              >
                <option value=""></option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Beginner">Beginner</option>
              </select>
            </div>
            <div className="btn">
              <button onClick={handleButtonClickLanguage} className="add">
                Add
              </button>
            </div>
          </div>
        </div>

        {/*                     Preview Screen                     */}
        <div id="preview-panel" className="preview-panel">
          <div className="personal-Info-preview preview">
            <div className="name">{currentPersonalInfo.name}</div>
            <div className="profession">{currentPersonalInfo.profession}</div>
            <div className="summary">{currentPersonalInfo.summary}</div>
          </div>

          <div className="contact-info-preview preview">
            <div className="email-address">
              <img src={mailLogo} alt="mail" />
              <div>{currentContactInfo.email}</div>
            </div>
            <div className="phone-number">
              <img src={phoneLogo} alt="mail" />
              <div>{currentContactInfo.phoneNumber}</div>
            </div>
            <div className="address">
              <img src={locationLogo} alt="mail" />
              <div>{currentContactInfo.address}</div>
            </div>
          </div>

          <div className="skills-preview preview">
            <div className="skills-header">SKILLS</div>
            <ul>{list}</ul>
          </div>

          <div className="work-preview preview">
            <div className="work-header">WORK EXPERIENCE</div>
            {listOfWork}
          </div>

          <div className="edu-preview preview">
            <div className="work-header">EDUCATION</div>
            {listOfEdu}
          </div>
          <div className="lang-preview preview">
            <div className="work-header lang">LANGUAGES</div>
            <div className="lang-group">{listOfLanguages}</div>
          </div>
        </div>
        <button onClick={handleSaveClick} className="save-pdf">
          Save
        </button>
      </div>
    </>
  );
}

export default App;
