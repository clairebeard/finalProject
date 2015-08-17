var ref = new Firebase("https://vivid-fire-368.firebaseio.com/");
    //var usersRef = ref.child("users");
    
var pic = document.getElementById('file').value;
var stories = document.getElementById('story').value;
var dates = document.getElementById('date').value;
console.log(dates);
console.log(stories);

function convertImage(url, callback, outputFormat){
    var img = document.getElementById('file').value;;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'), dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null; 
    };
    img.src = url;
}

function saveFunction(){
ref.set({
/*var i = 0;*/
	"0":{
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
})
}

/*
	ref.set({
      Sarah: {
        picture: pic,
        	description: stories,
        	date: dates
      }
    });
}*/