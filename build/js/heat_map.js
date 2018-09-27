var stateSelected, districtSelected, mandalSelected;

    	// random markers
		var markersArray = [];
		for (var i = 0; i < 2000; i++) {
			markersArray.push(getRandomLatLng());
		}

		function getRandomLatLng() {
			var lngSpan = 79.4929788359 - 73.6375100859;
			var latSpan = 27.3926320681 - 16.3531113163;

			return [16.3531113163 + latSpan * Math.random(),
					73.6375100859 + lngSpan * Math.random(), Math.random()];
		}

		addressPoints = markersArray.map(function (p) { return [p[0], p[1]]; });

    	var m = L.map('map').setView([20.5937, 78.9629], 4);

		var heat = L.heatLayer(addressPoints,{minOpacity:0.5, radius: 25, blur: 1, max: 1, gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'}}).addTo(m);

    	m.on('zoomend', function(e) {
    		if(m.getZoom() <= 5 ){
		    	if(m.hasLayer(mandalsLayer))
		    		m.removeLayer(mandalsLayer);
		    	if(m.hasLayer(districtsLayer))
					m.removeLayer(districtsLayer);
		    	statesLayer.addTo(m);
		    } else if (m.getZoom() > 5 && m.getZoom() < 7) {
		    	if(m.hasLayer(mandalsLayer))
		    		m.removeLayer(mandalsLayer);
				districtsLayer.addTo(m);
		    } 
		    else {
				mandalsLayer.addTo(m);
				// m.setZoom(8)
		    }
		});

		var statesLayer = L.geoJson(statesData,{
			style: stateStyle,
		});      

		var districtsLayer = L.geoJson(districtsData, {
			style: districtStyle,
		});

		var mandalsLayer = L.geoJson(mandalsData, {
			style: mandalStyle,
		});

		statesLayer.addTo(m);


		function popUp2(e) {
			var l = e.target;
			var f = l.feature;
			var out = [];
		    if (f.properties){
		        out.push(f.properties["NAME_3"]);
		        l.bindPopup(out.join("<br />"));
		    }
		}

		function stateStyle(f) {
			return {
				weight: 2,
				opacity: 0.7,
				color: '#A9A9A9',
				dashArray: '1',
				fillOpacity: 0.7,
				fillColor: '#fff'
			};
		}

		function districtStyle(f) {
			return {
				weight: 2,
				opacity: 1,
				color: '#A9A9A9',
				dashArray: '3',
				fillOpacity: 0.7,
				fillColor: '#fff'
			};
		}

		function mandalStyle(f) {
			return {
				weight: 1,
				opacity: 1,
				color: '#A9A9A9',
				dashArray: '4',
				fillOpacity: 0.7,
				fillColor: '#fff'
			};
		}

		function highlightFeature(e) {
			var layer = e.target;

			layer.setStyle({
				weight: 1,
				color: '#000',
				dashArray: '',
				fillOpacity: 0.7
			});

			if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
				layer.bringToFront();
			}

			// info.update(layer.feature.properties);
		}

		function getColor(d) {
			/*return d > 1000 ? '#003300' :
					d > 500  ? '#005c00' :
					d > 200  ? '#008500' :
					d > 100  ? '#00ad00' :
					d > 50   ? '#00d600' :
					d > 20   ? '#00ff00' :
					d > 10   ? '#33ff33' :
								'#99ff99';*/
			return d > 1000 ? '#008000' :
					d > 500  ? '#008a00' :
					d > 200  ? '#009400' :
					d > 100  ? '#009e00' :
					d > 50   ? '#00a800' :
					d > 20   ? '#00b200' :
					d > 10   ? '#00bd00' :
								'#00c700';
		}
		
		
		function style(f) {
			return {
				weight: 1,
				opacity: 1,
				color: 'green',
				dashArray: '1',
				fillOpacity: 0.7,
				fillColor: '#fff'
			};
		}

		function resetHighlight(e) {	
			statesLayer.resetStyle(e.target);
		}

		var legend = L.control({position: 'bottomright'});

		legend.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'info legend'),
				grades = [0, 10, 20, 50, 100, 200, 500, 1000],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor(from + 1) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		}

		legend.addTo(m);

		function getRandomInt(max) {
			RAND_GLOBAL = Math.floor(Math.random() * Math.floor(max));
			// console.log(RAND_GLOBAL);
		  	return RAND_GLOBAL;
		}

		function resetMap(){
			for (let index = 0; index < statesData.features.length; index++) {
				statesData.features[index].properties["value"] = Math.floor(Math.random() * Math.floor(1500));
			}

			geojsonLayer = L.geoJson(statesData,{
												style: style,
												onEachFeature:onEachFeature});      

			geojsonLayer.addTo(m);
		}
