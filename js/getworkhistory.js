$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "https://633154713ea4956cfb5b3d40.mockapi.io/api/get_work_history",
        dataType: "json",
        encode: true,

    }).done(function (data) {

        $(".date").text(data[0].date);

        $(".work").text(data[0].work);

        $(".describe").text(data[0].describe);


    });

});