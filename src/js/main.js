require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/Basemap",
  "esri/layers/VectorTileLayer",
  "esri/layers/TileLayer",
  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery"

], function(esriConfig, Map, MapView, Basemap, VectorTileLayer, TileLayer, BasemapToggle, BasemapGallery) {

  // Can be used with API key; otherwise will prompt login.
  esriConfig.apiKey = "";

  const vectorTileLayer = new VectorTileLayer({
    portalItem: {
      id: "6976148c11bd497d8624206f9ee03e30"
    },
    opacity: .75
  });

  const imageTileLayer = new TileLayer({
    portalItem: {
      id: "1b243539f4514b6ba35e7d995890db1d"
    }
  });

  const basemap = new Basemap({
    baseLayers: [

      imageTileLayer,
      vectorTileLayer

    ]
  });

  const map = new Map({
    basemap: basemap // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-122.3321, 47.6062], // Longitude, latitude
    zoom: 12, // Zoom level
    container: "viewDiv" // Div element
  });

  // const basemapToggle = new BasemapToggle({
  //   view: view,
  //   nextBasemap: "arcgis-imagery"
  // });

  // view.ui.add(basemapToggle,"bottom-right");

  // const basemapGallery = new BasemapGallery({
  //   view: view,
  //   source: {
  //     query: {
  //       title: '"World Basemaps for Developers" AND owner:esri'
  //     }
  //   }
  // });

  // view.ui.add(basemapGallery, "top-right"); // Add to the view

});
