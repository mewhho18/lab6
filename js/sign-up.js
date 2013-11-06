//signup.js 
// add your JavaScript code to this file
//Marissa Ho
//INFO 343 Lab 6

/*Allows the user to interact with the page on the page load*/
$(function(){
	renderStates(usStates);
	validate();
	noThanksOption();
	$('.btn-abandon').click(function(){
	    window.location = 'http://www.google.com';
	});
         
});

/*Ensures that the user will be able to successfully select a state, while also
reducing potential redundancy in the code. Much more functional.*/
function renderStates(usStates) {
	var stateSelect = $('.us-states');
	var option;
	var idx;
	var state;
	for (idx = 0; idx < usStates.length; ++idx) {
		state = usStates[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	}
}

/*Doesn't allow the user to successfully sign up unless he or she 
has entered a first name, last name, and email. Additionally, if the
user has entered an address then a corressponding zip code must be
entered in order to sign up.
Post: If user does not enter a corressponding zip, they will receive an
alert message. If the user fills out all of the expected elements, they will
be able to sign up successfully.*/
function validate() {
	$('.signup-form').submit(function(){
	    //code to execute when the sign-up form is submitted
	    //this is the raw DOM form element
	    //wrap it in a jQuery object so we can use jQuery methods on it
	    var signupForm = $(this);
	    //select a descendant input element with the name "addr-1"
	    var addr1Input = signupForm.find('input[name="addr-1"]');
	    var addr1Value = addr1Input.val();

	    if (addr1Value.length > 0) {
	    	var zipInput = signupForm.find('input[name=zip]');
	    	var zipVal = zipInput.val();

	    	if (!zipVal) {
	    		alert('The zip code must be provided if an address is provided!');
	    		return false;
	    	}
	    }
	});
}

/*If the user decides that he or she doesn't want to sign up, they can click
the No, Thanks option and a modal message asking them if they are sure will pop up.
If the user continues in the process, he or she will be redirected to Google.*/
function noThanksOption() {
	$('.cancel-signup').click(function(){
    	$('.cancel-signup-modal').modal();	
	}); //cancel-signup click
}