import React, { useState } from 'react';
import Header from './components/Header'; 
import Body from './components/Body';
import Form from './components/Form';
import Footer from './components/Footer'; 
import CVPreview from './components/CVPreview';
import TemplatePreview from './components/TemplatePreview';
import './App.css';

const templates = [
  { id: 1, name: "Modern" },
  { id: 2, name: "Classic" },
  { id: 3, name: "Creative" },
];

const defaultTemplate = templates[0]; // Modern

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(defaultTemplate);
  const [cvData, setCvData] = useState(null);

  const handleGenerateCV = (data) => {
    if (!data.template) data.template = selectedTemplate;
    setCvData(data);
  };

  return (
    <div className="app">
      <Header />

      <Body>
        {/* Template selection */}
        <div className="template-selection">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`template-card ${selectedTemplate.id === template.id ? 'selected' : ''}`}
              onClick={() => setSelectedTemplate(template)}
            >
              <TemplatePreview template={template} />
              <h3>{template.name}</h3>
            </div>
          ))}
        </div>

        {/* CV Form */}
        <Form template={selectedTemplate} onGenerate={handleGenerateCV} />

        {/* CV Preview */}
        {cvData && <CVPreview data={cvData} />}
      </Body>

      <Footer />
    </div>
  );
}

export default App;
