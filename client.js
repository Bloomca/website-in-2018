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
    finish: 'finish',
    loader: 'loader'
  };

  onClick('start-btn', function () {
    hideScreen(screens.start);
    showScreen(screens.loader);

    setTimeout(function () {
      showScreen(screens.notification);
    }, 300);
  });

  onClick('no-notifications-btn', chooseNotifications);
  onClick('yes-notifications-btn', chooseNotifications);

  function chooseNotifications() {
    hideScreen(screens.notification);

    setTimeout(function () {
      showScreen(screens.cookies);
    }, 300);
  }

  onClick('cookies-btn', function () {
    hideScreen(screens.cookies);
    hideScreen(screens.loader);
    showScreen(screens.ageVerification);

    setTimeout(function () {
      var container = document.getElementById(screens.ageVerification).querySelector('.choice-container');
      container.style.top = '100px';
      container.style.opacity = 1;
    }, 50);
  });

  onClick('no-age-verification-btn', function () {
    hideScreen(screens.ageVerification);
    showScreen(screens.restrictAge);
  });

  onClick('yes-age-verification-btn', function () {
    var container = document.getElementById(screens.ageVerification).querySelector('.choice-container');
    container.style.top = '200px';
    container.style.opacity = 0;

    setTimeout(function () {
      hideScreen(screens.ageVerification);
      showScreen(screens.subscribe);
    }, 300);
  });

  onClick('close-subscribe-btn', chooseSubscription);
  onClick('yes-subscribe-btn', chooseSubscription);

  function chooseSubscription() {
    var container = document.getElementById(screens.subscribe).querySelector('.subscription');
    container.style.top = '100px';
    container.style.opacity = 0;

    setTimeout(function () {
      hideScreen(screens.subscribe);
      showScreen(screens.adblock);
    }, 300);
  }

  onClick('block-material-btn', function () {
    hideScreen(screens.adblock);
    showScreen(screens.donate);
  });

  onClick('donate-btn', function () {
    hideScreen(screens.donate);
    showScreen(screens.searchResults);

    setTimeout(function () {
      var container = document.getElementById(screens.searchResults).querySelector('.choice-container');
      container.style.top = '100px';
      container.style.opacity = 1;
    }, 50);
  });

  onClick('yes-search-results', chooseResults);
  onClick('no-search-results', chooseResults);

  function chooseResults() {
    var container = document.getElementById(screens.searchResults).querySelector('.choice-container');
    container.style.top = '200px';
    container.style.opacity = 0;

    setTimeout(function () {
      hideScreen(screens.searchResults);
      showScreen(screens.wrong);
    }, 300);
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