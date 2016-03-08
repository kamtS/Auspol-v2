$('document').ready(function() {
    // body...
    console.log('is this working');

    //Dynamic Page Name code
    $('.dynamicPageName').replaceWith('<h2></h2>')

    //Spindr Data Array
   // function shuffle(dataArray){
        var pollieProfiles = [{
            name: "Ellen Sandell",
            imgName: "Ellen_Sandell",
            postcode: "3000",
            party: "Greens",
            bio: "I love Melbourne and its commitment to diversity and fairness. As a Kensington local I want to keep Melbourne liveable."
        }, {
            name: "Daniel Andrews",
            imgName: "Daniel_Andrews",
            postcode: "3000",
            party: "Labor",
            bio: "One year ago, Victorians gave me and my colleagues a precious gift: the chance to make a real difference in the lives of Victorian families. And we haven’t wasted a single minute. We promised to fix schools and hospitals, invest in public transport and create more jobs – and we’re getting on with it. Because we’re a Government that puts people first."
        }, {
            name: "Wade Noonan",
            imgName: "Wade_Noonan",
            postcode: "3000",
            party: "Liberal",
            bio: "I've stepped down temporarily from my role as Deputy Police commissioner, due to the unexpected toll of the job."
        }, {
            name: "Clem Newton Brown",
            imgName: "Clem_Newton_Brown",
            postcode: "4000",
            party: "Liberal",
            bio: "I lost my seat to a Greens member, Sam Hibbins, in the 2014 Victorian Election."
        }];
    //}

    var lastPostcode = "";
    var lastPostcodeArray = [];
    var foundPollieArray = [];
    var rejectedPollies = [];
    var matchedPollies = [];

    /* OK so, when a user enters a postcode I only want them to see Politicians with a matching postcode
    as identified in the array "pollieProfiles" So if I create a "master array" that then filters only objects with matching postcodes
    into a 2nd array, the spindr app then pulls its data from the 2nd "dynamic" array.

    So to do that...

    IF userInput = pollieProfiles.postcode THEN copy all that = pollProfiles.postcode to dynamicPollieArray

    var dynamicPollieArray [ ] ;
    */

    //Spindr postcode search bar
    $('.cardContainer').hide();


    $('#submitButton').click(function(e) {
        e.preventDefault();
        $('#sorryMsg').hide();
        foundPollieArray = [];
        var userInput = $('#postcodeSearch').val();
        userInput = userInput.trim();
        
        var pollieFound = false;
        
        //if(userInput !== lastPostcode) {
        
        
        $('.cardContainer').empty();

        //if($.inArray(userInput, lastPostcodeArray) === -1) {
            
        
            pollieProfiles.forEach(function(element) {
                console.log(userInput, element);
                //element.postcode.forEach(postcode1);
                    if (userInput === element.postcode) {
                        pollieFound = true;
                        console.log($.inArray(userInput, foundPollieArray));
            
                        foundPollieArray.push(element);
                        lastPostcodeArray.push(element.postcode);
                        
                        console.log('Array has been pushed');
            
                        $('.cardContainer').show();
                        console.log('IF statement success');
                    }
        
        
                /*else {
                    
                    // $('#cardContainer').hide();
                    console.log('ELSE statement success');
                    //$('#sorryMsg').show();*/
        
        
                /*Here I want to iterate over the fPA, as I do this I want to take each string from the objects of the array
                and have them render appropriate HTML in one action. In essence, they all stack atop each other.*/
        
            });
        
    /*    } else{
            pollieProfiles.forEach(function(element) {
        
                if (userInput !== element.postcode) {
                    pollieFound = true;
    
                    foundPollieArray.pop(element);
                    lastPostcodeArray.pop(element.postcode);
    
                    console.log('Array has been removed');
    
                    $('.cardContainer').show();
                }
            });
        }*/
            if(foundPollieArray.length > 0) {
                $('.sorryMsg').hide().empty();
            } else {
                console.log('nothing found, removing pollie card');
                $('.pollieCard').remove();
                foundPollieArray = [];
                $('#sorryMsg').replaceWith("<p id='#sorryMsg'>Sorry your suburb isn't available yet, check back soon!</p>");
            }
            
    
            //Below will display error message if postcode search (userInput) doesn't match a postcode in pollieProfiles
            
            /*
            if (foundPollieArray.length !== 0) {
                $('#sorryMsg').remove();
            }
            */
        

        foundPollieArray.forEach(function(element) {
            $('.cardContainer').append('<div id="pollieCard" class="innerContent pollieCard notdone"> <div class="pollieProfile"> <div class="profileImage"> <img id="profileImg" src="../data/images/pollies/' + element.imgName + '.png' + '"> </div> <div class="pollieName"> <h2 class="dynamicPollieName">' + element.name + '</h2> <p class="dynamicParty">' + element.party + '</p> </div> </div> <div class="staticSpindrButtons"> <div class="noButton alignleft button"> <img class="icon no" src="../data/images/buttons/round73.svg"> </div> <div class="menuButton alignleft button"> <img class="iconSmall" src="../data/images/buttons/music236.svg"> </div> <div class="yesButton alignleft button"> <img class="icon yes" src="../data/images/buttons/round68.svg"> </div> <div class="clear clearFix"></div> </div> </div>');
        
        
            //2 better ways of displaying HTML mark-up in JS
            /*
        			$('.cardContainer').append(
        			    '<div>' +
        			        '<h1>' +
        			            '<p>some stuff</p>' +
        			        '</h1>' +
        			    '</div>');
        
                    $('.cardContainer').append([
        			    '<div>',
        			        '<h1>',
        			            '<p>some stuff</p>',
        			            element.name,
        			        '</h1>',
        			    '</div>'].join(''));
                    */
            function actionEmptyStack() {
                if ((".pollieCard.notdone").length === 0) {
                    console.log('Pollie card stack is now empty');
                    matchedPollies.forEach(function(element) {
                        $('.cardContainer').append('<div class="pollieResults"> <div class="matchedPollieProfileCard"> <div class="innerLayer"> <div class="pollieProfileImg"> <img class="profileImg" src=""> </div> <div class="pollieProfileContent"> <h2 class="dynamicPollieName"></h2> <p class="dynamicParty"></p>  <p class="pollieBio"></p> <div class="moreInfo"></div> </div> </div> </div> </div>')
                    });
                    console.log('pollieResults should be rendered')
                }
            
            }

            function displayPollieResults() {
                
            }

            $('.noButton').bind("click", function() {
                $(this).closest('.pollieCard').addClass("removed").removeClass("notdone");
                rejectedPollies.push(element.name);
                console.log('pollie name pushed to rejectedPollies');
                actionEmptyStack();
                console.log('actionEmptyStack has been run or passed over');
            });

            $('.yesButton').bind("click", function() {
                $(this).closest('.pollieCard').addClass("matched").removeClass("notdone");
                matchedPollies.push(element);
                actionEmptyStack();
                console.log('actionEmptyStack has been run or passed over');
                console.log('pollie name pushed to matchedPollies');
                
                console.log(element.name, element.bio, element.imgName);
                
            });

            //Below is the animation and pushing to new array Function, using the .on function.
            /*
            $('.noButton').on("click", function() {
    			$(this).closest('.pollieCard').addClass("removed");
    			rejectedPollies.push(element.name);
    		});
    
    		$('.yesButton').on("click", function() {
    			$(this).closest('pollieCard').addClass("matched");
    			matchedPollies.push(element.name);
    		});
            */

            //below is the same as above, instead using the .bind function


            /*
        	$('#profileImg').append('<img src= "../data/images/pollies/' + element.imgName + '.png"> ');
        	$('.dynamicPollieName').append('<h2>' + element.name + "</h2>")
        	$('.dynamicParty').append('<p>' + element.party + "</p>")
            */

        });
            
        
        /*
        lastPostcode = userInput; {
            console.log('entered postcode pushed to lastPostcode array');
            console.log(lastPostcode);
        }*/
        
        
        //add

        //$('#spindrApp').show();
    });


    //Spindr "logic"


    //$('.yesButton').click(function() {


    /*pollieProfiles.forEach(function(element, index) {
	    	$('#profileImg').append('<img src= "../data/images/pollies/' + element.imgName + '.png"> ');
	    	$('.dynamicPollieName').append('<h2>' + element.name + "</h2>")
	    	$('.dynamicParty').append('<p>' + element.party + "</p>")
	    });*/


});