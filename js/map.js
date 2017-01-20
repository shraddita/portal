var map;

map	= new L.map('map-container', { zoomControl:false }).setView([40.7153604,-73.9837349], 11);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {attribution: 'Positron'}).addTo(map);

var allLayers = 'https://nycem.carto.com/u/imorey/api/v2/viz/217510a8-447a-11e6-81f4-0e05a8b3e3d7/viz.json';

// declares nTabID as a global variable
var nTabID = "";

cartodb.createLayer(map, allLayers, {https: true})
	.addTo(map)
	.on('done', function(layer) {
		censusTract = layer.getSubLayer(0);
		//censusTract.setInteraction(false);

		nTabArea = layer.getSubLayer(1); 
		//nTabArea.hide();  //hide neighborhood polygons
		//nTabArea.on('featureClick', processNeighborhood);
		
		nTabArea.on('featureClick', function(e, latlng, pos, data){
		  nTabID = data.neighborho;
		  nTabArea.set(subLayerOptions);
		  return nTabID;
	    });
	}).on('error', function() {
    //log the error
	alert("some error occurred: " + err);
    });
	
function getNeighborho(){
	if (nTabID == "") {
		alert("Select an area first!");
	} else {console.log(nTabID)}
};



 var subLayerOptions = {
      //sql: "SELECT * FROM example_cartojs_1 where pop_other::float > 1000000",
	  cartocss: "#cscl_neighborhood_20141110{polygon-fill: #109DCD;}"
}

