import * as React from 'react';
import Lottie from 'react-lottie';
import * as rocketAnimation from '../../static/7885-codey-riding-a-rocket.json';
import { get } from 'lodash';
import Typist from 'react-typist';
import { EngineStatus } from '../../container/app/App.js';
import './style.css';


type RFDProps = {
    rocketEngineStatus: EngineStatus;
    changeRocketEngineStatus: (engineStatus: EngineStatus) => void
    onEndTypingsAnimation: () => void
}

const ReadyForDeparture: React.SFC<RFDProps> = (props: RFDProps): JSX.Element => {



    const getRocketAnimation = () => {
        if (props.rocketEngineStatus === "flying") {
            return "rocket-animation-in";
        } else if (props.rocketEngineStatus === "readyForDeparture") {
            return "rocket-animation-out";
        }
        return "rocket-animation-vibrate";
    }

    const getTypingsAnimation = () => {
        if (props.rocketEngineStatus === "readyForDeparture") {
            return "typings-container-out";
        }
        return "typings-container-in"
    }


    const rocketOptions = {
        loop: true,
        autoplay: true,
        animationData: get(rocketAnimation, "default"),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <div id="greetings-container">
            <div id="rocket" className={getRocketAnimation()}>
                <Lottie options={rocketOptions}
                    isClickToPauseDisabled={true}
                    height={437}
                    width={364}
                />
            </div>
            <div onAnimationEnd={() => { props.onEndTypingsAnimation() }} className={getTypingsAnimation()}>
                <div id="title-typings" >
                    <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }} onTypingDone={() => props.changeRocketEngineStatus("intoTheSky")}>
                        <span> THANKS EVERYONE </span>
                    </Typist>
                </div>
                <div id="subtitle-typings">
                    <Typist onTypingDone={() => props.changeRocketEngineStatus("readyForDeparture")}>
                        <Typist.Delay ms={2000} />
                        <span>For helping me in bad moments</span>
                        <Typist.Backspace count={25} delay={500} />
                        <span>making me smile when I need to most </span>
                        <Typist.Backspace count={40} delay={500} />
                        <span style={{ fontSize: 64 }}>Because without you</span>
                        <br />
                        <span style={{ fontSize: 64 }}>It wouldn't be the same</span>
                        <Typist.Delay ms={500} />
                    </Typist>
                </div>
            </div>
        </div>
    )
}


export default ReadyForDeparture

