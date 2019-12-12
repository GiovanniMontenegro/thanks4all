import * as React from 'react';
import './styles/index.css';
import ReadyForDeparture from '../../components/readyfordeparture';
import FreeMeNow from '../../components/freemenow';

export type EngineStatus = "flying" | "readyForDeparture" | "intoTheSky";

export type HeartStatus = "colored" | "boomed"

type AppState = {
  rocketEngineStatus: EngineStatus;
  hideBody: boolean;
  showHeart: HeartStatus;
  isAnimationStopped: boolean;
}

export const App: React.FC = () => {

  const [appState, setAppState] = React.useState<AppState>({ rocketEngineStatus: "flying", hideBody: false, showHeart: "colored", isAnimationStopped: false })

  const getContainerAnimation = () => {
    if (appState.rocketEngineStatus === "readyForDeparture") {
      return "container-out";
    }
    return "container-in"
  }

  const onEndTypingsAnimation = () => {
    setAppState({ ...appState, hideBody: true })
  }

  const onSwitchHeart = (heart: HeartStatus) => {
    if (appState.showHeart === "boomed") {
      setAppState({ ...appState, isAnimationStopped: true })
    } else {
      setAppState({ ...appState, showHeart: heart })
    }
  }

  const changeRocketEngineStatus = (engineStatus: EngineStatus) => {
    setAppState({ ...appState, rocketEngineStatus: engineStatus })
  }


  return (
    <div id="container" className={getContainerAnimation()}>
      {!appState.hideBody ? (
        <ReadyForDeparture rocketEngineStatus={appState.rocketEngineStatus} changeRocketEngineStatus={changeRocketEngineStatus} onEndTypingsAnimation={onEndTypingsAnimation} />) : (
          <FreeMeNow isAnimationStopped={appState.isAnimationStopped} showHeart={appState.showHeart} onSwitchHeart={onSwitchHeart} />)}
    </div>
  );
}

