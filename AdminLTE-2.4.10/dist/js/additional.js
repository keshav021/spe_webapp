
$(document).ready(function(){


  $(document).on('click',"#submitWorkerId",function(e){
    e.preventDefault();
    //alert("oye");
    var id = $("#workerid").val();
    if(id.length==0){
      alert("Enter Worker Id");
      return;
    }
    $("#workerData").html("");
    var content = "";
    $.ajax({
      type: "POST",
      url: 'http://localhost:4000/workerDetails',
      contentType: "application/json",
      data: JSON.stringify({
                id:id,
            }),
      dataType: "json",
      success: function(data){
         if(data.msg=="successfull"){
          var content2="";
          content2 += '<section class="content">';
          content2 +='<div class="row">';
          content2 +='<div class="col-xs-12">';
          content2 +='<div class="box">';
          content2 +='<div class="box-header">';
          content2 +='<h3 class="box-title">Name of Worker: &nbsp;&nbsp<b>  '+data.name+'</b></h3>';
          content2 +='</div>';
          content2 +='<!-- /.box-header -->';
          content2 +='<div class="box-body">';
          content2 +='<table id="example2" class="table table-bordered table-hover">';
          content2 +='<thead>';
          content2 +='<tr>';
          content2 +='<th>Date</th>';
          content2 +='<th>Rooms Cleaned</th>';
          content2 +='</tr>';
          content2 +='</thead>';
          content2 +='<tbody>';
          $.each(data.data, function(index,value){
            //alert(index);
            var date = new Date(value.date);
            var newDate = date.toString('dd-MM-yy');
            content2 += '<tr>';
            content2 += '<td>' + date.toString().substring(4,15) + '</td>';
            content2 += '<td>' + value.rooms+ '</td>';
            content2 += '<tr>';
          })
          content2 +='</tbody>';
          content2 +='</table></div></div></div></div></section>';
          content2 +='</div>';
          $("#workerData").html(content2);
          }
          else{
             //alert("phat gaya");
             content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Worker Exists with that ID</div>';
             $('#workerData').html(content);
          }

      }

    });
    
  })


  $(document).on('click',"#submitRoomNo",function(e){
    e.preventDefault();
    //alert("oye");
    var id = $("#roomno").val();
    if(id.length==0){
      alert("Enter Room Number");
      return;
    }
    $("#roomData").html("");
    var content = "";
    $.ajax({
      type: "POST",
      url: 'http://localhost:4000/roomDetails',
      contentType: "application/json",
      data: JSON.stringify({
                id:id,
            }),
      dataType: "json",
      success: function(data){
         if(data.msg=="successfull"){
          var content2="";
          content2 += '<section class="content">';
          content2 +='<div class="row">';
          content2 +='<div class="col-xs-12">';
          content2 +='<div class="box">';
          content2 +='<div class="box-header">';
          content2 +='<h3 class="box-title">Email of Student: &nbsp;&nbsp<b>  '+data.email+'</b></h3>';
          content2 +='</div>';
          content2 +='<!-- /.box-header -->';
          content2 +='<div class="box-body">';
          content2 +='<table id="example2" class="table table-bordered table-hover">';
          content2 +='<thead>';
          content2 +='<tr>';
          content2 +='<th>Date</th>';
          content2 +='<th>Type</th>';
          content2 +='</tr>';
          content2 +='</thead>';
          content2 +='<tbody>';
          $.each(data.data, function(index,value){
            //alert(index);
            var date = new Date(value.date);
            var newDate = date.toString('dd-MM-yy');
            content2 += '<tr>';
            content2 += '<td>' + date.toString().substring(4,15) + '</td>';
            if(value.type==0){
             content2 += '<td>' +'Mop'+ '</td>' 
            }
            else{
              content2 += '<td>' +'Sweep'+ '</td>' 
            }
            //content2 += '<td>' + value.rooms+ '</td>';
            content2 += '<tr>';
          })
          content2 +='</tbody>';
          content2 +='</table></div></div></div></div></section>';
          content2 +='</div>';
          $("#roomData").html(content2);
          }
          else{
             //alert("phat gaya");
             content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Student Exists with that Roll Number</div>';
             $('#roomData').html(content);
          }

      }

    });
    
  })


  $(document).on('click',"#submitDate",function(e){
    e.preventDefault();
    //alert("oye");
    var id = $("#date2").val();
    //alert(id);
    if(id.length==0){
      alert("Enter Date");
      return;
    }
    $("#dateData").html("");
    var content = "";
    $.ajax({
      type: "POST",
      url: 'http://localhost:4000/dateFetch',
      contentType: "application/json",
      data: JSON.stringify({
                id:id,
            }),
      dataType: "json",
      success: function(data){
         if(data.msg=="successfull"){
          var content2="";
          content2 += '<section class="content">';
          content2 +='<div class="row">';
          content2 +='<div class="col-xs-12">';
          content2 +='<div class="box">';
          content2 +='<div class="box-header">';
          content2 +='<h3 class="box-title"><b>  '+'Total Rooms Cleaned'+'</b></h3>';
          content2 +='</div>';
          content2 +='<!-- /.box-header -->';
          content2 +='<div class="box-body">';
          content2 +='<table id="example2" class="table table-bordered table-hover">';
          content2 +='<thead>';
          content2 +='<tr>';
          content2 +='<th>Type</th>';
          content2 +='<th>Rooms Cleaned</th>';
          content2 +='</tr>';
          content2 +='</thead>';
          content2 +='<tbody>';
          
            //alert(index);
            content2 += '<tr>';
            content2 += '<td>' + 'Mop'+ '</td>';
            content2 += '<td>' + data.counts+ '</td>';
            content2 += '<tr>';
            content2 += '<tr>';
            content2 += '<td>' + 'Sweep'+ '</td>';
            content2 += '<td>' + data.counts2+ '</td>';
            content2 += '<tr>';
          
          content2 +='</tbody>';
          content2 +='</table></div></div></div></div></section>';
          content2 +='</div>';
          $("#dateData").html(content2);
          }
          else{
             //alert("phat gaya");
             content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Worker Exists with that ID</div>';
             $('#dateData').html(content);
          }

      }

    });
    
  })

})



