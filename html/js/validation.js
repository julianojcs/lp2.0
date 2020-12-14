$(document).ready(function(){
        $('#send_message').click(function(e){

            //Stop form submission & check the validation
            e.preventDefault();

            // Variable declaration
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
            var specialty = $('#specialty').val();
            var phone = $('#phone').val();
            var city = $('#city').val();
            var state = $('#state').val();
            var crm = $('#crm').val();
            var ufcrm = $('#ufcrm').val();

			$('#name,#email,#specialty,#phone,#city,#state,#crm,#ufcrm').click(function(){
				$(this).removeClass("error_input");
			});

         	// Form field validation
            if(name.length == 0){
                var error = true;
                $('#name').addClass("error_input");
            }else{
                $('#name').removeClass("error_input");
            }
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                $('#email').addClass("error_input");
            }else{
                $('#email').removeClass("error_input");
            }
            if(specialty.length == 0){
              var error = true;
              $('#specialty').addClass("error_input");
            }else{
                $('#specialty').removeClass("error_input");
            }
			      if(phone.length == 0){
                var error = true;
                $('#phone').addClass("error_input");
            }else{
                $('#phone').removeClass("error_input");
            }
            if(city.length == 0){
                var error = true;
                $('#city').addClass("error_input");
            }else{
                $('#city').removeClass("error_input");
            }
            if(state.length == 0){
              var error = true;
              $('#state').addClass("error_input");
            }else{
                $('#state').removeClass("error_input");
            }
            if(crm.length == 0){
              var error = true;
              $('#crm').addClass("error_input");
            }else{
                $('#crm').removeClass("error_input");
            }
            if(ufcrm.length == 0){
              var error = true;
              $('#ufcrm').addClass("error_input");
            }else{
                $('#ufcrm').removeClass("error_input");
            }

            // If there is no validation error, next to process the mail function
            if(error == false){
               // Disable submit button just after the form processed 1st time successfully.
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });

				/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
                $.post("email.php", $("#contact_form").serialize(),function(result){
                    //Check the result set from email.php file.
                    if(result == 'sent'){
                        //If the email is sent successfully, remove the submit button
                         $('#submit').remove();
                        //Display the success message
                        $('#mail_success').fadeIn(500);
                    }else{
                        //Display the error message
                        $('#mail_fail').fadeIn(500);
                        // Enable the submit button again
                        $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                    }
                });
            }
        });
    });
