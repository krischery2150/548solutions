// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap
//= require now-ui-kit
//= require tether.min
//= require rails-ujs
//= require turbolinks
//= require test
//= require static_pages

$( document ).ready( function() {

    window.sr = ScrollReveal();
    
    sr.reveal('.hideme',{
      duration: 2000,
      origin: 'bottom',  
    });
    
    sr.reveal('.team-player',{
      duration: 1500,
      origin: 'top',  
    });

    sr.reveal('.btn-icon',{
      duration: 500,
      delay: 500,
      origin: 'top',  
    });
 
 
 $(".rotate").textrotator({
  animation: "flipCubeUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 1000 // How many milliseconds until the next word show.
  });
});