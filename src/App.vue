<script setup lang="ts">
import { Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { onMounted } from 'vue'

onMounted(() => {
  
  // Assign our Map object to a global so it's easily accessible
  // from within our Playwright tests
  const map = document.myMappyMap = new Map({
    container: 'map',
    center: [0, 0],
    zoom: 1,   
    // Set the test mode to true and give it 
    // a dummy style to interact with
    testMode: true,
    style: {
      version: 8,
      sources: {
        land: {
          type: 'geojson',
          data: 'land.geojson'
        }
      },
      layers: [
        {
          id: 'land',
          type: 'fill',
          source: 'land',
          paint: {
            'fill-color': '#f0e9e1'
          }
        }
      ]
    }
  })       
})

</script>

<template>
  <div id="map" style="height: 400px"></div>
</template>
