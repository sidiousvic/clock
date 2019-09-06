const ssHand = document.querySelector('.ss');
const mmHand = document.querySelector('.mm');
const hhHand = document.querySelector('.hh');
const lightmode = document.querySelector('.lightmode');
const darkmode = document.querySelector('.darkmode');

function tick() {
  // get date and hh:mm:ss
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // compute actual degrees
  const ssDeg = (seconds / 60) * 360 + 90;
  if (ssDeg === 90) {
    ssHand.style.transition = 'none';
  } else {
    ssHand.style.transition = 'all 0.09s';
    ssHand.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  }

  const mmDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hhDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  // rotate according to time
  ssHand.style.transform = `rotate(${ssDeg}deg)`;
  mmHand.style.transform = `rotate(${mmDeg}deg)`;
  hhHand.style.transform = `rotate(${hhDeg}deg)`;
}

setInterval(tick, 1000);

tick();

// switch stylesheets
let switchStyles = styleSwitcher(); // closure over bool
window.addEventListener('click', switchStyles.switch);

// switch style
function styleSwitcher() {
  let dark = true;
  return {
    switch: () => {
      if (dark === true) {
        darkmode.rel = 'stylesheet';
        lightmode.rel = 'alternate stylesheet';
        dark = false;
      } else if (dark !== true) {
        lightmode.rel = 'stylesheet';
        darkmode.rel = 'alternate stylesheet';
        dark = true;
      }
    }
  };
}
