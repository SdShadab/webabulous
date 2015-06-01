$(document).foundation();
  $('body').show();
    NProgress.start();
    NProgress.inc(0.2); 
    setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1100);

new WOW().init();

$('.team-pic').hover(function(){
    $(this).children(".overlay").toggleClass('appear-about');
    $(this).children("h5").toggleClass('appear-about');
});


$( document ).ready(function() {      
    var isMobile = window.matchMedia("(max-width: 900px)");

    if (isMobile.matches) {
        //Conditional script here

        $(".workhover:visible")
        .delay(2000)
        .queue(function (next) { 
            $(this).toggleClass('appear-background-work');
          });
        $(".lookfor:visible").delay(2000).toggleClass('appear-text-work');
        $(".clientprof:visible").delay(2000).toggleClass('appear-text-work');
        $(".capability-svg").delay(2000).removeClass("hide");       
    }
 });

$('.work-prof').hover(function(){
    $(this).find(".workhover").toggleClass('appear-background-work');
    $(this).find(".lookfor").toggleClass('appear-text-work');
    $(this).find(".clientprof").toggleClass('appear-text-work');
});

function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(23.755408, 90.366498),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        	var image = '../images/map-pin.png';
  			var myLatLng = new google.maps.LatLng(23.755408, 90.366498);
  			var beachMarker = new google.maps.Marker({
      		position: myLatLng,
      		map: map,
      		icon: image
 		 });

  			map.set('styles', [
{
    featureType: "all",
    stylers: [
      { saturation: -80 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#00ffee" },
      { saturation: 50 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
]);
              }
      google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(
    function() { 
    $("html").niceScroll({
        scrollspeed: "80",
        mousescrollstep: "80",
        cursorcolor: "#ed4523",
        cursorwidth: "10",
        cursorborderradius: "0",
        zindex:"10",
        horizrailenabled:"false",
        autohidemode: "false",
        cursorborder: "0px"
    });
  }
);



$(".capability-item").hover(function() {
    $(this).children(".capability-svg").removeClass("hide-for-medium-up");
    /* $(this).children(".capability-details").show();*/
}, function() {
    $(this).children(".capability-svg").addClass("hide-for-medium-up");
    $/*(this).children(".capability-details").hide();*/
});
 
 
 $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay2').toggleClass('open');
   $('body').toggleClass("overflow-hidden");  
   $('span.top,span.bottom').toggleClass('cross-white');
  
 });

/*    var $items = $(".work-prof");
    $items.hide();
    $items.slice(0, Math.floor($items.length/2)).show();
 
$( "#show_more" ).click(function() {
  
     var $items = $(".work-prof");
    $items.show();
    $('#show_more').addClass('hidden');
});*/

    var $items = $(".ins");
    $items.hide();
    $items.slice(0, Math.ceil($items.length/3)).show();

    
$( "#show_more" ).click(function() {
  
     var $items = $(".ins");
    $items.show();
    $('#show_more').addClass('hidden');
});

$("#contact-info.full-width").click(function() {
    $(this).children("#map-canvas").delay(1500).toggleClass("pointer-events");
});

$(function(){
      $(".join-typed-text").typed({
        strings: ["If you are a perfectionist", "If you like Putin", "If you are a social butterfly",
"If you love coffee","If you are  Lord of the Codes", "If you cook like Walter White", "If you stalk people", "If you are a minimalist", "If you like it simple", "If you hate oatmeals","If you are all about the bass","If you read 100 minds per second","If you are secretly rebel", "If you hate Hooli", "If you are oxymoronic", "If you hate your boss", "If you are alignment OCD", "If you like to crunch numbers", "If you are judging us now"],
        loop: true,
        typeSpeed: 50,
        backspace: function(curString, curStrPos){
            setTimeout(function() {

            // check string array position
            // on the first string, only delete one word
            // the stopNum actually represents the amount of chars to
            // keep in the current string. In my case it's 3.
            if (self.arrayPos == 1){
                self.stopNum = 3;
            }
            //every other time, delete the whole typed string
            else{
                self.stopNum = 0;
            }
            });
        }
      })
 });

$("#arrow-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

$(".go-to-map").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-info").offset().top
    }, 2000);
});

// $('html,body').delay(3000).animate({
//   scrollTop: $(window.location.hash).offset().top
// }, 5000);
