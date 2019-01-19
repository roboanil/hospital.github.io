var layers = [];
var i = 0;
var map = "world-map-gdp";
var stateSelected, districtSelected, mandalSelected;
var districtsLayer;
var mandalsLayer;

for(var i=1;i<5;i++){
	if(document.getElementById(map.concat(i))){
		var m;
		if (typeof isComparisionPage === undefined)
			m = L.map(map.concat(i)).setView([22.5937, 78.9629], 4.2);
		else
		 	m = L.map(map.concat(i)).setView([22.5937, 78.9629], 3.2);

		 console.log(m.getZoom());
		for (let index = 0; index < statesData.features.length; index++) {
			statesData.features[index].properties["value"] = Math.floor(Math.random() * Math.floor(1500));
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

