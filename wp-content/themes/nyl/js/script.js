 function isValidEmailAddress(r) {
    var e = RegExp(/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i);
    return e.test(r)
}
/*Telephone validation*/
function isNumber(elementRef) {  
    keyCode=elementRef.charCode;
    // var keyCode = (event.which) ? event.which : (window.event.keyCode) ?    window.event.keyCode : -1;  
    // console.log(keyCode);
    if ((keyCode >= 48) && (keyCode <= 57) || (keyCode <= 32)) {  
        return true;  
    }  else if (keyCode == 43) {  
        if ($('#'+elementRef.target.id).val().trim().length == 0){  
            return true;  
        } else {
            return false;  
        }
    }  
    return false;  
}  

$(document).on('click',".submit_career",function(event){

     var name=$('#name').val();
     var email=$('#email').val();
     var phone=$('#phone').val();
     var message=$('#message').val();
     var role=$('#role').val();
     var regex = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
     var x=0;
      if (name=='' || name == undefined) {
       $('#name').parents('form-rows').addClass('error-alert');
       $('.error-name').text("Please enter your name").show();
       x++;
      } else {
       $('#name').parents('form-rows').removeClass('error-alert');
       $('.error-name').hide();
      }

      if (message=='' || message == undefined) {
       $('#message').parents('form-rows').addClass('error-alert');
       $('.error-message').text("Please enter your information").show();
       x++;
      } else {
       $('#message').parents('form-rows').removeClass('error-alert');
       $('.error-message').hide();
      }


      if (phone=='' || phone == undefined) {
       $('#phone').parents('form-rows').addClass('error-alert');
       $('.error-phone').text("Please enter your mobile number").show();
       x++;
      } else {
       $('#phone').parents('form-rows').removeClass('error-alert');
       $('.error-phone').hide();
      }

    if (email!='') {
       if (!regex.test(email)) {
         $('.error-mail').hide();
         $('#email').parents('form-rows').addClass('error-alert');
         $('.error-mail').text("Please enter a valid email address").show();
         x++;
       } else {
         $('#email').parents('form-rows').removeClass('error-alert');
         $('.error-mail').hide();
       }
      } else {
       $('.error-mail').hide();
       $('.error-mail').text("Please enter your email address").show();
       $('#email').parents('form-rows').addClass('error-alert');
       x++;
      }

     
console.log(x);
     if (x==0) {


      $.ajax({
            type: "POST",
            dataType: "text",
            url: templateUri+"/ajax/career.php",
            data: {action: "career",name: name,email: email, phone: phone, message: message, role: role},
                  }).done(function (data) {
            if(data.trim()==1) {
                window.location.href = blogUri+"/career/thank-you/";
            } else {
                console.log(data);
                // $('#content').text(data);
                // $('.hover_bkgr_fricc').css('display','block');
            }
        });
      event.preventDefault();
     }

else{

      event.preventDefault();
   }
});

/******Contact Us*****/

$(document).on('click',".submit_contact",function(event){

     var name=$('#contact-name').val();
     var email=$('#contact-mail').val();
     var phone=$('#contact-phone').val();
     var message=$('#contact-message').val();
     var regex = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
     var x=0;
      if (name=='' || name == undefined) {
       $('#contact-name').parents('form-rows').addClass('error-alert');
       $('.error-name').text("Please enter your name").show();
       x++;
      } else {
       $('#contact-name').parents('form-rows').removeClass('error-alert');
       $('.error-name').hide();
      }

      if (message=='' || message == undefined) {
       $('#contact-message').parents('form-rows').addClass('error-alert');
       $('.error-message').text("Please enter your message").show();
       x++;
      } else {
       $('#contact-message').parents('form-rows').removeClass('error-alert');
       $('.error-message').hide();
      }


      if (phone=='' || phone == undefined) {
       $('#contact-phone').parents('form-rows').addClass('error-alert');
       $('.error-phone').text("Please enter your mobile number").show();
       x++;
      } else {
       $('#contact-phone').parents('form-rows').removeClass('error-alert');
       $('.error-phone').hide();
      }

    if (email!='') {
       if (!regex.test(email)) {
         $('.error-mail').hide();
         $('#contact-mail').parents('form-rows').addClass('error-alert');
         $('.error-mail').text("Please enter a valid email address").show();
         x++;
       } else {
         $('#contact-mail').parents('form-rows').removeClass('error-alert');
         $('.error-mail').hide();
       }
      } else {
       $('.error-mail').hide();
       $('.error-mail').text("Please enter your email address").show();
       $('#contact-mail').parents('form-rows').addClass('error-alert');
       x++;
      }

     
console.log(x);
     if (x==0) {


      $.ajax({
            type: "POST",
            dataType: "text",
            url: templateUri+"/ajax/contact.php",
            data: {action: "contact",name: name,email: email, phone: phone, message: message},
                  }).done(function (data) {
            if(data.trim()==1) {
                window.location.href = blogUri+"/contact-us/thank-you/";
            } else {
                console.log(data);
                // $('#content').text(data);
                // $('.hover_bkgr_fricc').css('display','block');
            }
        });
      event.preventDefault();
     }

else{

      event.preventDefault();
   }
});
/******Newsletter*****/

$(document).on('click',".newsletter",function(event){

     var name=$('#subname').val();
     var email=$('#submail').val();
     var message=$('#submsg').val();
     var regex = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
     var x=0;
      if (name=='' || name == undefined) {
       $('#subname').parents('form-rows').addClass('error-alert');
       $('.error-nme').text("Please enter your name").show();
       x++;
      } else {
       $('#subname').parents('form-rows').removeClass('error-alert');
       $('.error-nme').hide();
      }

      if (message=='' || message == undefined) {
       $('#submsg').parents('form-rows').addClass('error-alert');
       $('.error-mess').text("Please enter your message").show();
       x++;
      } else {
       $('#submsg').parents('form-rows').removeClass('error-alert');
       $('.error-mess').hide();
      }

    if (email!='') {
       if (!regex.test(email)) {
         $('.error-mil').hide();
         $('#submail').parents('form-rows').addClass('error-alert');
         $('.error-mil').text("Please enter a valid email address").show();
         x++;
       } else {
         $('#submail').parents('form-rows').removeClass('error-alert');
         $('.error-mil').hide();
       }
      } else {
       $('.error-mil').hide();
       $('.error-mil').text("Please enter your email address").show();
       $('#submail').parents('form-rows').addClass('error-alert');
       x++;
      }

     
console.log(x);
     if (x==0) {


      $.ajax({
            type: "POST",
            dataType: "text",
            url: templateUri+"/ajax/newsletter.php",
            data: {action: "contact",name: name,email: email,message: message},
                  }).done(function (data) {
            if(data.trim()==1 | data == 1) {
                window.location.href = blogUri+"/thank-you/";
            } else {
                console.log(data);
            }
        });
      event.preventDefault();
     }

else{

      event.preventDefault();
   }
});