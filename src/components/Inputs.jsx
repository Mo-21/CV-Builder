import "../styles/App.css";

export default function CreateInputs() {
  return (
    <div className="edit-field">
      <div className="header">Edit</div>

      <div className="personal-info info">
        <h4>Personal Information</h4>
        {/* name */}
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>

        {/* position name */}
        <div className="input-container">
          <label htmlFor="profession">Profession</label>
          <input type="text" />
        </div>

        {/* personal summary */}
        <div className="input-container">
          <label htmlFor="summary">Summary</label>
          <textarea name="summary" id="summary" cols="30" rows="10"></textarea>
        </div>
      </div>

      <div className="contact-info info">
        <h4>Contact Information</h4>
        {/* phone number */}
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input type="email" />
        </div>

        {/* phone number */}
        <div className="input-container">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="number" />
        </div>

        {/* address */}
        <div className="input-container">
          <label htmlFor="address">Address</label>
          <input type="text" />
        </div>
      </div>

      <div className="skills info">
        <h4>Skills</h4>
        <div className="input-container">
          <label htmlFor="skill">Add Skill</label>
          <input type="text" />
          <button className="add">Add</button>
        </div>
      </div>

      <div className="work-ex info">
        <h4>Work Experience</h4>
        <div className="input-container">
          <label htmlFor="experience">Position Name</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="experience">Company</label>
          <input type="text" />
        </div>

        <div className="input-container">
          <label htmlFor="experience">Location</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="experience">From</label>
          <input type="date" />
        </div>
        <div className="input-container">
          <label htmlFor="experience">To</label>
          <input type="date" />
        </div>
        <button className="add">Add</button>
      </div>

      <div className="education info">
        <h4>Education</h4>
        <div className="input-container">
          <label htmlFor="experience">Degree</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="experience">Institute</label>
          <input type="text" />
        </div>

        <div className="input-container">
          <label htmlFor="experience">Location</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="experience">From</label>
          <input type="date" />
        </div>
        <div className="input-container">
          <label htmlFor="experience">To</label>
          <input type="date" />
        </div>
        <button className="add">Add</button>
      </div>

      <div className="languages info">
        <h4>Languages</h4>
        <div className="input-container">
          <label htmlFor="experience">Language</label>
          <input type="text" />
        </div>

        <div className="input-container">
          <label htmlFor="dropdown">Level</label>

          <select id="dropdown" name="dropdown">
            <option value="option1">Native</option>
            <option value="option2">Fluent</option>
            <option value="option3">Intermediate</option>
            <option value="option3">Beginner</option>
          </select>
        </div>
        <button className="add">Add</button>
      </div>
    </div>
  );
}
