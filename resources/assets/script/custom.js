// ========================== page loading
setTimeout(function() {
  $(".loading-welcome").removeClass("active");
}, 2500);

// ========================= show share
$("#share-fab-button").click(function() {
  $(".fixed-blur-bgd").toggleClass("active");
  $(".chat").toggleClass("is-visible");
  $(".overlya-share").addClass("active");
});

$(".icon-event-close").click(function() {
  $(".chat").removeClass("is-visible");
  $(".fixed-blur-bgd").removeClass("active");
});

$(".overlya-share").click(function() {
  $(this).removeClass("active");
  $(".chat").removeClass("is-visible");
  $(".fixed-blur-bgd").removeClass("active");
});

// ========================= copy to Clipboard

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(".copyButton").click(function() {
  event.stopPropagation();
  $(".CopySucceed").removeClass("d-none");
});

setInterval(function() {
  // toggle the class every
  setTimeout(function() {
    // toggle another class
    $(".CopySucceed").addClass("d-none");
  }, 2000);
}, 2000);
// =========================== youtube
function autoPlayVideo(vcode, width, height) {
  "use strict";
  $("#videoContainer").html(
    '<iframe class="yt_players" width="' +
      width +
      '" height="' +
      height +
      '" src="https://www.youtube.com/embed/' +
      vcode +
      '?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>'
  );
}
jQuery(".introVid").click(function() {
  autoPlayVideo("qIMvLUjYOHs", "450", "283");
});
