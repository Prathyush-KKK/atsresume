import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const EditableText = ({ content, onUpdate, className }) => {
  const handleInput = (e) => {
    onUpdate(e.target.innerHTML);
  };

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
      contentEditable
      onInput={handleInput}
      suppressContentEditableWarning={true}
    />
  );
};

const Skills = ({ title, skills }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleTitleChange = (newTitle) => {
    const newSkills = [...resumeData.skills];
    const skillType = newSkills.find((skillType) => skillType.title === title);
    if (skillType) {
      skillType.title = newTitle;
      setResumeData({ ...resumeData, skills: newSkills });
    }
  };

  const handleSkillsChange = (newSkills) => {
    const newSkillsArray = [...resumeData.skills];
    const skillType = newSkillsArray.find((skillType) => skillType.title === title);
    if (skillType) {
      skillType.skills = newSkills.split(',').map(skill => skill.trim());
      setResumeData({ ...resumeData, skills: newSkillsArray });
    }
  };

  return (
    skills.length > 0 && (
      <>
        <EditableText
          content={title}
          onUpdate={handleTitleChange}
          className="section-title mb-1 border-b-2 border-gray-300 editable"
        />
        <EditableText
          content={skills.join(", ")}
          onUpdate={handleSkillsChange}
          className="sub-content"
        />
      </>
    )
  );
};

export default Skills;