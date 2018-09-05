$(document).ready(function(){
		// the line below will reveal the 'display-js' div on the page if JS is available
		$('.display-js').show();

		// this call is currently not working because of a CORS issue
		$.ajax({
			type: "GET",
			url: 'https://api.meetup.com/Bitcoin-Open-Blockchain-Community-Chicago/events',
			success: function (data) {
				const container = $("#eventContainer");
				data.forEach(ev => {
					container.appendChild(ev.toString());
				});
			},
			headers: {
				"Origin": "https://bob-chi.org"
			},
			async: false
		});
});
