$(document).ready(function(){
	//checking password length 
    $('#login').click(function(){
		if ($('#mainloginform #password').length<6){
		alert("Wrong User Name or Password");}
		}
	)

	//swipe function
	$( document ).on( "pageinit", "#course_content", function() {
		$( document ).on( "swipeleft", "#course_content", function( e ) {
			// We check if there is no open panel on the page because otherwise
			// a swipe to close the left panel would also open the right panel (and v.v.).
			// We do this by checking the data that the framework stores on the page element (panel: open).
			if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
				if ( e.type === "swipeleft"  ) {
					$( "#right-panel" ).panel( "open" );
				} else if ( e.type === "swiperight" ) {
					$( "#left-panel" ).panel( "open" );
				}
			}
		});
	});
	
	//get course id
	$(".coursename").click(function(){
		var url="127.0.0.1:31225";
		var posting=$.post(url,{"posting_id":"math"});
		//change page
		 $(':mobile-pagecontainer').pagecontainer('change', '#course_content', {
			transition: 'flip',
			changeHash: false,
			reverse: true,
			showLoadMsg: true
		});
		
		//posting done change page content
		posting.done(function(data){
			//navigate to page
			$( "#course_content" ).pagecontainer( "change" );
			//loop through data
			$.each(data,function(idx,obj)
			{
				$("#inclass_content").append("<a href=" + obj.key + "></a>");
			})
		});
	});
})