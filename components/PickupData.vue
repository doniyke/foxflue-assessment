<template>
    <div class="py-5 border-b border-gray-300 bg-white pickup-data">
        <div class="px-10 flex justify-between py-5">
            <button class="px-6 py-2 font-semibold text-xs text-blue-700 bg-transparent border border-blue-500 rounded-full hover:bg-transparent">
                Offer #T216
            </button>
            <button class="font-semibold bg-yellow-300 text-xs text-black px-5 py-2 hover:bg-yellow-300 rounded-full">
                Pending payment
            </button>
            <button class="font-semibold bg-gray-300 text-black px-10 py-2 hover:bg-gray-300 rounded-full text-xs">
                Assigned
            </button>
        </div>
        <div class="px-10 flex justify-between py-10">
            <div class="flex">
                <div class="icon">
                    <UIcon name="i-heroicons-calendar-days-solid" class="text-blue-500 text-6xl"/>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-500">Date</h3>
                    <h3 class="font-bold text-2xl">March 6</h3>
                </div>
            </div>
            <div class="flex">
                <div class="icon">
                    <UIcon name="i-heroicons-clock-solid" class="text-blue-500 text-6xl"/>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-500">Time</h3>
                    <h3 class="font-bold text-2xl">11 am  - 12 pm</h3>
                </div>
            </div>
        </div>
        <div class="flex justify-between bg-blue-50 border border-blue-700 rounded p-5 px-10 font-semibold text-2xl mx-10">
            <div>
                <h3>You will earn</h3>
            </div>
            <div class="text-blue-500">
                $30
            </div>
        </div>
    </div>
</template>