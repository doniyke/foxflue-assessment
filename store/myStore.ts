import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
    state: () => ({
        userLongitude: null,
        userLatitude: null,
        pickupLatitude: 40.690514,
        pickupLongitude: -73.985087
    })
});