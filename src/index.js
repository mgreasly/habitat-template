import habitat from 'preact-habitat';
import HelloWorld from './components/HelloWorld';

function init() {
  let ctrl = habitat(HelloWorld);
  ctrl.render({ inline: true, clean: false });
}

// in development, set up HMR:
if (module.hot) {
  require('preact/devtools'); // enables React DevTools, be careful on IE
  module.hot.accept('./components/HelloWorld', () => requestAnimationFrame(init));
}

init();
