var map;

map	= new L.map('map-container', { zoomControl:false }).setView([40.7153604,-73.9837349], 11);

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {attribution: 'Positron'}).addTo(map);

var allLayers = 'https://nycem.carto.com/u/imorey/api/v2/viz/217510a8-447a-11e6-81f4-0e05a8b3e3d7/viz.json';

function geometryHover(layer) {

    function featureOver(e, pos, latlng, data) {
        var cartocsshover = "#cscl_neighborhood_20141110{ polygon-fill: #3E7BB6; polygon-opacity: 0; line-color: #5CA2D1; line-width: 1; line-opacity: 1;}" + "#cscl_neighborhood_20141110 [ cartodb_id = "+ data.cartodb_id +"] {polygon-opacity: 0.5;}"
        
		layer.setCartoCSS(cartocsshover);
    }

    function featureOut() {
        layer.setCartoCSS("#cscl_neighborhood_20141110{ polygon-fill: #3E7BB6; polygon-opacity: 0; line-color: #5CA2D1; line-width: 1; line-opacity: 1;}");
    }

    layer.on('featureOver', featureOver);
    layer.on('featureOut', featureOut);
    layer.setInteraction(true);

}

cartodb.createLayer(map, allLayers, {https: true})
	.addTo(map)
	.on('done', function(layer) {
		censusTract = layer.getSubLayer(0);
		//censusTract.setInteraction(false);

		nTabArea = layer.getSubLayer(1); 
		//nTabArea.hide();  //hide neighborhood polygons
		//nTabArea.on('featureClick', processNeighborhood);
		
		geometryHover(nTabArea);
	})
	.on('error', function() {
    //log the error
	alert("some error occurred: " + err);
    });