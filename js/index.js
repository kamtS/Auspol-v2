$('document').ready(function() {
	// body...
	console.log('is this working')

//Spindr Data Array
  var pollieProfiles = [
	{
		name: "Ellen Sandell",
		imgName: "Ellen_Sandell",
		postcode: "3000",
		party: "Greens"
	},
	{
		name: "Daniel Andrews",
		imgName: "Daniel_Andrews",
		postcode: "3000",
		party: "Labor"
	},
	{
		name: "Wade Noonan",
		imgName: "Wade_Noonan",
		postcode: "3000",
		party: "Liberal"
	}

	]

/* OK so, when a user enters a postcode I only want them to see Politicians with a matching postcode
as identified in the array "pollieProfiles" So if I create a "master array" that then filters only objects with matching postcodes
into a 2nd array, the spindr app then pulls its data from the 2nd "dynamic" array.

So to do that...

IF userInput = pollieProfiles.postcode THEN copy all that = pollProfiles.postcode to dynamicPollieArray



var dynamicPollieArray [
	{
		
	},
] 


*/

//Spindr postcode search bar
	$('#spindrApp').hide();

	$('#submitButton').click(function(e) {
		e.preventDefault();

		var userInput = $('#postcodeSearch').val();
		userInput = userInput.trim();

		$('#spindrApp').show();
	});




//Spindr "logic"

		
	$('.yesButton').click(function() {



		/*pollieProfiles.forEach(function(element, index) {
	    	$('#profileImg').append('<img src= "../data/images/pollies/' + element.imgName + '.png"> ');
	    	$('.dynamicPollieName').append('<h2>' + element.name + "</h2>")
	    	$('.dynamicParty').append('<p>' + element.party + "</p>")
	    });*/


	});

		
});