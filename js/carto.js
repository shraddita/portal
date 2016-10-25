var map;

map	= new L.map('map-container', { zoomControl:false }).setView([40.7153604,-73.9837349], 10);

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {attribution: 'Positron'}).addTo(map);

var allLayers = 'https://nycem.carto.com/u/imorey/api/v2/viz/217510a8-447a-11e6-81f4-0e05a8b3e3d7/viz.json';


cartodb.createLayer(map, allLayers, {https: true})
	.addTo(map)
	.on('done', function(layer) {
		
	}).on('error', function() {
    //log the error
    });
  
  //.on('done', function(layer) {
		//censusTract = layer.getSubLayer(0);
		//censusTract.setInteraction(false);

		//nTabArea = layer.getSubLayer(1); 
		//nTabArea.hide();  //hide neighborhood polygons
		//nTabArea.on('featureClick', processNeighborhood);
	//}).on('error', function() {
		//log the error
	//});
