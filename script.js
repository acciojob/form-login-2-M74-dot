document.addEventListener('DOMContentLoaded', function(){
	const submitBtn = document.getElementById('submit');
	submitBtn.addEventListener('click',function(event){
		event.preventDefault();
		const firstName = document.getElementById('fname').value;
		const lastName = document.getElementById('lname').value;
		const phoneNumber = document.getElementById('phone').value;
		const emailId = document.getElementById('email').value;

		const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
		alert(alertMessage);
	})
})