// resize layers control to fit into view.
function resizeLayerControl() {
  var layerControlHeight = document.getElementById("map").clientHeight - (10 + 50);
  var layerControl = document.getElementsByClassName('leaflet-control-layers-expanded')[0];

  layerControl.style.overflowY = 'auto';
  layerControl.style.maxHeight = layerControlHeight + 'px';
}

function createMap(divName) {
  // Create a map
  var map = L.map(divName, {
  worldCopyJump: true
  }).fitBounds([[-35,16.25],[-22,33]]);

  // Create a layer switcher
  var layers = L.control.layers(null, null, {collapsed:false}).addTo(map);

  // Add OpenStreetMap layer
  layers.addBaseLayer(L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© <a target=\"_parent\" href=\"https://www.openstreetmap.org\">OpenStreetMap</a> and contributors, under an <a target=\"_parent\" href=\"https://www.openstreetmap.org/copyright\">open license</a>",
    maxZoom: 19
  }), "OpenStreetMap");

  // MAPPING

  var defaultLayer = L.tileLayer.wms('http://apollo.cdngiportal.co.za/erdas-iws/ogc/wms/CDNGI_PORTAL_BACKDROP?', {
    layers: 'CDNGI_2mil_Mosaic',
    attribution: 'State Copyright &copy; <a href="http://www.ngi.gov.za/">CD: NGI</a>',
    maxZoom: 22
  })
  layers.addBaseLayer(defaultLayer, "CDNGI Mapping 1:2M")
  defaultLayer.addTo(map)

  layers.addBaseLayer(L.tileLayer.wms('http://apollo.cdngiportal.co.za/erdas-iws/ogc/wms/CDNGI_PORTAL_BACKDROP?', {
    layers: 'CDNGI_250K_Current_Mosaic.ecw',
    attribution: 'State Copyright &copy; <a href="http://www.ngi.gov.za/">CD: NGI</a>',
    maxZoom: 22
  }), "CDNGI Mapping 1:250K")

  layers.addBaseLayer(L.tileLayer.wms('http://apollo.cdngiportal.co.za/erdas-iws/ogc/wms/CDNGI_PORTAL_BACKDROP?', {
    layers: 'CDNGI_50K_Current_Mosaic',
    attribution: 'State Copyright &copy; <a href="http://www.ngi.gov.za/">CD: NGI</a>',
    maxZoom: 22
  }), "CDNGI Mapping 1:50K Current")

  layers.addBaseLayer(L.tileLayer.wms('http://apollo.cdngiportal.co.za/erdas-iws/ogc/wms/CDNGI_PORTAL_BACKDROP?', {
    layers: 'CDNGI_50K_1stEdition_Mosaic',
    attribution: 'State Copyright &copy; <a href="http://www.ngi.gov.za/">CD: NGI</a>',
    maxZoom: 22
  }), "CDNGI Mapping 1:50K 1st Edition")

  // IMAGERY
 
  layers.addBaseLayer(L.tileLayer.wms('http://apollo.cdngiportal.co.za/erdas-iws/ogc/wms/CDNGI_PORTAL_BACKDROP?', {
    layers: 'CDNGI_Imagery_50cm_MOSAIC',
    attribution: 'State Copyright &copy; <a href="http://www.ngi.gov.za/">CD: NGI</a>',
    maxZoom: 22
  }), "CDNGI Imagery 50cm 2016")

  layers.addBaseLayer(L.tileLayer.wms('http://apollo.cdngiportal.co.za/erdas-iws/ogc/wms/CDNGI_PORTAL_BACKDROP?', {
    layers: 'CDNGI_Imagery_25cm_MOSAIC_2018',
    attribution: 'State Copyright &copy; <a href="http://www.ngi.gov.za/">CD: NGI</a>',
    maxZoom: 22
  }), "CDNGI Imagery 25cm 2018")

  layers.addBaseLayer(L.tileLayer.wms('http://apollo.cdngiportal.co.za/erdas-iws/ogc/wms/CDNGI_PORTAL_BACKDROP?', {
    layers: 'CDNGI_Imagery_25cm_MOSAIC_2017',
    attribution: 'State Copyright &copy; <a href="http://www.ngi.gov.za/">CD: NGI</a>',
    maxZoom: 22
  }), "CDNGI Imagery 25cm 2017")

  // LANDCOVER

  layers.addBaseLayer(L.tileLayer.wms('http://apollo.cdngiportal.co.za/erdas-iws/ogc/wms/CDNGI_PORTAL_BACKDROP?', {
    layers: 'CDNGI_Landcover_2017-2018',
    attribution: 'State Copyright &copy; <a href="http://www.ngi.gov.za/">CD: NGI</a>',
    maxZoom: 22
  }), "CDNGI Landcover 2017-2018")

  layers.addBaseLayer(L.tileLayer.wms('http://apollo.cdngiportal.co.za/erdas-iws/ogc/wms/CDNGI_PORTAL_BACKDROP?', {
    layers: 'CDNGI_Landcover_2013-2014',
    attribution: 'State Copyright &copy; <a href="http://www.ngi.gov.za/">CD: NGI</a>',
    maxZoom: 22
  }), "CDNGI Landcover 2013-2014")

  // Add the permalink control
  map.addControl(new L.Control.Permalink());

   var lc = L.control.locate({
    position: 'bottomleft'
  }).addTo(map);

  map.on('resize', resizeLayerControl);
  resizeLayerControl();

  return map;
}
