import dotenv from 'dotenv'

import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/views/MapView'

dotenv.config()
esriConfig.apiKey = process.env.ARCGIS_API_KEY

const map = new Map({
  basemap: 'arcgis-topographic' // Basemap layer service
})

const view = new MapView({
  map: map,
  center: [-118.805, 34.027], // Longitude, latitude
  zoom: 13, // Zoom level
  container: 'viewDiv' // Div element
})
