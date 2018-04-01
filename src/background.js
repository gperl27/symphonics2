import store from './store'

console.log(store)

// we'll import an action creator here
const playMusicFromText = word => {
    var query = word.selectionText;

    console.log(word, 'play music')
};

chrome.contextMenus.create({
    title: "Search in UrbanDictionary",
    contexts: ["selection"],
    onclick: playMusicFromText
});