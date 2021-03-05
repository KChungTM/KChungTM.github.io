import "./LandingPage.css";
import TopBarNav from "../../components/landingComponents/TopBar/TopBarNav";
import LandingIntro from "../../components/landingComponents/landingIntro/LandingIntro"

function LandingPage() {
    return (
      <div className="landingPage">
        <TopBarNav />
        <LandingIntro />
      </div>
    );
  }
  
  export default LandingPage;