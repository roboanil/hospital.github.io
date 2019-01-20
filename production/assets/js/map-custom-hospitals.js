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
            var depts = [
                'Cardiology',
                'Endocrinology',
                'Gastroenterology',
                'General Internal Medicine and Primary Care',
                'Hematology/Oncology',
                'Infectious Diseases',
                'Nephrology and Hypertension',
                'Occupational and Environmental Medicine',
                'Pulmonary Diseases and Critical Care Medicine',
                'Rheumatology',
                'Ear nose and throat',
                'General surgery',
                'Gynaecology',
                'Haematology',
                'Maternity',
                'Neonatal unit',
                'Neurology'];
            let locationsData = [
                ['Telangana','RangaReddy','Hyderabad','Masab Tank', 17.3850,78.4867],
                ['Delhi','New Delhi','Dsidc Sheds','Okhla Phase 1',28.7041,77.1025],
                ['Maharashtra','Pune','Chinchwad','Mohan Nagar',18.5204,73.8567],
                ['Maharashtra','Mumbai','Kandivali East','Thakur Village',19.0760,72.8777],
                ['Rajasthan','Jaipur','Jaipur','Suraj Nagar,',26.9124,75.7873],
                ['Gujarat','Gandhinagar','Gandhinagar','Old M.L.A.Quarters',23.2156,72.6369],
                ['Madhya Pradesh','Bhopal','Mandideep','Patel Nagar',23.2599,77.4126],
                ['Uttar Pradesh','Allahabad','Prayagraj','Naini',25.4358,81.8463],
                ['Bengal','Kolkata','Joka','Bratachari Gram',22.5726,88.3639],
                ['Tamilnadu','Chennai','Chennai','KK Nagar',13.0827,80.2707]
            ];
            var locations = [];
            for (let i=0;i<locationsData.length;i++){
                let z1 = depts[Math.floor(Math.random()*depts.length)];
                let z2 = depts[Math.floor(Math.random()*depts.length)];
                let z3 = depts[Math.floor(Math.random()*depts.length)];
                let z4 = depts[Math.floor(Math.random()*depts.length)];
                let z5 = depts[Math.floor(Math.random()*depts.length)];
                let x = Math.floor(Math.random() * 50);
                let y = 100 - x;
                let a = Math.floor(Math.random() * 5);
                let b = Math.floor(Math.random() * 3);
                let c = Math.floor(Math.random() * 6);
                let d = Math.floor(Math.random() * 30);

                let deptsa = '<ol><li>'+z1+'</li><li>'+z2+'</li><li>'+z3+'</li><li>'+z4+'</li><li>'+z5+'</li></ol>';
                let data = '<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="2">'+locationsData[i][0]+'</td><td colspan="2" rowspan="2">Internal Cliams : '+x+'%</td></tr><tr><td class="diviblock">District</td><td colspan="2">'+locationsData[i][1]+'</td></tr><tr><td class="diviblock">City</td><td colspan="2">'+locationsData[i][2]+'</td><td colspan="2" rowspan="2">External Cliams : '+y+'%</td></tr><tr><td class="diviblock">Location</td><td colspan="2">'+locationsData[i][3]+'</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Nursing</td><td>Admin</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr><tr class="diviblock"><td colspan="2">Medical Equipments</td><td colspan="3" style="padding-left: 20px;">Available Departments</td></tr><tr ><td>X-Ray</td><td>'+a+'</td><td colspan="3" rowspan="4">'+deptsa+'</td></tr><tr ><td>CT-Scan</td><td>'+b+'</td></tr><tr ><td>Ventilators</td><td>'+c+'</td></tr><tr ><td>ECG</td><td>'+d+'</td></tr></table>';

                let lat = locationsData[i][4];
                let long = locationsData[i][5];
                let icon= 'images/icons/clinic50.png';
                let subArr = [i,data,lat,long,icon];
                locations.push(subArr);

            }

            
            /*var locations2 = [
              [1,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="2">Telangana</td><td colspan="2" rowspan="2">Internal Cliams : 44%</td></tr><tr><td class="diviblock">District</td><td colspan="2">RangaReddy</td></tr><tr><td class="diviblock">City</td><td colspan="2">Hyderabad</td><td colspan="2" rowspan="2">External Cliams : 56%</td></tr><tr><td class="diviblock">Location</td><td colspan="2">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Nursing</td><td>Admin</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr><tr class="diviblock"><td colspan="2">Medical Equipments</td><td colspan="3" style="padding-left: 20px;">Available Departments</td></tr><tr ><td>X-Ray</td><td>2</td><td colspan="3" rowspan="4"><ol><li>Cardiology</li><li>Dermatology</li><li>Nephrology</li><li>Gynecology</li><li>Orthopaedic</li></ol></td></tr><tr ><td>CT-Scan</td><td>1</td></tr><tr ><td>MRI</td><td>1</td></tr><tr ><td>ECG</td><td>15</td></tr></table>', 17.3850,78.4867,'images/icons/clinic50.png'],
              [1,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="2">Delhi</td><td colspan="2" rowspan="2">Internal Cliams : 60%</td></tr><tr><td class="diviblock">District</td><td colspan="2">New Delhi</td></tr><tr><td class="diviblock">City</td><td colspan="2">Delhi</td><td colspan="2" rowspan="2">External Cliams : 40%</td></tr><tr><td class="diviblock">Location</td><td colspan="2">Okhla Phase 1</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Nursing</td><td>Admin</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr><tr class="diviblock"><td colspan="2">Medical Equipments</td><td colspan="3" style="padding-left: 20px;">Available Departments</td></tr><tr ><td>X-Ray</td><td>2</td><td colspan="3" rowspan="4"><ol><li>Cardiology</li><li>Dermatology</li><li>Nephrology</li><li>Gynecology</li><li>Orthopaedic</li></ol></td></tr><tr ><td>CT-Scan</td><td>1</td></tr><tr ><td>MRI</td><td>1</td></tr><tr ><td>ECG</td><td>15</td></tr></table>', 28.7041,77.1025, 'images/icons/clinic50.png'],
              [1,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">Maharashtra</td><td colspan="4">Telangana</td></tr><tr><td class="diviblock">District</td><td colspan="4">Pune</td></tr><tr><td class="diviblock">City</td><td colspan="4">Pune</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 18.5204,73.8567,'images/icons/clinic50.png'],
              [1,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Maharashtra</td></tr><tr><td class="diviblock">District</td><td colspan="4">Mumbai Suburban</td></tr><tr><td class="diviblock">City</td><td colspan="4">Mumbai</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 19.0760,72.8777, 'images/icons/clinic50.png'],
              [4,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Madhya Pradesh</td></tr><tr><td class="diviblock">District</td><td colspan="4">Bhopal</td></tr><tr><td class="diviblock">City</td><td colspan="4">Bhopal</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 23.2599,77.4126,'images/icons/clinic50.png'],
              [4,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Uttar Pradesh</td></tr><tr><td class="diviblock">District</td><td colspan="4">Allahabad</td></tr><tr><td class="diviblock">City</td><td colspan="4">Allahabad</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 25.4358,81.8463, 'images/icons/clinic50.png'],
              [3,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Tamilnadu</td></tr><tr><td class="diviblock">District</td><td colspan="4">Chennai</td></tr><tr><td class="diviblock">City</td><td colspan="4">Chennai</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 13.0827,80.2707, 'images/icons/clinic50.png'],
              [3,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Gujarat</td></tr><tr><td class="diviblock">District</td><td colspan="4">Gandhinagar</td></tr><tr><td class="diviblock">City</td><td colspan="4">Gandhinagar</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 23.2156,72.6369,'images/icons/clinic50.png'],
              [2,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">West Bengal</td></tr><tr><td class="diviblock">District</td><td colspan="4">Kolkata</td></tr><tr><td class="diviblock">City</td><td colspan="4">Kolkata</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 22.5726,88.3639,'images/icons/clinic50.png'],
              [2,'<table class="hospinf" cellspacing="0" cellpadding="2" border="0" ><tr><td class="diviblock">State</td><td colspan="4">Rajasthan</td></tr><tr><td class="diviblock">District</td><td colspan="4">Jaipur</td></tr><tr><td class="diviblock">City</td><td colspan="4">Jaipur</td></tr><tr><td class="diviblock">Location</td><td colspan="4">Masab Tank</td></tr><tr class="diviblock"><td>Patients</td><td>IP</td><td>ICU</td><td>Surgeries</td><td>Discharges</td></tr><tr><td class="diviblock">Count</td><td>200</td><td>20</td><td>15</td><td>6</td></tr><tr class="diviblock"><td>Staff</td><td>Doctors</td><td>Compounders</td><td>Admini</td><td>Housekeeping</td></tr><tr><td class="diviblock">Total</td><td>186</td><td>605</td><td>32</td><td>160</td></tr><tr><td class="diviblock">Present</td><td>180</td><td>600</td><td>29</td><td>153</td></tr></table>', 26.9124,75.7873,'images/icons/clinic50.png']
            ];*/

            
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