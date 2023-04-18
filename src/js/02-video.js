import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.ready().then(() => {
  player.on(
    'timeupdate',
    throttle(e => {
      localStorage.setItem('videoplayer-current-time', e.seconds);
    }, 1000)
  );

  const timeSaved = data =>
    localStorage.setItem('videoplayer-current-time', data.seconds);

  const saveTimeDelay = throttle(timeSaved, 1000);

  player.setCurrentTime(saveTimeDelay).then(function (seconds) {
    // seconds = the actual time that the player seeked to
  });
  // .catch(function (error) {
  //   switch (error.name) {
  //     case 'RangeError':
  //       // the time was less than 0 or greater than the video’s duration
  //       break;

  //     default:
  //       // some other error occurred
  //       break;
  //   }
  // });
});
