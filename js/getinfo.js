$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "https://633154713ea4956cfb5b3d40.mockapi.io/api/get_info",
        dataType: "json",
        encode: true,

    }).done(function (data) {

        $(".name-info").text(data[0].name);

        $(".age").text(data[0].age);

        $(".email").text(data[0].email);

        $(".phone").text(data[0].phone);

        $(".address").text(data[0].address);


    });

});