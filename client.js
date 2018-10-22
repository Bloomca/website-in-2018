// this is the simplest script ever, so all code is inside IIFE
(function () {
  var screens = {
    start: 'start-app',
    notification: 'notification',
    makeStartPage: 'start-page',
    cookies: 'cookies',
    ageVerification: 'age-verification',
    restrictAge: 'restrict-age',
    defaultCity: 'default-city',
    subscribe: 'subscribe',
    adblock: 'adblock',
    consultant: 'consultant',
    searchResults: 'search-results',
    wrong: 'wrong'
  };

  onClick('start-btn', function () {
    hideScreen(screens.start);
    showScreen(screens.notification);
  });

  onClick('no-notifications-btn', chooseNotifications);
  onClick('yes-notifications-btn', chooseNotifications);

  function chooseNotifications() {
    hideScreen(screens.notification);
    showScreen(screens.makeStartPage);
  }

  onClick('no-start-page-btn', chooseStartPage)

  function chooseStartPage() {
    hideScreen(screens.makeStartPage);
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
    showScreen(screens.defaultCity);
  });

  onClick('yes-default-city-btn', chooseDefaultCity);
  onClick('no-default-city-btn', chooseDefaultCity);

  function chooseDefaultCity() {
    hideScreen(screens.defaultCity);
    showScreen(screens.subscribe);
  }

  onClick('close-subscribe-btn', chooseSubscription);
  onClick('yes-subscribe-btn', chooseSubscription);

  function chooseSubscription() {
    hideScreen(screens.subscribe);
    showScreen(screens.adblock);
  }

  onClick('adblock-btn', function () {
    hideScreen(screens.adblock);
    showScreen(screens.consultant);
  });

  onClick('close-consultant-btn', function () {
    hideScreen(screens.consultant);
    showScreen(screens.searchResults);
  });

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