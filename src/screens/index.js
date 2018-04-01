import BandJS from '../vendor/band.min.js'
import React from 'react';
import Tone from 'tone'
import Transpose from '../transpose'

const playTone = () => {
    const music = new Transpose('Hello my name is Flumpy.')
    music.composeAndPlay();

    console.log(music);
}

const App = () => {
    return (
        <div>
            <h1>Controls here</h1>
            <button onClick={() => playTone()}>
                test click
            </button>
        </div>
    )
}

export default App;