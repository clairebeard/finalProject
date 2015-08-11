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


//hides the menu items
// $("#menu").click(function(){
//     $("#button").hide();
// });
// $("#show").click(function(){
//     $("p").show();
// });