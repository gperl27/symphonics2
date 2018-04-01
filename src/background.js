import store from './store'
import { setText, playMusic } from './modules/music';

// we'll import an action creator here
const playMusicFromText = word => {
    var query = word.selectionText;

    store.dispatch(setText(query));
    store.dispatch(playMusic())
};

chrome.contextMenus.create({
    title: "Turn text into music",
    contexts: ["selection"],
    onclick: playMusicFromText
});