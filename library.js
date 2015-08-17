var ref = new Firebase("https://vivid-fire-368.firebaseio.com/");
    //var usersRef = ref.child("users");
    
var pic = 'http://www.coralworld.co.il/SiteContent/Files/tiger-shark-picture-swimming-pictures_261284.jpg';
var stories = document.getElementById(story);
var dates = document.getElementById(date);

function saveFunction(){
	ref.set({
      Sarah: {
        picture: 'pic',
        description: 'stories',
        date: 'dates'
      }
    });
}