$('#submit').click(function(e) {   /* The form of validation and checking of credentials entered for login by Admin */
      e.preventDefault();
   // Initializing Variables With Form Element Values
//alert("aye");
var email = $('#email').val();
var password =$("#password").val();
// To Check Empty Form Fields.

// Validating Email Field.
if ( email.length == 0) {
$('#head').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
}
else if (password.length == 0) {
    $('#head').text("* Please Enter password *"); // This Segment Displays The Validation Rule For Password
    $("#password").focus();
    return false;
}
else {
setdata();
}
});




function setdata(){    // This function checks the validity of the credentials
    var email = $('#email').val();
    var password =$("#password").val();
    $.ajax({
      type: "POST",
      url: 'http://localhost:4000/adminLogin',
      contentType: "application/json",
      data: JSON.stringify({
                email:email,
                password:password
            }),
      dataType: "json",
      success: function(data){
         if(data.msg=="successfull"){
          window.location="index_my.html";
          alert("Ballw");
          }
          else if(data=="Error"){
           $('#head').text("Could NOT Send SMS Right Now , Try again Later");
          }
          else{
              $('#head').text("Either Incorrect username or password");
          }

      }
    });
 //alert(a);
    }

$('#worker').click(function(e) {   
      e.preventDefault();
     // alert('Entered Worker');
      $("#parent").html("");

var content='';
content +='<form class="form-horizontal">';
content +='<div class="box-body">';
content +='<div class="form-group" style="margin-left:-10%">';
content +='<label for="workerid" class="col-sm-2 control-label">Worker Id</label>';

content +='<div class="col-sm-2">';
content +='<input type="text" class="form-control" id="workerid" placeholder="Worker Id">';
content +='</div>';
content +='<div class="col-sm-2">';
content +='<button type="submit" id = "submitWorkerId" class="btn btn-info pull-left">Search</button>';
content +='</div>';
content +='</div>';
content +='</div>';
content +='</form>';
content +='<div id="workerData">';
$("#parent").html(content);



    });

$('#room').click(function(e) {   
      e.preventDefault();
     // alert('Entered Worker');
      $("#parent").html("");

var content='';
content +='<form class="form-horizontal">';
content +='<div class="box-body">';
content +='<div class="form-group" style="margin-left:-10%">';
content +='<label for="roomno" class="col-sm-2 control-label">Room Number</label>';

content +='<div class="col-sm-2">';
content +='<input type="text" class="form-control" id="roomno" placeholder="Roll Number">';
content +='</div>';
content +='<div class="col-sm-2">';
content +='<button type="submit" id = "submitRoomNo" class="btn btn-info pull-left">Search</button>';
content +='</div>';
content +='</div>';
content +='</div>';
content +='</form>';
content +='<div id="roomData">';
$("#parent").html(content);



    });

$('#date').click(function(e) {   
      e.preventDefault();
     // alert('Entered Worker');
      $("#parent").html("");

var content='';
content +='<form class="form-horizontal">';
content +='<div class="box-body">';
content +='<div class="form-group" style="margin-left:-10%">';
content +='<label for="date" class="col-sm-2 control-label">Date</label>';

content +='<div class="col-sm-2">';
content +='<input type="text" class="form-control" id="date2" placeholder="Date">(yyyy-mm-dd)';
content +='</div>';
content +='<div class="col-sm-2">';
content +='<button type="submit" id = "submitDate" class="btn btn-info pull-left">Search</button>';
content +='</div>';
content +='</div>';
content +='</div>';
content +='</form>';
content +='<div id="dateData">';
$("#parent").html(content);



    });


/*$("#submitWorkerId").click(function(e) {   
      e.preventDefault();
      alert('Entered Worker');
   });*/