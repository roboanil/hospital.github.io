


var layers = [];
var i = 0;
var map = "world-map-gdp";
var stateSelected, districtSelected, mandalSelected;
    	var districtsLayer;
    	var mandalsLayer;

for(var i=1;i<5;i++){
	if(document.getElementById(map.concat(i))){
		var m;
		if (typeof isComparisionPage !== undefined)
			m = L.map(map.concat(i)).setView([22.5937, 78.9629], 3.2);
		else
		 	m = L.map(map.concat(i)).setView([22.5937, 78.9629], 3.2);


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
			style: stateStyle(i)
		});

		statesLayer.addTo(m);
	}
}

function stateStyle(f) {
	var color = "#5b3769";
	if(f==2)
		color = "#1a324a";
	if(f==3)
		color = '#194d33';
	if (f==1 || f==4)
		color = "#5b3769";
	return {
	weight: 1,
	opacity: 1,
	color: 'white',
	fillOpacity: 1,
	fillColor: color
	};
}


		function districtStyle(f) {
			var color = "#5b3769";
	if(f==2)
		color = "#1a324a";
	if(f==3)
		color = '#194d33';
	if (f==1 || f==4)
		color = "#5b3769";
	return {
	weight: 1,
	opacity: 1,
	color: 'white',
	fillOpacity: 1,
	fillColor: color
	};
		}

		function mandalStyle(f) {
			var color = "#5b3769";
	if(f==2)
		color = "#1a324a";
	if(f==3)
		color = '#194d33';
	if (f==1 || f==4)
		color = "#5b3769";
	return {
	weight: 1,
	opacity: 1,
	color: 'white',
	fillOpacity: 1,
	fillColor: color
	};
		}
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