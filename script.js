$(document).ready(function() {
    // Show male packages by default and hide female packages
    $('.male-package').show();
    $('.female-package').hide();
    
    $('#show-male').click(function(e) {
      e.preventDefault();
      $('.male-package').show();
      $('.female-package').hide();
      $('h1').text('Welcome to My GYM Fitness - Male Packages');
    });
    
    $('#show-female').click(function(e) {
      e.preventDefault();
      $('.male-package').hide();
      $('.female-package').show();
      $('h1').text('Welcome to My GYM Fitness - Female Packages');
    });
  });
  