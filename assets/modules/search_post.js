$(window).on("hashchange", function () {
    if (window.location.hash) {
        var page = window.location.hash.replace("#", "");
        if (page == Number.NaN || page <= 0) {
            return false;
        } else {
            getData(page);
        }
    }
});

$(document).ready(function () {
    $(document).on("click", ".pagination a", function (event) {
        event.preventDefault();

        $("li").removeClass("active");
        $(this).parent("li").addClass("active");

        var myurl = $(this).attr("href");
        var page = $(this).attr("href").split("page=")[1];

        getData(page);
    });
});

function getData(page) {
    $.ajax({
        url: "?page=" + page,
        type: "get",
        datatype: "html",
        data: $("#searchingForm").serialize(),
    })
        .done(function (data) {
            $("#showInfo").empty().html(data);
            location.hash = page;
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                "slow"
            );
        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            alert("No response from server");
        });
}
