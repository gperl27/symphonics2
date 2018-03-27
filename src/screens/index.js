import React from 'react';
import Tone from 'tone'

const playTone = () => {
    Tone.Transport.stop()

    var polySynth = new Tone.PolySynth(4, Tone.Synth).chain(Tone.Master)

    var part = new Tone.Sequence(function (time, event) {
        console.log(time, event)
        //the events will be given to the callback with the time they occur
        polySynth.triggerAttackRelease(event, 1)
    },
        // ["C3", [null, "Eb3"], ["F4", "Bb4", "C5"]], "4n"
        [
            ["Bb4"], "2n",
            ["C4", "E4", "G4", "A4"], "4n",
            ["C4", "E4", "G4", "A4"], "16n",
            [["F4", "Bb4", "C5"], "C4", "E4", "G4", "A4"],
        ]
    )

    //start the part at the beginning of the Transport's timeline
    part.loop = false;
    part.start(0)

    Tone.Transport.start('+0.1')
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