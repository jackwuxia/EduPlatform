$(document).ready(function(){
	//check password length and match
	$('#submit').click(function(){
		if($('#demoinfo #password').val().length<6){
		alert("Password Too Short");
		return false;}
		if (($('#demoinfo #password').val())!=($('#demoinfo #password_confirm').val())){
		alert("Password Do Not Match");
		return false;}
	
	//gather demo info
	var sdemoinfo={$('#demoinfo #username').val():[
	{"password" : $('#demoinfo #password').val()},
	{"tel" : $('#demoinfo #demo_phone').val()},
	{"password" : $('#demoinfo #demo_email').val()},
	]};
	//posting variable
	var posting=$.post("127.0.0.1:31225",{sdemoinfo});
	//posting done
	posting.done();
	//posting changing page
	 $(':mobile-pagecontainer').pagecontainer('change', '#course_content', {
		transition: 'flip',
		changeHash: false,
		reverse: true,
		showLoadMsg: true
	});
)}