<template class="">
  <div
    class="flex overflow-x-hidden bg-pattern font-redHatDisplay justify-center items-center h-screen font-kumbh-sans"
  >
    <div class="mx-auto justify-center">
      <div class="bg-white rounded-3xl bg-bg-profile-card">
        <div class="relative">
          <div class="">
            <img
              class="w-full rounded-t-3xl"
              src="../assets/images/profileCard/bg-pattern-card.svg"
              alt=""
            />
          </div>
          <div class="flex justify-center">
            <img
              class="rounded-full w-32 border-[5px] border-white overflow-hidden absolute top-24"
              src="../assets/images/profileCard/image-victor.jpg"
              alt=""
            />
          </div>
        </div>

        <div class="mt-20">
          <div class="flex pb-3 justify-center items-center">
            <p
              class="text-gray-900 font-bold text-xl text-center tracking-tight"
            >
              Victor Crest
            </p>
            <span class="text-gray-400 text-xl ml-2">26</span>
          </div>
          <p class="text-lg text-center text-gray-400">London</p>
          <div
            class="grid grid-cols-3 text-xl w-full border-t border-gray-200 mt-8 py-5"
          >
            <div
              class="flex flex-col justify-center items-center text-gray-900"
            >
              <span class="font-extrabold">80k</span
              ><span class="text-sm text-gray-400 pt-1">Followers</span>
            </div>
            <div
              class="flex flex-col justify-center items-center text-gray-900"
            >
              <span class="font-extrabold">803K</span
              ><span class="text-sm text-gray-400 pt-1">Likes</span>
            </div>
            <div
              class="flex flex-col justify-center items-center text-gray-900"
            >
              <span class="font-extrabold">1.4K</span
              ><span class="text-sm text-gray-400 pt-1">Photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../css/profileCard.css";
</style>
