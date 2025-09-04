setInterval(function() {
  window.location.href = window.location.pathname + "?t=" + new Date().getTime();
}, 5000);
