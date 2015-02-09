$(function() {
  $.get(chrome.extension.getURL('/index.html'), function(data) {
    $(data).insertBefore('body');
    $('embedder').click(function(event) {
      event.preventDefault();
    });
    var dragger = document.getElementById('dragger');
    draggable(dragger);
    dragger.style.backgroundColor = "none";
  });
});
