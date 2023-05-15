// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
//= require jquery

//= require semantic-ui

$(document).ready(function() {
    $('.ui.dropdown').dropdown();
  });
  $('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
import "channels"

scroll_bottom = function(){
  if ($('#messages').length > 0){
     $('#messages').scrollTop($('messages')[0].scrollHeight);
  }
}
$(document).on('turbolinks:load', function(){
  scroll_bottom = function(){
    if ($('#messages').length > 0){
       $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
  }
  
  // Call the scroll_bottom function
  scroll_bottom();
});
