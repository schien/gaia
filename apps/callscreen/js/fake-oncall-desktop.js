'use strict';

console.error('This file is not to be shipped.');
console.error('It just helps to fake a call.');

(function() {
  // Don't execute on the phone
  if (navigator.mozTelephony.conferenceGroup) {
    return;
  }

  // To use it, you need to include at the end of the <head>
  //   <script defer src="/js/fake-oncall-desktop.js"></script>
  //   in index.html
  // Then access http://callscreen.gaiamobile.org:8080

  var handledCall = document.getElementById('handled-call-template');
  handledCall.id = '';
  handledCall.hidden = false;
  handledCall.classList.add('additionalInfo');
  handledCall.classList.add('additionalContactInfo');
  handledCall.classList.add('incoming');
  handledCall.classList.add('handled-call');

  handledCall.querySelector('.number').innerHTML = 'Joe Smith';
  handledCall.querySelector('.additionalContactInfo').textContent =
    'work, 12345';

  var duration = handledCall.querySelector('.duration');
  var time = duration.querySelector('span');
  duration.classList.add('isTimer');
  time.textContent = '9:42';

  CallScreen.updateCallsDisplay();
  CallScreen.render('connected'); // Change this for various states
  CallScreen.screen.classList.add('displayed');
  CallScreen.calls.classList.add('muted');
  CallScreen.groupCalls.classList.add('held');
})();
