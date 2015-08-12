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
  var el = document.getElementById("myBody");
  for (var i = 0; i < data.length; i++) {
    el.innerHTML += data[i].Names + "<br>";
    //el.innerHTML = el.innterHTML + data[i].Names;
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


function previewFile(){
       var preview = document.querySelector('.img'); //selects the query named img
       var file    = document.querySelector('input[type=file]'); 
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "file";
       }
  }

  previewFile();  //calls the function named previewFile()



// function upload(){

// }


//hides the menu items
// $("#menu").click(function(){
//     $("#button").hide();
// });
// $("#show").click(function(){
//     $("p").show();
// });
