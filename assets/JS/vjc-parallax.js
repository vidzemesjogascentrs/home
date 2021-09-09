window.onload = function (){
	var navbar = document.getElementById("nav");
	var expNav = document.getElementById("navbarSupportedContent");
	var navButton = document.getElementById("nav-button");

	window.onscroll = function() {myFunction()};
	
	function myFunction() {
		if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
			navbar.classList.add("opaque");
		} else if (!expNav.classList.contains("show")) {
			navbar.classList.remove("opaque");
		}
	}

	function toggleOpaque() {
		if (!expNav.classList.contains("show")) {
			navbar.classList.add("opaque");
		} else if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
			navbar.classList.add("opaque");
		} else {
			navbar.classList.remove("opaque");
		}
	}

	navButton.addEventListener("click", toggleOpaque);
}



window.myMap = function()
{
	var styledMapType = new google.maps.StyledMapType(
		[
		{elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
		{elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
		{elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
		{
			featureType: 'administrative',
			elementType: 'geometry.stroke',
			stylers: [{color: '#c9b2a6'}]
		},
		{
			featureType: 'administrative.land_parcel',
			elementType: 'geometry.stroke',
			stylers: [{color: '#dcd2be'}]
		},
		{
			featureType: 'administrative.land_parcel',
			elementType: 'labels.text.fill',
			stylers: [{color: '#ae9e90'}]
		},
		{
			featureType: 'landscape.natural',
			elementType: 'geometry',
			stylers: [{color: '#dfd2ae'}]
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [{color: '#dfd2ae'}]
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{color: '#93817c'}]
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry.fill',
			stylers: [{color: '#a5b076'}]
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{color: '#447530'}]
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{color: '#f5f1e6'}]
		},
		{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [{color: '#fdfcf8'}]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{color: '#f8c967'}]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{color: '#e9bc62'}]
		},
		{
			featureType: 'road.highway.controlled_access',
			elementType: 'geometry',
			stylers: [{color: '#e98d58'}]
		},
		{
			featureType: 'road.highway.controlled_access',
			elementType: 'geometry.stroke',
			stylers: [{color: '#db8555'}]
		},
		{
			featureType: 'road.local',
			elementType: 'labels.text.fill',
			stylers: [{color: '#806b63'}]
		},
		{
			featureType: 'transit.line',
			elementType: 'geometry',
			stylers: [{color: '#dfd2ae'}]
		},
		{
			featureType: 'transit.line',
			elementType: 'labels.text.fill',
			stylers: [{color: '#8f7d77'}]
		},
		{
			featureType: 'transit.line',
			elementType: 'labels.text.stroke',
			stylers: [{color: '#ebe3cd'}]
		},
		{
			featureType: 'transit.station',
			elementType: 'geometry',
			stylers: [{color: '#dfd2ae'}]
		},
		{
			featureType: 'water',
			elementType: 'geometry.fill',
			stylers: [{color: '#b9d3c2'}]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{color: '#92998d'}]
		}
		],
		{name: 'Styled Map'});

	myCenter=new google.maps.LatLng(57.546030, 25.416480);
	var mapOptions= {
		center:myCenter,
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

	var marker = new google.maps.Marker({
		position: myCenter,
	});
	marker.setMap(map);

	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}
