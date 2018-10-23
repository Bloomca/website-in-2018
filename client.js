// this is the simplest script ever, so all code is inside IIFE
(function () {
  var screens = {
    start: 'start-app',
    notification: 'notification',
    cookies: 'cookies',
    ageVerification: 'age-verification',
    restrictAge: 'restrict-age',
    subscribe: 'subscribe',
    adblock: 'block-material',
    donate: 'donate',
    consultant: 'consultant',
    searchResults: 'search-results',
    wrong: 'wrong',
    finish: 'finish'
  };

  onClick('start-btn', function () {
    hideScreen(screens.start);
    showScreen(screens.notification);
  });

  onClick('no-notifications-btn', chooseNotifications);
  onClick('yes-notifications-btn', chooseNotifications);

  function chooseNotifications() {
    hideScreen(screens.notification);
    showScreen(screens.cookies);
  }

  onClick('cookies-btn', function () {
    hideScreen(screens.cookies);
    showScreen(screens.ageVerification);
  });

  onClick('no-age-verification-btn', function () {
    hideScreen(screens.ageVerification);
    showScreen(screens.restrictAge);
  });

  onClick('yes-age-verification-btn', function () {
    hideScreen(screens.ageVerification);
    showScreen(screens.subscribe);
  });

  onClick('close-subscribe-btn', chooseSubscription);
  onClick('yes-subscribe-btn', chooseSubscription);

  function chooseSubscription() {
    hideScreen(screens.subscribe);
    showScreen(screens.adblock);
  }

  onClick('block-material-btn', function () {
    hideScreen(screens.adblock);
    showScreen(screens.donate);
  });

  onClick('donate-btn', function () {
    hideScreen(screens.donate);
    showScreen(screens.searchResults);
  });

  onClick('yes-search-results', chooseResults);
  onClick('no-search-results', chooseResults);

  function chooseResults() {
    hideScreen(screens.searchResults);
    showScreen(screens.wrong);
  }

  onClick('wrong-button', function () {
    hideScreen(screens.wrong);
    showScreen(screens.finish);
  });

  for (var i = 1; i <= 10; i++) {
    onClick('recommend-' + i, function () {
      var recommendEl = document.querySelector('.recommend');

      if (recommendEl) {
        recommendEl.style.display = 'none';
      }
    });
  }

  function onClick(id, cb) {
    var el = document.getElementById(id);

    if (el) {
      el.addEventListener('click', cb)
    } else {
      console.error('Sorry, we did not find an element with id #' + id);
    }
  }

  function showScreen(id) {
    var el = document.getElementById(id);

    if (el) {
      el.style.display = 'block';
    } else {
      console.error('Sorry, we did not find an element with id #' + id);
    }
  }

  function hideScreen(id) {
    var el = document.getElementById(id);

    if (el) {
      el.style.display = 'none';
    } else {
      console.error('Sorry, we did not find an element with id #' + id);
    }
  }
})();