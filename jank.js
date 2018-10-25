(function jank() {
  setTimeout(function() {
    var start = Date.now();
    var end = start + Math.random() * 1500;
    while (Date.now() < end) {}
    jank();
  }, Math.random() * 3000);
})();
