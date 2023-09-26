<template>
    <div style="height:50vh; width:100%">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[40.690514, -73.985087]"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker
        :lat-lng="[40.690514, -73.985087]" 
        />
      </LMap>
      <!-- replace lmarker with users current gps -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const zoom = ref(6)
  </script>
  
  <style>
  body {
    margin: 0;
  }
  </style>