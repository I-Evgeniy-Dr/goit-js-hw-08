import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

localStorageValue();
// console.log('Hello!');

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const currentTimePlayed = throttle(function ({ seconds, }) {
        localStorage.setItem(STORAGE_KEY, seconds);
        // console.log('Checked throttle')
    }, 1000);

player.on('play', function () {
    console.log('played the video!');
});

player.on('timeupdate', currentTimePlayed);

function localStorageValue() {
    
    if (localStorage.getItem(STORAGE_KEY)) {
        player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
        // console.log('Checked condition true');
    // } else {
    //     console.log('Checked condition false');
    }
}