jQuery(function($){
  var $pic = $("div.post-thumbnail img");
  var $gallery = $("div.project-gallery img");
  var settings = {
    width: null,
    height: null,
    class: null,
    srcset: null,
    sizes: null
  }
  $pic.attr(settings);
  $gallery.attr(settings);


  var $prev = $(".left-picArrow");
  var $next = $(".right-picArrow");
  var length = $gallery.length;
  var last = length - 1;
  var currentIndex = 0;
  var prevIndex = last;
  var nextIndex = 1;
  console.log("Prev "+prevIndex);
  console.log("Next "+nextIndex);

  //Previous Arrow Click
  $prev.click( function() {
    currentIndex = prevIndex;
    getCurrentPic();
    updateIndexes();
  });
  //Next Arrow Click
  $next.click(function() {
    currentIndex = nextIndex;
    getCurrentPic();
    updateIndexes();
  });
  //Image Gallery Image click
  $("div.project-gallery img").click(function(){
    $thumb = $(this);
    currentIndex = $gallery.index($thumb);
    getCurrentPic();
    updateIndexes();
  });

  //Grab the pic of the current index
  function getCurrentPic() {
    $pic.fadeOut('fast', function() {
      $pic.attr( "src", $( $gallery[ currentIndex ] ).attr('src') ).fadeIn('fast');
    });
  }

  //Update prev and next clicks.
  //Make sure indexes are in the bounds of the array.
  function updateIndexes() {
    prevIndex = currentIndex - 1;
    nextIndex = currentIndex + 1;
    if (prevIndex < 0) {
      prevIndex = last;
    }
    if (nextIndex > last) {
      nextIndex = 0;
    }
  }
});
