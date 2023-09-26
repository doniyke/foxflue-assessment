<template>
    <div class="bg-white my-5 devices">
        <div class="flex justify-between pb-2 p-5">
            <h3 class="font-bold text-2xl title">Devices</h3>
        </div>
        <div class="flex justify-between border-b border-gray-300 pb-5 p-5" v-for="device, index in devices" :key="index">
            <div class="flex pt-5">
                <div>
                    <img src="~/assets/images/apple-iphone-13-pro-max-01.jpg" alt="" class="w-16 h-auto max-w-full object-contain" v-if="index==0">
                    <img src="~/assets/images/iphone13.jpg" alt="" class="w-16 h-auto max-w-full object-contain" v-if="index==1">
                </div>
                <div class="ms-2">
                    <h3 class="font-bold text-xl">{{ device.name }}</h3>
                    <h3 class="text-gray-500 description">{{ device.description }}</h3>
                    <h3 class="text-blue-500 font-bold">{{ device.offer }}</h3>
                </div>
            </div>
            <div>
                <div>
                    <button class="font-bold text-4xl text-red-500 block float-right mt-0 pt-0">
                        <UIcon name="i-heroicons-ellipsis-horizontal-solid" class="text-red-500"/>
                    </button>
                </div>
                <button class="font-bold text-white bg-red-500 p-5 rounded-xl inspect" @click="openFileDialog()">
                    Start Inspection
                </button>
                <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    style="display: none"
                    @change="onImageSelected()"
                />
            </div>
        </div>
    </div>
</template>
<script  setup>
    import { ref, reactive } from 'vue';
    import {useToast} from 'vue-toast-notification';
    import 'vue-toast-notification/dist/theme-sugar.css';

    const $toast = useToast();

    const devices = reactive([
        {name: 'iPhone 13 Pro Max', description: '128GB - Unlocked - Flawless', offer: 'Estimated offer $750', image:'apple-iphone-13-pro-max-01.jpg'},
        {name: 'iPhone 13', description: '128GB - Unlocked - Good', offer: 'Estimated offer $550', image:'iphone13.jpg'}
    ])
    const fileInput = ref(null)
    const base64Image = ref(null)

    function openFileDialog() {
        const input = document.createElement('input');
        input.type = 'file'
        input.accept = 'image/*'
        input.style.display = 'none'

        input.addEventListener('change', (event) => {
            onImageSelected(event.target.files)
            document.body.removeChild(input)
        });

        document.body.appendChild(input)
        input.click()
    }

    function onImageSelected(files) {
        if (files.length > 0) {
            const reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = function () {
                base64Image.value = reader.result
                console.log('Base64 Selected Image Conversion : ', base64Image.value)
                $toast.success('Image has been converted to base64, stored as a variable and logged in the browser console ', {
                    position: 'top'
                })
            }
        }
    }
</script>