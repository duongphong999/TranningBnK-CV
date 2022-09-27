$(document).ready(function () {
    $("#submit-btn").click(function (event) {
        let name = $("#name").val()
        let email = $("#email").val()
        let subject = $("#subject").val()
        let message =$("#message").val()
        var formData = {
            name:name,
            email: email,
            subject: subject,
            message: message
        };
        console.log(name);

        $.ajax({

            type: "POST",
            url: "https://633154713ea4956cfb5b3d40.mockapi.io/api/get_contact",// where you wanna post
            data: formData,
            dataType: "json",
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage); // Optional
            },
            success: function (data) { console.log(data) }

        });
    });
});