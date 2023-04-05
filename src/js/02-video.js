import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

/*----- var 1 */
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_TIME_KEY) ? localStorage(STORAGE_TIME_KEY) : 0;

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(currentTime);

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

function getCurrentTime(e) {
    localStorage.setItem(STORAGE_TIME_KEY, e.seconds)
};


/*----- var 2 */
// const CURRENT_TIME_KEY = 'videoplayer-current-time';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe, {
//     loop: true,
//     fullscreen: true,
//     quality: '1080p',
// });

// const getCurrentTime = function (currentTime) {
//     const seconds = currentTime.seconds;
//     localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
// };

// player.on('timeupdate', throttle(getCurrentTime, 1000));

// player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);

