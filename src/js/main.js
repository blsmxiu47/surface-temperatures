require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
  // Can be used with API key; otherwise will prompt login.
  // esriConfig.apiKey = "";

  const map = new Map({
    basemap: "arcgis-topographic" // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
  });

});
