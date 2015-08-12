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

function previewFile(){
       var preview = document.querySelector('.img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; 
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

  previewFile();  //calls the function named previewFile()