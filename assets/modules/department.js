

$("#reload").click(function(){
    $.ajax({
        type:"GET",
        url:base_url+"/refresh_captcha",

        success:function(data){
            $(".captcha span").html(data.captcha);
        }
    });
});


// Show all Publiction
function showEmployeePublication(employee_id,deptID){
    $(".publication-ul-li").css('background','white');
    $("#activeEmployeeSelected_"+employee_id).css({"background-color":"lightgray","border-radius":"5px"});
    var publicationCtgArr = [];
    $('input.publicationCtg:checkbox:checked').each(function () {
        publicationCtgArr.push($(this).val());
    });
    $(".loader").show();
    $("#EmployeeInfoID").val(employee_id);
    $.ajax({
        type: "POST",
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        url: base_url+"/bodyPublication",
        data: {employee_id:employee_id,deptID:deptID,publicationCtg:publicationCtgArr},
        success: function(response){
            $(".loader").hide();
            $("#show_result").html(response);
        }
    });
}

$('#searchingEmployeeInfo').keyup(function() {
    var searchName    = $(this).val();
    var url = $(location).attr('href');
    var segments = url.split('/');
    var deptID = $("#hiddenDeptID").val();
    $.ajax({
        type: "POST",
        url: base_url+"/body/EmployeeInfo",
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        data: {searchInfo:searchName,deptID:deptID},
        success: function(data) {
            $("#showEmployeeInfo").html(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
    return false;
});


$('.publicationCtg').click(function() {
    // var element_id = elementId($(this).attr('id'));
    var empID=$("#EmployeeInfoID").val();
    var publicationCtgArr = [];
    $('input.publicationCtg:checkbox:checked').each(function () {
        publicationCtgArr.push($(this).val());
    });
    var url = $(location).attr('href');
    var segments = url.split('/');
    var deptID = $("#hiddenDeptID").val();
    $(".loader").show();
    $.ajax({
        type: "POST",
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        url: base_url+"/bodyPublication",
        data: {publicationCtg:publicationCtgArr,deptID:deptID,employee_id:empID},
        success: function(response){
            $(".loader").hide();
            $("#show_result").html(response);
        }
    });
});



function elementId(id_arr) {
    var id = id_arr.split("_");
    return id[id.length - 1];
}



function goBack() {
    window.history.back();
}


function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

$('a.showMore').click(function(){
    $(".shortBiography").hide();
    $(".more").show();
})
$('a.lessNow').click(function(){
    $(".shortBiography").show();
    $(".more").hide();
})
