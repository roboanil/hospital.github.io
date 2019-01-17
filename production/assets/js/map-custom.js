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
              [1,'<table><tr><th colspan="2">Hospital Information</th></tr><tr><td>Name:</td><td>Sri Sai Clinic</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Type:</td><td>General</td></tr><tr><td>Contact:</td><td>Sairam, 7896541256</td></tr></table>', 17.7386225,83.1225035,'images/icons/clinic50.png'],
              [1,'<table><tr><th colspan="2">Hospital Information</th></tr><tr><td>Name:</td><td>Sri Sai Clinic</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Type:</td><td>General</td></tr><tr><td>Contact:</td><td>Sairam, 7896541256</td></tr></table>', 17.6674891,80.8793485, 'images/icons/clinic50.png'],
              [1,'<table><tr><th colspan="2">Hospital Information</th></tr><tr><td>Name:</td><td>Sri Sai Clinic</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Type:</td><td>General</td></tr><tr><td>Contact:</td><td>Sairam, 7896541256</td></tr></table>', 16.840453,80.2909541,'images/icons/clinic50.png'],
              [1,'<table><tr><th colspan="2">Hospital Information</th></tr><tr><td>Name:</td><td>Sri Sai Clinic</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Type:</td><td>General</td></tr><tr><td>Contact:</td><td>Sairam, 7896541256</td></tr></table>', 17.4277019,78.3411366, 'images/icons/clinic50.png'],
              [4,'<table><tr><th colspan="2">Health Camp Information</th></tr><tr><td>Date:</td><td>25/08/2018</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Doctors:</td><td>13</td></tr><tr><td>Parients</td><td>5698</td></tr><tr><td colspan="2"><table width="100%"><tr><th>Department</th><th>Count</th></tr><tr><td>Cardiology</td><td>698</td></tr><tr><td>Dermatology</td><td>458</td></tr><tr><td>Gynecology</td><td>78</td></tr><tr><td>Nephrology</td><td>96</td></tr><tr><td>Neurology</td><td>75</td></tr><tr><td>Orthopaedic</td><td>148</td></tr><tr><td>Otolalogy</td><td>65</td></tr></table></td></tr></table>', 16.024641,78.0586343,'images/icons/camps.png'],
              [4,'<table><tr><th colspan="2">Health Camp Information</th></tr><tr><td>Date:</td><td>25/08/2018</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Doctors:</td><td>13</td></tr><tr><td>Parients</td><td>5698</td></tr><tr><td colspan="2"><table width="100%"><tr><th>Department</th><th>Count</th></tr><tr><td>Cardiology</td><td>698</td></tr><tr><td>Dermatology</td><td>458</td></tr><tr><td>Gynecology</td><td>78</td></tr><tr><td>Nephrology</td><td>96</td></tr><tr><td>Neurology</td><td>75</td></tr><tr><td>Orthopaedic</td><td>148</td></tr><tr><td>Otolalogy</td><td>65</td></tr></table></td></tr></table>', 19.024641,79.0586343, 'images/icons/camps.png'],
              [3,'<table><tr><th colspan="2">Health Camp Information</th></tr><tr><td>Date:</td><td>25/08/2018</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Doctors:</td><td>13</td></tr><tr><td>Parients</td><td>5698</td></tr><tr><td colspan="2"><table width="100%"><tr><th>Department</th><th>Count</th></tr><tr><td>Cardiology</td><td>698</td></tr><tr><td>Dermatology</td><td>458</td></tr><tr><td>Gynecology</td><td>78</td></tr><tr><td>Nephrology</td><td>96</td></tr><tr><td>Neurology</td><td>75</td></tr><tr><td>Orthopaedic</td><td>148</td></tr><tr><td>Otolalogy</td><td>65</td></tr></table></td></tr></table>', 15.024641,78.0586343, 'images/icons/camps.png'],
              [3,'<table><tr><th colspan="2">Health Camp Information</th></tr><tr><td>Date:</td><td>25/08/2018</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Doctors:</td><td>13</td></tr><tr><td>Parients</td><td>5698</td></tr><tr><td colspan="2"><table width="100%"><tr><th>Department</th><th>Count</th></tr><tr><td>Cardiology</td><td>698</td></tr><tr><td>Dermatology</td><td>458</td></tr><tr><td>Gynecology</td><td>78</td></tr><tr><td>Nephrology</td><td>96</td></tr><tr><td>Neurology</td><td>75</td></tr><tr><td>Orthopaedic</td><td>148</td></tr><tr><td>Otolalogy</td><td>65</td></tr></table></td></tr></table>', 17.024641,79.0586343,'images/icons/camps.png'],
              [2,'<table><tr><th colspan="2">Health Camp Information</th></tr><tr><td>Date:</td><td>25/08/2018</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Doctors:</td><td>13</td></tr><tr><td>Parients</td><td>5698</td></tr><tr><td colspan="2"><table width="100%"><tr><th>Department</th><th>Count</th></tr><tr><td>Cardiology</td><td>698</td></tr><tr><td>Dermatology</td><td>458</td></tr><tr><td>Gynecology</td><td>78</td></tr><tr><td>Nephrology</td><td>96</td></tr><tr><td>Neurology</td><td>75</td></tr><tr><td>Orthopaedic</td><td>148</td></tr><tr><td>Otolalogy</td><td>65</td></tr></table></td></tr></table>', 18.024641,82.0586343,'images/icons/camps.png'],
              [2,'<table><tr><th colspan="2">Health Camp Information</th></tr><tr><td>Date:</td><td>25/08/2018</td></tr><tr><td>Location:</td><td>Hyderabad</td></tr><tr><td>Doctors:</td><td>13</td></tr><tr><td>Parients</td><td>5698</td></tr><tr><td colspan="2"><table width="100%"><tr><th>Department</th><th>Count</th></tr><tr><td>Cardiology</td><td>698</td></tr><tr><td>Dermatology</td><td>458</td></tr><tr><td>Gynecology</td><td>78</td></tr><tr><td>Nephrology</td><td>96</td></tr><tr><td>Neurology</td><td>75</td></tr><tr><td>Orthopaedic</td><td>148</td></tr><tr><td>Otolalogy</td><td>65</td></tr></table></td></tr></table>', 15.6930923,79.7959238,'images/icons/camps.png']
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
                zoom: 6,
                scrollwheel: true,
                zoomControl: true,  
                disableDoubleClickZoom: true,
                navigationControl: true,
                mapTypeControl: false,
                scaleControl: false,
                draggable: true,
                styles: style,
                center: new google.maps.LatLng(locations[0][2], locations[0][3]),
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