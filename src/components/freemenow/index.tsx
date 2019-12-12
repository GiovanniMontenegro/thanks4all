import * as React from 'react'
import Lottie from 'react-lottie'
import * as heart1 from '../../static/322-favorite.json';
import * as heart2 from '../../static/67-exploding-heart.json';
import * as happyDancing from '../../static/12049-vik4graphic-no-bg.json';
import { get } from 'lodash';
import Typist from 'react-typist';
import { HeartStatus } from '../../container/app/App';
import './style.css';

type Unchained = {
    isAnimationStopped: boolean
    showHeart: HeartStatus
    onSwitchHeart: (heart: HeartStatus) => void
}

const FreeMeNow: React.SFC<Unchained> = (props: Unchained) => {

    const heart_colored = {
        loop: false,
        autoplay: true,
        animationData: get(heart1, "default"),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet'
        }
    };

    const heart_boomed = {
        loop: false,
        autoplay: true,
        animationData: get(heart2, "default"),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet'
        }
    };

    const happy_dancing = {
        loop: true,
        autoplay: true,
        animationData: get(happyDancing, "default"),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet'
        }
    }
    const heart = props.showHeart === "colored" ? heart_colored : heart_boomed;

    const HeartAttack = <div><Lottie options={heart}
        height={'100vh'}
        width={'100%'}
        isClickToPauseDisabled={true}
        isStopped={props.isAnimationStopped}
        eventListeners={[
            {
                eventName: 'complete',
                callback: () => {
                    props.onSwitchHeart("boomed")
                },
            },
        ]}
    /></div>;


    return (
        <div>
            {!props.isAnimationStopped ?
                HeartAttack :
                (
                    <div className={"ending-container"}>
                        <Typist className="title-typings" cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
                            <span> Thanks 4 All </span>
                        </Typist>
                        <Lottie options={happy_dancing}
                            height={'80vh'}
                            width={'100%'}
                            isClickToPauseDisabled={true}
                        />
                    </div>
                )}
        </div>
    )

}

export default FreeMeNow;