//JavaScript

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tap beep
		
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(5000);
		});//tap vivrar
		
	},false); //deviceready
}); //ready
