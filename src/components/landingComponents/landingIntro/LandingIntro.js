import "./LandingIntro.css"
import Logo from "../../../assets/logos/vectorized.svg"

function LandingIntro() {
    return (
        <div className="landingMain">
            <div className="landingDescription">
                <p className="greeting">
                    hey, my name is
                </p>
                <p className="name">
                    Kennedy Chung!
                </p>
                <p className="title">
                    student | programmer
                </p>
                <div className="shortDescription">
                    <div className="blurb">
                            i’m a student at <mark>UC Berkeley</mark> <br/>
                            studying <mark>CS</mark> who is passionate <br/>
                            about change through <mark>technology</mark>.
                    </div>  
                </div>
            </div>
            <div className="landingGraphic">
                <img src={Logo} alt="logo"></img>
            </div>
        </div>
    );
}

export default LandingIntro;