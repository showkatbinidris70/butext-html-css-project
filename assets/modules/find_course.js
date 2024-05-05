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
    var selectedProgramLevel = new Array();
    var n = jQuery(".programLevel:checked").length;
    if (n > 0) {
        jQuery(".programLevel:checked").each(function () {
            selectedProgramLevel.push($(this).val());
        });
    }
    var selectedFaculty = new Array();
    var n = jQuery(".programFaculty:checked").length;
    if (n > 0) {
        jQuery(".programFaculty:checked").each(function () {
            selectedFaculty.push($(this).val());
        });
    }
    $.ajax({
        url: "?",
        type: "get",
        datatype: "html",
        data: {
            page: page,
            searchProgram: $("#programName").val(),
            programLevel: selectedProgramLevel,
            programFaculty: selectedFaculty,
        },
    })
        .done(function (data) {
            $("#showCourseFinder").empty().html(data);
            location.hash = page;
        })
        .fail(function (jqXHR, ajaxOptions, thrownError) {
            alert("No response from server");
        });
}
