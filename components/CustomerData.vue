<script setup>
const userLongitude = ref(null);
const userLatitude = ref(null);
const pickupLatitude = 40.690514;
const pickupLongitude = -73.985087;
const distance = ref(0);

async function getUserLocation() {
  try {
    const position = await navigator.geolocation.getCurrentPosition();
    userLongitude.value = position.coords.latitude;
    userLatitude.value = position.coords.longitude;
  } catch (error) {
    console.error('Error getting user coordinates:', error.message);
  }
}

function calculateDistance() {
  const deg2rad = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const lat1Rad = deg2rad(userLatitude.value);
  const lon1Rad = deg2rad(userLongitude.value);
  const lat2Rad = deg2rad(pickupLatitude);
  const lon2Rad = deg2rad(pickupLongitude);

  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const R = 6371; // Radius of the Earth in kilometers
  const distance = R * c; // The distance between the two points in kilometers

  return (distance/1.609344).toFixed(2);
}

onMounted(async() => {
  if (navigator.geolocation.getCurrentPosition) {
    await getUserLocation();
    distance.value = calculateDistance();
  }
});
</script>
<template>
    <div class="customer-data">
        <div class="p-5 border-b border-gray-300 bg-white">
            <div class="flex justify-between">
                <div>
                    <h3 class="font-semibold text-gray-500">Customer</h3>
                    <h3 class="font-bold text-2xl">Christopher Nunez</h3>
                    <h3 class="font-bold text-xl">+1 (516) 812-9200</h3>
                </div>
                <div class="pt-5">
                    <button class="font-semibold text-blue-500 p-3 px-5 me-5 rounded-lg bg-gray-200">
                        <UIcon name="i-heroicons-chat-bubble-oval-left-solid" class="text-5xl block"/>
                        <label>Msg</label>
                    </button>
                    <button class="font-semibold text-blue-500 p-3 px-5 rounded-lg bg-gray-200">
                        <UIcon name="i-heroicons-phone-solid" class="text-5xl block"/>
                        <label>Msg</label>
                    </button>
                </div>
            </div>
        </div>
        <div class="p-5 border-b border-gray-300 bg-white">
            <div class="flex justify-between" v-if="distance && distance > 0">
                <div>
                    <h3 class="font-semibold text-gray-500">Pickup address</h3>
                    <h3 class="font-bold text-2xl">3001 Fulton St, Brooklyn,<br>NY 11208</h3>
                    <h3 class="font-bold text-lg text-blue-700">
                        <UIcon name="i-heroicons-map-pin-solid" class=""/>
                        {{ distance }} mi away from my location
                    </h3>
                </div>
                <div>
                    <button class="font-semibold text-white p-3 py-5 mt-5 px-5 rounded-lg bg-green-400 text-5xl">Go</button>
                </div>
            </div>
            <div class="placeholder" v-else>
              <div class="animated-background" />
            </div>
        </div>
    </div>
</template>