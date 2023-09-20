import React, { useState } from 'react';

const ButtonsPanel = ({ btnName, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverFolder = () => {
    setIsHovered(true);
  };

  const handleHoverFolderLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="btn"
        onMouseEnter={handleHoverFolder}
        onMouseLeave={handleHoverFolderLeave}
    >
        <div className={`btnPage ${isHovered ? 'show' : ''}`}></div>
        <div className={`btnPage1 ${isHovered ? 'show' : ''}`}></div>
        <div className="btnAddon"></div>
        <div className='btnTitle'>
            <a href={`#${id}`}>
                <div className='linkPlaceholder'>
                    {btnName}
                </div>
            </a>
        </div>
    </div>
  );
};

export default ButtonsPanel;