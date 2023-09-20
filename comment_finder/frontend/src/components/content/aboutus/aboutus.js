import React, { Component } from 'react';
import "./aboutus.css";
import friendsImg from "../../../assets/friends.png";
import ProgressBar from './progressBar/progressBar';
import CoffeStain from "../../../assets/coffe.png";

const textStyles = {
    highlight: {
        color: "#7f7fca",
        fontWeight: "bold"
    },
    smaller: {
        fontSize: "80%",
    },
    bold: {
        fontWeight: "bold"
    }
}

class Aboutus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStickedOne: false,
            isStickedTwo: false,
            isAnimationPaused: false,
            checkboxes: {
                useless: true,
                projects: true,
                team: true,
            },
        };
    }

    handleStickedOne = () => {
        this.setState({ isStickedOne: true });
    };

    handleStickedTwo = () => {
        this.setState({ isStickedTwo: true });
    };

    handleCheckboxChange = (event, checkboxName) => {
        const { checkboxes } = this.state;
        checkboxes[checkboxName] = event.target.checked;
        this.setState({ checkboxes });
    };

    areAllCheckboxesChecked = () => {
        const { checkboxes } = this.state;
        return Object.values(checkboxes).every(checked => checked);
    };

    componentDidMount() {
        // Rozpocznij interwał zmiany wartości co 3 sekundy
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                isAnimationPaused: !prevState.isAnimationPaused, // Odwracanie wartości
            }));
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { isStickedOne, isStickedTwo } = this.state;

        return (
            <div className="aboutusContainer" id="aboutus">
                <a href="#start">
                    <div className='aboutusAddon'>
                        Go Back
                    </div>
                </a>
                <div className='aboutusBox'>
                    <div className='paperBg'></div>
                    <div className='paperBg1'></div>
                    <div className={`stickyNotes ${isStickedOne ? 'hideSticky' : ''}`}
                        onClick={this.handleStickedOne}
                    >
                        <div className="stickyContent">
                            About Us
                        </div>
                    </div>
                    <div className={`stickyNotes1 ${isStickedTwo ? 'hideSticky' : ''}`}
                        onClick={this.handleStickedTwo}
                    >
                        <div className="stickyContent1">
                            Maybe more precisely?? it's about two people.
                        </div>
                    </div>
                    <div className='aboutContent'>
                        <div className='Panel left'>
                            <div className='dotts'>
                                <div className='dottedPanel'></div>
                                <div className='dottedPanel'></div>
                                <div className='dottedPanel'></div>
                                <div className='dottedPanel'></div>
                                <div className='dottedPanel'></div>
                                <div className='dottedPanel'></div>
                                <div className='dottedPanel'></div>
                                <div className='dottedPanel'></div>
                            </div>
                            <img src={friendsImg} alt="Friends" className='noteImg'/>
                            <div className='noteText'>
                                <div className='mainText'>
                                    Friendship power
                                </div>
                                <div className='signs'>
                                    <div className='sign'>
                                        Loscik
                                    </div>
                                    <div className='sign1'>
                                        Meatballsik
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Panel middle'>
                            <h1>{this.props.short}</h1>
                            <h3>({this.props.title})</h3>
                            <div className='noteLine'></div>
                            <div className='noteMiddle'>
                                The<span style={{opacity: "0"}}>a</span> 
                                <a href="https://github.com/UPT-Useless-Projects-Team" target='_blank' className={`UPTLinkAnimation ${this.state.isAnimationPaused ? 'UPTLinkAnimationPaused' : ''}`}>
                                    <span style={textStyles.highlight}>Useless Projects Team </span>
                                </a>
                                <span style={{opacity: "0"}}>a</span>is a <span style={textStyles.smaller}>small-scale</span> organization specializing in the <span style={textStyles.bold}>creation</span> of various 
                                computer-based projects, such as <span style={textStyles.bold}>websites</span> developed using <span style={textStyles.bold}>React and Django</span>, 
                                as well as <span style={textStyles.bold}>Python and Java</span> applications. 
                                These projects are designed to cater to <span style={textStyles.bold}>everyday people</span>, 
                                facilitating often mundane tasks with creative and user-friendly solutions.
                                Despite its <span style={textStyles.smaller}>modest size</span>, UPT is driven by <span style={textStyles.bold}>ambition and creativity</span>. 
                                Originally composed of five members, 
                                the organization now consists of only two individuals 
                                who believed wholeheartedly in the company's mission.
                            </div>
                            <div className='noteTech'>
                                <label className="containerCheckBox">Useless
                                    <input
                                        type="checkbox"
                                        checked={this.state.checkboxes.useless}
                                        onChange={e => this.handleCheckboxChange(e, 'useless')}
                                    />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="containerCheckBox">Projects
                                    <input
                                        type="checkbox"
                                        checked={this.state.checkboxes.projects}
                                        onChange={e => this.handleCheckboxChange(e, 'projects')}
                                    />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="containerCheckBox">Team
                                    <input
                                        type="checkbox"
                                        checked={this.state.checkboxes.team}
                                        onChange={e => this.handleCheckboxChange(e, 'team')}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                {this.areAllCheckboxesChecked() && <span style={textStyles.bold}>Everything is correct!</span>}
                            </div>
                        </div>
                        <div className='Panel right'>
                            <h1>Currently working on:</h1>
                            <a href="https://github.com/UPT-Useless-Projects-Team" target='_blank' className={`UPTLinkAnimation ${this.state.isAnimationPaused ? 'UPTLinkAnimationPaused' : ''}`}>
                                <h3><span style={textStyles.highlight}>{this.props.inprogress}</span></h3>
                            </a>
                            <div className='noteLine'></div>
                            <div className='noteRight'>
                                <div className='statusNoteRight'>
                                    <ProgressBar/>
                                    <div className='progressInfo'>
                                        Progress on project: <span style={textStyles.highlight}>0%</span>
                                    </div>
                                    <div className='projectDesc'>
                                        <div className='projectDescName'>
                                            Description:
                                        </div>
                                        <div className='projectDescContent'>
                                            This application is a tool that allows users to search for comments on the TikTok
                                            platform based on keywords or creators of videos. 
                                            {/* It collects these comments in one place, 
                                            making it easier to browse and analyze TikTok content. 
                                            With this application, users can quickly find comments related to a specific topic, 
                                            keyword, or a particular content creator. This tool can be useful for individuals 
                                            who want to track comments on their own videos as well as those interested in 
                                            specific TikTok trends or topics. All of this makes browsing content on the platform 
                                            more efficient and tailored to users' needs. */}

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={CoffeStain} className='coffeStain'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;