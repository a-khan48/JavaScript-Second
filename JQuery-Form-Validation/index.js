$(document).ready(function() {
    let form = $('#form')
    let submit =  $('#submit');
    submit.on('click', function() {
      let name = $('#name').val();
      let email = $('#email').val();
      let phone = $('#phone').val();
      let messageArea = $('#message-area').val();
      let message = $('#message');
      let required = [name, email, phone, messageArea];
  
      for (let i = 0; i < required.length; i++) {
        if (required[i] <= 0) {
          message.text("Please Fill Out Required Fields").addClass('warning');
          $('label').eq(i).addClass('warning')
        } else {
            $('label').eq(i).removeClass('warning') 
        }
      }

      if ($('label').hasClass('warning') <= 0) {
        form.css("display", "none")
        $('h2').html('Thanks for your feedback!')
      }
     })})