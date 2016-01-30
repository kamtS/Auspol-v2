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


//Spindr postcode search bar
	$('#spindrApp').hide();

	$('#submitButton').click(function(e) {
		e.preventDefault();
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