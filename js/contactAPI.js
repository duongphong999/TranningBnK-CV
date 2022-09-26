$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "https://632d5cf3519d17fb53bc70c7.mockapi.io/api/get_contact",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      event.preventDefault();
    });
  });