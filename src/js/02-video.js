import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const updateCurrentTime = throttle(function () {
  player.getCurrentTime().then(function (currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
}, 1000);

player.on('timeupdate', updateCurrentTime);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
