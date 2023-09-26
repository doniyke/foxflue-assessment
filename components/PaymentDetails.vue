<template>
    <div class="bg-white p-5 pb-40">
        <div class="border-b border-gray-300 bg-white pb-5">
            <div class="flex justify-between pb-2">
                <div class="">
                    <UIcon name="i-heroicons-clock" class="text-yellow-700 text-xl font-bold"/>
                    <span class="font-bold text-2xl"> Payment pending</span>
                </div>
                <button class="font-bold text-4xl text-red-500 block float-right mt-0 pt-0">
                    <UIcon name="i-heroicons-ellipsis-horizontal-solid" class="text-red-500"/>
                </button>
            </div>
            <div class="mb-5">
                <h3 class="font-semibold">Subtotal</h3>
                <div class="flex justify-between">
                    <h4 class="text-gray-500">2 Devices</h4>
                    <h4>$1,300</h4>
                </div>
            </div>
            <div class="mb-5 pt-5">
                <h3 class="font-semibold">Payment Method</h3>
                <h4 class="text-gray-500">Cashapp: <span class="text-blue-500">$scga12</span></h4>
            </div>
            <div class="flex justify-between mb-5">
                <h3 class="font-semibold">Total</h3>
                <h4>$1,300</h4>
            </div>
        </div>
        <div class="text-center py-10">
            <button class="font-semibold text-white p-5 px-20 rounded-xl btn-payment">Send Payment</button>
        </div>
    </div>
</template>