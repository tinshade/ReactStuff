import React, {useState} from 'react';
import Joyride from 'react-joyride';


const TutorialMode = () =>{
    const tourSteps = [
        {
            target: 'body',
            placement: 'center',
            title: 'Need a tour?',
            content: 'Since this is your first time here, allow me to show you around for a bit!',
            disableBeacon:true
        },
        {
            target:'nav',
            content: 'Here is the navbar menu for easy navigation around all my pages',
            disableBeacon:true
        },
        {
            target: '.title',
            content: "This main title spans acorss all pages and lets you know what demo/example you've reached!",
            disableBeacon: true
        },
        {
            target:'.explanation',
            content: 'This is my explanation and understanding of the concept, keeping it short and verbose at the same time!',
            disableBeacon: true
        },
        {
            target:'#btnCTA',
            content: 'This button is being targetted by ID by Joyride as a Call-To-Action button!',
            disableBeacon: true
        }

    ]

    const [steps] = useState(tourSteps);

    return(
        <>
            <Joyride steps={steps} continuous showSkipButton={true}/>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_React" aria-controls="navbar_React" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-md-center" id="navbar_React">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" title="Back to Home page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" title="Back to home page" href="/" tabindex="-1">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="p-5">
                <div className="container p-5 text-center border border-primary" style={{borderRadius:"20px"}}>
                    <h1 className="title">TutorialMode With React Joyride</h1>
                    <h4>You have reached the guided tutorial mode with React's Joyride package!</h4>
                    <br/>
                    <article style={{marginTop: "7%"}} className='.explanation'>
                        <article>
                            This is a guided tour webpage example made using <a href="https://www.npmjs.com/package/react-joyride" title="Check out React Joyride!">React Joyride</a> package!
                        </article>
                        <article>
                            Needless to say, this is a great way of introducing your users to your creation when it is a wee bit complicated and can't be dumbed down any further, or may be it has a lot of stuff going on! Like an analytics dashboard or AWS's console.
                        </article>
                    </article>
                    <div className="container p-3 text-center">
                        <a href="/" className="btn btn-primary btn-lg" id="btnCTA" style={{borderRadius: "15px"}}>BACK</a>
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default TutorialMode;