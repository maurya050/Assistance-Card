import ProfileCard from "./ProfileCard";
import AlexaImg from './images/alexa.png'
import Cortana from './images/cortana.png';
import Siri from './images/siri.png';
import './styles.css';
function App(){
    return(
        <div className="container">
            <div className="Heading">
                <h1>Personal Assistance Card</h1>
            </div>
            <div className="card">
                <ProfileCard title="alexa" image={AlexaImg} link="https://www.alexa.com/"/>
                <ProfileCard title="cortana" image= {Cortana} link="https://www.microsoft.com/en-us/cortana"/>
                <ProfileCard title="siri" image = {Siri} link="https://support.apple.com/en-in/guide/iphone/iph83aad8922/ios"/>
            </div>
        </div>
    );
}

export default App;