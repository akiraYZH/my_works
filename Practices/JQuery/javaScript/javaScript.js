$("#testForm").submit(function(event){

	var errorMessage = "";

	event.preventDefault(); //停止发送信息（submit）

	var name = $("#email_name").val();       //把id为email-name的tag中的value赋予给name变量
	var email = $("#email_address").val();
	var pass1 = $("#pass1").val();
	var pass2 = $("#pass2").val();
	var message = $("#message").val();


	$("#hint").css("color", "red");


	if(name == "" || email == "" || pass1 == "" || pass2 == "" || message ==""){

		errorMessage = "Please complete the form.";

	} else if (!emailAddresIsValid(email)){

		errorMessage = "Please put in a correct email address.";

	} else if (pass1 != pass2) {

		errorMessage = "Your passwords do not match.";
	} else {

		errorMessage = "Sent.";
		$("#hint").css("color", "green");
	}



	$("#hint").html(errorMessage);


});





function emailAddresIsValid(emailAddress){

	var pattern = /^\b[A-Z1-9-.]+@[A-Z1-9-]+\.com\b/i;

	return pattern.test(emailAddress);

}
