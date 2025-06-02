import './landing.css'
import { scrollToSection } from '../utils/scroll'

const Landing = () => {
    const handleStartTrial = () => {
        scrollToSection('courses');
    };

    const handleHowItWorks = () => {
        scrollToSection('courses');
    };

    return (
        <div className='landcont'>
            <div className='land-left'>
                <div className="tagline1">
                    Learn a New skill Everyday, Anytime and Anywhere.
                </div>

                <div className='left2'>
                    <div className='land-text'>
                        <b>Lorem</b> Join our IITian-led courses & personalized guidance programs designed for JEE aspirants. From strategic study plans to JoSAA counseling — we’ve got you covered every step of the way. 
                    </div>
                    <div className='land-btns'>
                        <div className="btn1" onClick={handleStartTrial}>Start Trial</div>
                        <div className="btn2" onClick={handleHowItWorks}>How it Works</div>
                    </div>
                </div>
            </div>

            <div className='land-right'>
                <img width={600} height={600} src="image1.png" alt="img" />
            </div>
        </div>
    )
}

export default Landing
