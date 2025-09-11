import React, { useRef } from "react";
import "../styles/CVPreview.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CVPreview = ({ data }) => {
  const { general, skills, history, template } = data;
  const cvRef = useRef();

  // Determine accent color based on template
  let accentColor = "#4A90E2"; // default Modern blue
  if (template?.name === "Classic") accentColor = "#333333";
  if (template?.name === "Creative") accentColor = "#E07A5F";

  const handleDownload = async () => {
    const element = cvRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${general.fullName || "CV"}.pdf`);
  };

  return (
    <div>
      <div className={`cv-preview ${template?.name.toLowerCase()}`} ref={cvRef}>
        <header style={{ color: accentColor }}>
          <h1>{general.fullName}</h1>
          <h2>{general.role}</h2>
          <p>{general.email} | {general.phone}</p>
        </header>

        <section>
          <h3 style={{ borderBottomColor: accentColor }}>Skills</h3>
          <ul>
            {skills.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>

        <section>
          <h3 style={{ borderBottomColor: accentColor }}>Experience</h3>
          {history.map((h, i) => (
            <div key={i} className="history-item">
              <strong style={{ color: accentColor }}>{h.role}</strong> – {h.company} ({h.years})
              <p>{h.description}</p>
            </div>
          ))}
        </section>
      </div>

      <button className="submit-btn" onClick={handleDownload} style={{ marginTop: "1rem" }}>
        Download CV
      </button>
    </div>
  );
};

export default CVPreview;
