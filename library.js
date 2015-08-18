var data = new Firebase("https://vivid-fire-368.firebaseio.com/");

function saveFunction(){
	var newImage = document.getElementById('previewing').src;
	console.log(newImage);

	var pic = document.getElementById('file').value;
	var stories = document.getElementById('story').value;
	var dates = document.getElementById('date').value;
		data.push({
			'username': { 
					'Sarah':{
						'photo':{
							'file':{
								'pic': newImage,
								'description': stories,
								'date': dates
						}
					}
				}
			}	
		})
}

function loadPics(){
	data.on("value", function(snapshot) {
	  console.log(snapshot.val());
	}, 
	/*for (var = 0; i<data.length */ 
	function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});	
	/*data.child('photo').display;
	console.log('yay it worked');*/
}


// Generate a reference to a new location and add some data using push()
