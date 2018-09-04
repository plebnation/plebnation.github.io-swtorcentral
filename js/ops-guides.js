(function() {


  $opguidesbutton.on('click', {plebwiki: 1}, showScreen);
  $grammerbutton.on('click', {plebwiki: 2}, showScreen);
  $lorebutton.on('click', {plebwiki: 3}, showScreen);
  function showScreen(e) {
    var targetX = -960 * e.data.plebwiki;
    $screens.css('left', targetX);
  }
})();