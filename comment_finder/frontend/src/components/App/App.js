import './App.css';
import TitlePanel from "../titlePanel/titlepanel"
import AboutUs from "../content/aboutus/aboutus"
import Projects from "../content/projects/projects"


function App() {
  return (
    <div className="main">
      <TitlePanel 
        title={"Useless Project Team"} 
        projects={"1"} 
      />
      <AboutUs
        short={"UPT"}
        title={"Useless Project Team"}
        inprogress={"Comment Finder (for TikTok)"}
      />
      <Projects/>
    </div>
  );
}

export default App;
