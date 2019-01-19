(function ($) {
    // USE STRICT
    "use strict";

        $(document).ready(function () {

            
            var style = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
                ]
            }
            ];

            
            var locations = [
              [1,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Telangana</td></tr><tr><td class="diviblock">District</td><td colspan="4">RangaReddy</td></tr><tr><td class="diviblock">City</td><td colspan="4">Hyderabad</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 17.3850,78.4867,'images/icons/clinic50.png'],
              [1,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Delhi</td></tr><tr><td class="diviblock">District</td><td colspan="4">New Delhi</td></tr><tr><td class="diviblock">City</td><td colspan="4">Delhi</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 28.7041,77.1025, 'images/icons/clinic50.png'],
              [1,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">Maharashtra</td><td colspan="4">Telangana</td></tr><tr><td class="diviblock">District</td><td colspan="4">Pune</td></tr><tr><td class="diviblock">City</td><td colspan="4">Pune</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 18.5204,73.8567,'images/icons/clinic50.png'],
              [1,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Maharashtra</td></tr><tr><td class="diviblock">District</td><td colspan="4">Mumbai Suburban</td></tr><tr><td class="diviblock">City</td><td colspan="4">Mumbai</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 19.0760,72.8777, 'images/icons/clinic50.png'],
              [4,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Madhya Pradesh</td></tr><tr><td class="diviblock">District</td><td colspan="4">Bhopal</td></tr><tr><td class="diviblock">City</td><td colspan="4">Bhopal</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 23.2599,77.4126,'images/icons/clinic50.png'],
              [4,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Uttar Pradesh</td></tr><tr><td class="diviblock">District</td><td colspan="4">Allahabad</td></tr><tr><td class="diviblock">City</td><td colspan="4">Allahabad</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 25.4358,81.8463, 'images/icons/clinic50.png'],
              [3,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Tamilnadu</td></tr><tr><td class="diviblock">District</td><td colspan="4">Chennai</td></tr><tr><td class="diviblock">City</td><td colspan="4">Chennai</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 13.0827,80.2707, 'images/icons/clinic50.png'],
              [3,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Gujarat</td></tr><tr><td class="diviblock">District</td><td colspan="4">Gandhinagar</td></tr><tr><td class="diviblock">City</td><td colspan="4">Gandhinagar</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 23.2156,72.6369,'images/icons/clinic50.png'],
              [2,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">West Bengal</td></tr><tr><td class="diviblock">District</td><td colspan="4">Kolkata</td></tr><tr><td class="diviblock">City</td><td colspan="4">Kolkata</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 22.5726,88.3639,'images/icons/clinic50.png'],
              [2,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Rajasthan</td></tr><tr><td class="diviblock">District</td><td colspan="4">Jaipur</td></tr><tr><td class="diviblock">City</td><td colspan="4">Jaipur</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 26.9124,75.7873,'images/icons/clinic50.png']
            ];

            
            displayDataOnGraph(locations);


            $(".dashBoardClick").click(function(){
                var type = $(this).attr("data-type");
                var newfilterData = [];

                for(var i=0;i<locations.length;i++)
                {
                    if (locations[i][0] == type)
                    {
                        newfilterData.push(locations[i]);
                    }
                }
                displayDataOnGraph(newfilterData,style);
            });

        });

})(jQuery);

function displayDataOnGraph(locations,style)
{
    var map = new google.maps.Map(document.getElementById('google_map'), {
                zoom: 5,
                scrollwheel: true,
                zoomControl: true,  
                disableDoubleClickZoom: true,
                navigationControl: true,
                mapTypeControl: false,
                scaleControl: false,
                draggable: true,
                styles: style,
                center: new google.maps.LatLng(23.2599,77.4126),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][2], locations[i][3]),
            map: map,
            icon: locations[i][4]
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][1]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}