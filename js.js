// Upload the files
// var uploadfiles = document.querySelector('#fileinput');
// uploadfiles.addEventListener('change', function () {
//   var files = this.files;
//     for(var i=0; i<files.length; i++){
//         previewImage(this.files[i]);
//     }
// }, false);

// function uploadFile(file){
//     var url = 'server/index.php';
//     var xhr = new XMLHttpRequest();
//     var fd = new FormData();
//     xhr.open("POST", url, true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             // Every thing ok, file uploaded
//             console.log(xhr.responseText); // handle response.
//         }
//     };
//     fd.append("upload_file", file);
// 	   xhr.send(fd);
// }

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




// function previewFile(){
//        var preview = document.querySelector('img'); //selects the query named img
//        var file    = document.querySelector('input[type=file]'); 
//        var reader  = new FileReader();

//        reader.onloadend = function () {
//            preview.src = reader.result;
//        }

//        //if (file) {
//            reader.readAsDataURL(file); //reads the data as a URL
//        //} else {
//            //preview.src = "img";
//        //}
//   }

//   previewFile();  //calls the function named previewFile()

var imgFile = document.getElementById('submitfile');
if (imgFile) {
    var width;
    var height;
    var fileSize;
    var reader = new FileReader();
    reader.onload = function(event) {
        var dataUri = event.target.result,
        img = document.createElement("img");
        img.src = dataUri;
        width = img.width;
        height = img.height;
        fileSize = imgFile.files[0].size;
        alert(width);
        alert(height);
        alert(fileSize);
   };
   reader.onerror = function(event) {
       console.error("File could not be read! Code " + event.target.error.code);
   };
   reader.readAsDataURL(imgFile);
}


//hides the menu items
// $("#menu").click(function(){
//     $("#button").hide();
// });
// $("#show").click(function(){
//     $("p").show();
// });
