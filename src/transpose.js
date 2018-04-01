/**
 * Turn an arbitrary amount of text into playable notes
 * Put the notes in a readable format as per Band.js libarary (https://github.com/meenie/band.js/)
 * 
 * @param word
 * @type string
 * 
 * @returns notes
 * @type array
 * 
 * Rules:
 * 1. Each word represents a music measure
 * 2. Each music measure takes on a 4/n time signature, where
 * n is the number of letters in a word
 * 3. If a word has punctuation return the measure as a chord
 */
import Tone from 'tone'
import BandJS from './vendor/band.min.js'
import TEXT_TO_NOTE from './conversion'

export default class Transpose {
    constructor(text) {
        this.text = text;
        this.notes = [];
        this.player = null;

        //initialize conductor
        this.conductor = new BandJS();
        this.conductor.setTimeSignature(4, 4);
        this.conductor.setTempo(120);
    }

    // compose
    addKeysAndDurationToNotes() {
        const words = this.text.split(/\s+/)

        words.forEach(word => {
            const regex = /([A-Z])|([.!?])/;
            const letters = word.split("");

            if (regex.test(word)) {
                this.notes.push({
                    key: this.chord(letters),
                    duration: 'quarter',
                })
                return
            }

            this.addMeasure(letters)
        })

    }

    addMeasure(letters) {
        this.notes.push(this.mapWordToChord(letters))
    }

    chord(letters) {
        let chord = '';
        letters
            .filter(letter => TEXT_TO_NOTE[letter] !== undefined)
            .forEach(letter => chord += `${TEXT_TO_NOTE[letter]},`)

        return chord.replace(/,\s*$/, "");
    }

    addMusicToConductor() {
        const instrument = this.conductor.createInstrument();
        this.notes.forEach(note => {
            if (note) {
                instrument.note(note.duration, note.key)
            }
        })
        this.player = this.conductor.finish()
    }

    // play sound
    playMusic() {
        this.player.play();
    }

    composeAndPlay() {
        this.addKeysAndDurationToNotes()
        this.addMusicToConductor()
        this.playMusic()
    }

    // Util
    mapWordToChord(letters) {
        letters.forEach(letter => {
            this.notes.push({
                key: TEXT_TO_NOTE[letter],
                duration: this.getMeasurements(letters.length)
            })
        })
    }

    getMeasurements = (n) => {
        if (n <= 1) return 'whole';
        if (n <= 2) return 'half';
        if (n <= 4) return 'quarter';
        if (n <= 8) return 'eighth';
        if (n <= 16) return 'sixteenth';
        if (n <= 32) return 'thirtySecond';

        return 'quarter'
    }
}