import React, { useState } from "react";
import "../styles/Form.css";

const Form = ({ template, onGenerate }) => {
  const [general, setGeneral] = useState({
    fullName: "",
    role: "",
    email: "",
    phone: "",
  });
  const [skills, setSkills] = useState([""]);
  const [history, setHistory] = useState([
    { role: "", company: "", years: "", description: "" },
  ]);

  // General info updater
  const updateGeneral = (field, value) => {
    setGeneral({ ...general, [field]: value });
  };

  // Skills
  const addSkill = () => setSkills([...skills, ""]);
  const updateSkill = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };
  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // History
  const addHistory = () =>
    setHistory([
      ...history,
      { role: "", company: "", years: "", description: "" },
    ]);
  const updateHistory = (index, field, value) => {
    const newHistory = [...history];
    newHistory[index][field] = value;
    setHistory(newHistory);
  };
  const removeHistory = (index) => {
    setHistory(history.filter((_, i) => i !== index));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onGenerate) {
      onGenerate({ general, skills, history, template });
    }
  };

  return (
    <form
      className={`cv-form ${template ? template.name.toLowerCase() : ""}`}
      onSubmit={handleSubmit}
    >
      <h2>Build Your CV {template ? `– ${template.name}` : "– Modern"}</h2>

      {/* General Info */}
      <section className="form-section">
  
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            value={general.fullName}
            onChange={(e) => updateGeneral("fullName", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role / Title</label>
          <input
            type="text"
            id="role"
            placeholder="Software Engineer"
            value={general.role}
            onChange={(e) => updateGeneral("role", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@mail.com"
            value={general.email}
            onChange={(e) => updateGeneral("email", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="+123456789"
            value={general.phone}
            onChange={(e) => updateGeneral("phone", e.target.value)}
          />
        </div>
      </section>

      {/* Proficiencies */}
      <section className="form-section">
        <div className="section-header">
          <h3>Skills</h3>
          <button type="button" onClick={addSkill} className="icon-btn">
            +
          </button>
        </div>
        {skills.map((skill, index) => (
          <div className="form-group inline" key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => updateSkill(index, e.target.value)}
              placeholder={`Skill ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="icon-btn danger"
            >
              ×
            </button>
          </div>
        ))}
      </section>

      {/* History */}
      <section className="form-section">
        <div className="section-header">
          <h3>Experience</h3>
          <button type="button" onClick={addHistory} className="icon-btn">
            +
          </button>
        </div>
        {history.map((entry, index) => (
          <div className="history-entry" key={index}>
            <div className="history-header">
              <h4 className="history-index">Entry {index + 1}</h4>
              <button
                type="button"
                onClick={() => removeHistory(index)}
                className="icon-btn danger"
              >
                ×
              </button>
            </div>

            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                value={entry.role}
                onChange={(e) => updateHistory(index, "role", e.target.value)}
                placeholder="Frontend Developer"
              />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                value={entry.company}
                onChange={(e) =>
                  updateHistory(index, "company", e.target.value)
                }
                placeholder="Tech Corp"
              />
            </div>

            <div className="form-group">
              <label>Years</label>
              <input
                type="text"
                value={entry.years}
                onChange={(e) => updateHistory(index, "years", e.target.value)}
                placeholder="2020–2023"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="3"
                value={entry.description}
                onChange={(e) =>
                  updateHistory(index, "description", e.target.value)
                }
                placeholder="Describe your responsibilities, achievements..."
              />
            </div>
          </div>
        ))}
      </section>

      <button type="submit" className="submit-btn">
        Generate CV
      </button>
    </form>
  );
};

export default Form;
