<template class="">
  <div
    class="overflow-x-hidden py-20 bg-bg-order-summary bg-repeat-x bg-pale-blue font-redHatDisplay justify-center h-screen"
  >
    <div class="mx-auto max-w-md justify-center">
      <div class="bg-white shadow-md border border-gray-200 rounded-3xl">
        <div class="">
          <img
            class="rounded-t-3xl w-full"
            src="../assets/images/orderSummary/illustration-hero.svg"
            alt=""
          />
        </div>
        <div class="p-10">
          <div class="pb-3">
            <h5
              class="text-gray-900 font-extrabold text-2xl text-center tracking-tight mb-2"
            >
              Order Summary
            </h5>
          </div>
          <p class="text-sm text-center font-normal mb-5 text-gray-700">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div
            class="flex flex-row p-5 mb-8 bg-blue-50 rounded-lg items-center"
          >
            <div class="pr-5">
              <img src="../assets/images/orderSummary/icon-music.svg" alt="" />
            </div>
            <div class="text-sm pr-14">
              <p class="font-bold">Annual Plan</p>
              <p class="font-semibold text-gray-500">$59.99/year</p>
            </div>
            <div class="">
              <a class="underline text-purple-800 font-semibold text-sm"
                >Change</a
              >
            </div>
          </div>
          <div class="flex flex-col">
            <a
              class="text-white text-center font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-20 py-3 mb-5 shadow-xl shadow-gray-300"
              href="#"
            >
              Proceed to Payment
            </a>
            <a class="text-gray-500 font-bold text-sm text-center" href="#">
              Cancel Order
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../css/orderSummary.css";
</style>
