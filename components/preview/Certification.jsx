import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const EditableText = ({ content, onUpdate, className, tag = "div" }) => {
  const handleInput = (e) => {

    onUpdate(e.target.innerHTML);
  };

  const Tag = tag;

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
      contentEditable
      onInput={handleInput}
      suppressContentEditableWarning={true}
    />
  );
};

const Certification = ({ title, certifications }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleTitleChange = (newTitle) => {
    setResumeData({ ...resumeData, certificationTitle: newTitle });
  };

  const handleCertificationChange = (newCertification, index) => {
    const newCertifications = [...resumeData.certifications];
    newCertifications[index] = newCertification;
    setResumeData({ ...resumeData, certifications: newCertifications });
  };

  return (
    certifications.length > 0 && (
      <div>
        <EditableText
          content={title}
          onUpdate={handleTitleChange}
          className="section-title mb-1 border-b-2 border-gray-300"
          tag="h2"
        />
        <ul className="sub-content list-disc ul-padding">
          {certifications.map((certification, index) => (
            <li key={index}>
              <EditableText
                content={certification}
                onUpdate={(newContent) => handleCertificationChange(newContent, index)}
                className="certification-item"
              />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Certification;