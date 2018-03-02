function initMap() {
    var home = {lat: 38.304900, lng: -85.562489};
    var map = new google.maps.Map(document.getElementById('contactMap'), {
        zoom: 10,
        center: home
    });
    
    var point = new google.maps.Marker({
        position: home,
        map: map
    });
    }