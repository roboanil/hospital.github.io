var stateSelected, districtSelected, mandalSelected;
    	var districtsLayer;
    	var mandalsLayer;

    	var m = L.map('map').setView([20.5937, 78.9629], 4.8);

    	m.on('zoomend', function(e) {
    		console.log(m.getZoom());
		    if(m.getZoom() <= 5 ){
		    	if(m.hasLayer(mandalsLayer))
		    		m.removeLayer(mandalsLayer);
		    	if(m.hasLayer(districtsLayer))
					m.removeLayer(districtsLayer);
		    	statesLayer.addTo(m);
		    } else if (m.getZoom() > 5 && m.getZoom() < 8) {
		    	if(m.hasLayer(mandalsLayer))
		    		m.removeLayer(mandalsLayer);
				districtsLayer.addTo(m);
		    }
		});

		for (let index = 0; index < statesData.features.length; index++) {
			statesData.features[index].properties["value"] = Math.floor(Math.random() * Math.floor(1500));
		}

		for (let index = 0; index < districtsData.features.length; index++) {
			districtsData.features[index].properties["value"] = Math.floor(Math.random() * Math.floor(1500));
		}

		for (let index = 0; index < mandalsData.features.length; index++) {
			mandalsData.features[index].properties["value"] = Math.floor(Math.random() * Math.floor(1000));
		}

		var statesLayer = L.geoJson(statesData,{
			style: stateStyle,
			onEachFeature:stateOnEachFeature
		});      

		statesLayer.addTo(m);

		var info = L.control();

		info.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info');
			this.update();
			return this._div;
		};

		info.update = function (props) {     this._div.innerHTML = (props ?
		'<h5>State : </h5>' + '<b>' + props["NAME_1"] + '</b><br/>'
		+ ( typeof props["NAME_2"]  !== "undefined" ?  '<h5>District : </h5>' + '<b>' + props["NAME_2"] + '</b><br/>' : "" )
		+ ( typeof props["NAME_3"]  !== "undefined" ?  '<h5>Mandal : </h5>' + '<b>' + props["NAME_3"] + '</b><br/>' : "" )
		+ '<h5>' + pageAttribute + ' : </h5>' + '<b>' + props.value + '</b>': 'Hover over the	map'); };

		info.addTo(m);

		function zoomToState(f, l){

			if(m.hasLayer(districtsLayer))
				m.removeLayer(districtsLayer);

			m.fitBounds(f.target.getBounds());
			stateSelected = f.target.feature.properties["NAME_1"];

			districtsLayer = L.geoJson(districtsData, {
				style: districtStyle,
				onEachFeature: districtOnEachFeature,
				filter: filterDistrict
			});

			districtsLayer.addTo(m);
			m.removeLayer(statesLayer);
		}

		function filterDistrict(f, l){
			if (f.properties["NAME_1"] === stateSelected) return true
		}

		function zoomToDistrict(f, l){

			if(m.hasLayer(districtsLayer))
				m.removeLayer(districtsLayer);

			if(m.hasLayer(mandalsLayer))
				m.removeLayer(mandalsLayer);

			m.fitBounds(f.target.getBounds());
			districtSelected = f.target.feature.properties["NAME_2"];

			mandalsLayer = L.geoJson(mandalsData, {
				style: mandalStyle,
				onEachFeature: mandalOnEachFeature,
				filter: filterMandal
			});

			mandalsLayer.addTo(m);
			m.removeLayer(statesLayer);
			m.removeLayer(districtsLayer);
		}

		function filterMandal(f, l){
			if (f.properties["NAME_2"] === districtSelected) return true
		}

		function popUp2(e) {
			var l = e.target;
			var f = l.feature;
			var out = [];
		    if (f.properties){
		        out.push(f.properties["NAME_3"]);
		        // l.bindPopup(out.join("<br />"));
		        l.bindPopup('<b>State : </b>' + f.properties["NAME_1"] + '<br/>'
				+ ( typeof f.properties["NAME_2"]  !== "undefined" ?  '<b>District : </b>' + f.properties["NAME_2"] + '<br/>' : "" )
				+ ( typeof f.properties["NAME_3"]  !== "undefined" ?  '<b>Mandal : </b>' + f.properties["NAME_3"] + '<br/>' : "" )
				+ '<b>' + pageAttribute + ': </b>' + f.properties["value"] + '<br/>'
				)
		    }
		}

		function highlightFeature(e) {
			var layer = e.target;

			layer.setStyle({
			weight: 2,
			color: '#111E6C',
			dashArray: '',
			fillOpacity: 0.7
			});

			if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
				layer.bringToFront();
			}
			console.log(layer.feature.properties);
			info.update(layer.feature.properties);
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
			return  d > 1000 ? '#111E6C' :
					d > 500  ? '#1D2951' :
					d > 200  ? '#003152' :
					d > 100  ? '#000080' :
					d > 50   ? '#0E4D92' :
					d > 20   ? '#1034A6' :
					d > 10   ? '#0080FF' :
							   '#008ECC';
		}
		
		
		function stateStyle(f) {
			return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '2',
			fillOpacity: 0.7,
				fillColor: getColor(f.properties.value)
			};
		}

		function districtStyle(f) {
			return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '2',
			fillOpacity: 0.7,
				fillColor: getColor(f.properties.value)
			};
		}

		function mandalStyle(f) {
			return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '2',
			fillOpacity: 0.7,
				fillColor: getColor(f.properties.value)
			};
		}

		function resetHighlight(e) {	
			statesLayer.resetStyle(e.target);
		}

		function stateOnEachFeature(feature, layer) {
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				// click: popUp2
				click: zoomToState
			});
		}

		function districtOnEachFeature(feature, layer) {
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				// click: popUp2
				click: zoomToDistrict
			});
		}

		function mandalOnEachFeature(feature, layer) {
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				click: popUp2
				// click: zoomToMandal
			});
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
			// for (let index = 0; index < statesData.features.length; index++) {
			// 	statesData.features[index].properties["value"] = Math.floor(Math.random() * Math.floor(1500));
			// }

			for (let index = 0; index < statesData.features.length; index++) {
				statesData.features[index].properties["value"] = Math.floor(Math.random() * Math.floor(3000));
			}

			for (let index = 0; index < districtsData.features.length; index++) {
				districtsData.features[index].properties["value"] = Math.floor(Math.random() * Math.floor(3000));
			}

			for (let index = 0; index < mandalsData.features.length; index++) {
				mandalsData.features[index].properties["value"] = Math.floor(Math.random() * Math.floor(3000));
			}

			// geojsonLayer = L.geoJson(statesData,{
			// 									style: style,
			// 									onEachFeature:onEachFeature});      

			// geojsonLayer.addTo(m);
			m.removeLayer(statesLayer);

			statesLayer = L.geoJson(statesData,{
				style: stateStyle,
				onEachFeature:stateOnEachFeature
			});      

			statesLayer.addTo(m);

		}