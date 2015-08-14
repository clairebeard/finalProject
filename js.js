function openLink()
{
	// add link
	console.log(this);
	window.location.href = this.attributes['destination'].value; 
}

$(document).ready(function()
{
	//gets the tag of the link or button
	$('button').click(openLink); 
});


//  $(function() 
//  {
//     var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1bS5OqP0JXuxCQnIK1CYJpSEKqRyT9XWWKNnNCT97BNw/edit#gid=0';
//     Tabletop.init( { key: public_spreadsheet_url,
//              callback: displayEntries } );
// })

function handleData(data, tabletop) {
  console.log("new data!");
  console.log(data);
  var el = document.getElementById("image");
  for (var i = 0; i < data.length; i++) {
    el.innerHTML += data[i].username + "<br>" + data[i].story + "<br>" + data[i].date;
   }
}

function init() {
  Tabletop.init( {
    key: 'https://docs.google.com/spreadsheets/d/1bS5OqP0JXuxCQnIK1CYJpSEKqRyT9XWWKNnNCT97BNw/pubhtml',
    callback: handleData,
    simpleSheet: true
  } );
}

window.onload = init;



$(document).ready(function (e) {
$("#uploadimage").on('submit',(function(e) {
e.preventDefault();
$("#message").empty();
$('#loading').show();
$.ajax({
url: "ajax_php_file.php", // Url to which the request is send
type: "POST",             // Type of request to be send, called as method
data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
$('#loading').hide();
$("#message").html(data);
}
});
}));

// Function to preview image after validation
$(function() {
$("#file").change(function() {
$("#message").empty(); // To remove the previous error message
var file = this.files[0];
var imagefile = file.type;
var match= ["image/jpeg","image/png","image/jpg"];
if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
{
$('#previewing').attr('src','noimage.png');
$("#message").html("<p id='error'>Please Select A valid Image File</p>"+"<h4>Note</h4>"+"<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
return false;
}
else
{
var reader = new FileReader();
reader.onload = imageIsLoaded;
reader.readAsDataURL(this.files[0]);
}
});
});
function imageIsLoaded(e) {
$("#file").css("color","green");
$('#image_preview').css("display", "block");
$('#previewing').attr('src', e.target.result);
$('#previewing').attr('width', '250px');
$('#previewing').attr('height', '230px');
};
});
//hides the menu items
// $("#menu").click(function(){
//     $("#button").hide();
// });
// $("#show").click(function(){
//     $("p").show();
// });

