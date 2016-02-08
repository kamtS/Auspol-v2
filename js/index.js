$('document').ready(function() {
	// body...
	console.log('is this working');

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
	},
	{
		name: "Clem Newton Brown",
		imgName: "Clem_Newton_Brown",
		postcode: "4000",
		party: "Liberal"
	}

	];


	var foundPollieArray = [] ;


	var rejectedPollies = [] ;

	var matchedPollies = [] ;

		/* OK so, when a user enters a postcode I only want them to see Politicians with a matching postcode
		as identified in the array "pollieProfiles" So if I create a "master array" that then filters only objects with matching postcodes
		into a 2nd array, the spindr app then pulls its data from the 2nd "dynamic" array.

		So to do that...

		IF userInput = pollieProfiles.postcode THEN copy all that = pollProfiles.postcode to dynamicPollieArray

		var dynamicPollieArray [ ] ;
		*/

	//Spindr postcode search bar
	$('#cardContainer').hide();
	$('#sorryMsg').hide();
	

	$('#submitButton').click(function(e) {
		e.preventDefault();
	//	$('#sorryMsg').hide();

		var userInput = $('#postcodeSearch').val();
			userInput = userInput.trim();

				pollieProfiles.forEach(function(element){
					console.log(userInput, element);
					if (userInput === element.postcode) {
						foundPollieArray.push(element);
						
						console.log('Array has been pushed');

							

					$('#cardContainer').show();
				} else {
					$('#sorryMsg').show();
				};
			
			/*Here I want to iterate over the fPA, as I do this I want to take each string from the objects of the array
			and have them render appropriate HTML in one action. In essence, they all stack atop each other.*/
			
		});

					foundPollieArray.forEach(function(element) {
						$('.cardContainer').append('<div class="innerContent pollieCard"> <div class="pollieProfile"> <div class="profileImage"> <img id="profileImg" src="../data/images/pollies/' + element.imgName + '.png' + '"> </div> <div class="pollieName"> <h2 class="dynamicPollieName">' + element.name + '</h2> <p class="dynamicParty">' + element.party + '</p> </div> </div> <div class="staticSpindrButtons"> <div class="noButton alignleft button"> <img class="icon no" src="../data/images/buttons/round73.svg"> </div> <div class="menuButton alignleft button"> <img class="iconSmall" src="../data/images/buttons/music236.svg"> </div> <div class="yesButton alignleft button"> <img class="icon yes" src="../data/images/buttons/round68.svg"> </div> <div class="clear clearFix"></div> </div> </div>')

				$('.noButton').bind(click, function() {
					$(this).closest('.pollieCard').addClass("removed");
					rejectedPollies.push(element.name);

				});

				$('.yesButton').bind(click, function() {
					$(this).closest('pollieCard').addClass("matched");
					matchedPollies.push(element.name);
				});


/*
					    	$('#profileImg').append('<img src= "../data/images/pollies/' + element.imgName + '.png"> ');
					    	$('.dynamicPollieName').append('<h2>' + element.name + "</h2>")
					    	$('.dynamicParty').append('<p>' + element.party + "</p>")
*/

						});
		//add

		//$('#spindrApp').show();
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