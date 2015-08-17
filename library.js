var data = new Firebase("https://vivid-fire-368.firebaseio.com/");
/*var authData = data.getAuth();*/
    //var usersRef = ref.child("users");

function saveFunction(){
/*ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
	function authDataCallback(authData){
		if (authData){
			console.log("User" + authData.uid + " is logged in with " + authData.provider);
		} else {
			console.log("User is logged out");
		}
	}
*/
var pic = document.getElementById('file').value;
var stories = document.getElementById('story').value;
var dates = document.getElementById('date').value;
	data.push({
		'username': { 
				'Sarah':{
					'photo':{
						'file':{
							'pic': file,
							'description': stories,
							'date': dates
					}
				}
			}
		}	
	})
}


// Generate a reference to a new location and add some data using push()


/*
	ref.set({
      Sarah: {
        picture: pic,
        	description: stories,
        	date: dates
      }
    });
}*/
//in the beginning, when we start the thing the data needs to be ref.set({
/*var i = 0;*/
	/*"0":{
		'username': { 
				"Sarah":{
					'photo':{
						'file':{
							'pic': file,
							'description': stories,
							'date': dates
					}
				}
			}
		}	
	}
})*/