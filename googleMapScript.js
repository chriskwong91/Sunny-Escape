var lat = 35.340463;
var lng = -119.103487;
/* var address = 94547;
geocoder.geocode({ 'address': address}, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        lat = results[0].geometry.location.lat();
        lng = results[0].geometry.location.lng();
    } else {
        alert("Error: " + status);
    }
});
*/

function initMap() {
            var StarBucks = {lat: 35.340463, lng: -119.103487};
            
            var mapDiv = document.getElementById('map');
            
            var map = new google.maps.Map(mapDiv, {
                center: {lat: -34.397, lng: 150.644},
                zoom: 14
            });
            var marker = new google.maps.Marker({
                position: StarBucks,
                map: map,
                title: 'StarBucks!!'
            });
            
            var geocoder = new google.maps.Geocoder();
            
            document.getElementById('submit').addEventListener('click', function() {
                geocodeAddress(geocoder, map);
            });

            
        }

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
        } else {
            alert('Error: ' + status);
        }
    });
}