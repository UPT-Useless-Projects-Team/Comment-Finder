import React, {useState} from 'react';
import "./projectCard.css";


const ProjectsCard = (props) => {
    const [isSticked, setIsSticked] = useState(false);

    const handleSticked = () => {
        setIsSticked(true);
    };

    return(
        <div className='cardBox'>
            <div className={`revCardBox ${isSticked ? 'isSticked' : ''}`} id={props.id} onClick={handleSticked}>
                <div className='showCard'>
                    
                </div>
            </div>
            <div className="Card">
            
            </div>
        </div>
    ) 
}

export default ProjectsCard;