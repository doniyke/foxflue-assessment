<script setup>
  const pageData = reactive({
    loading: false
  })
  setTimeout(() => {
    pageData.loading = true
  }, 5000);
  
</script>
<template>
  <div class="bg-gray-50">
    <div class="mx-auto sm:w-1/3">
      <MapComponent />
      <PickupData />
      <CustomerData />
      <div v-if="pageData.loading">
        <ClientOnly>
          <DevicesInspection />
        </ClientOnly>
      </div>
      <div v-else>
        <div class="placeholder">
          <div class="animated-background" />
        </div>
      </div>
      {{ pageData.pageData }}
      <PaymentDetails />
      <NavIcons />
    </div>
  </div>
</template>
