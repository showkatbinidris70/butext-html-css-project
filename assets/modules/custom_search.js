$("#research_center_name_search").keyup(function () {
    var searchText = $(this).val();
    $.ajax({
        type: "POST",
        url: base_url + "/research_center_search",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        data: { searchText: searchText },
        success: function (data) {
            $("#research_center_name_search_result").html(data);
        },
        error: function (data) {
            console.log(data);
        },
    });
    return false;
});
$("#institute_search").keyup(function () {
    var searchText = $(this).val();
    $.ajax({
        type: "POST",
        url: base_url + "/institute_search",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        data: { searchText: searchText },
        success: function (data) {
            $("#institute_search_result").html(data);
        },
        error: function (data) {
            console.log(data);
        },
    });
    return false;
});
$("#faculty_search").keyup(function () {
    var searchText = $(this).val();
    $.ajax({
        type: "POST",
        url: base_url + "/faculty_search",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        data: { searchText: searchText },
        success: function (data) {
            $("#faculty_search_result").html(data);
        },
        error: function (data) {
            console.log(data);
        },
    });
    return false;
});
