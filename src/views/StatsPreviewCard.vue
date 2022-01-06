<template class="">
  <div
    class="
      flex flex-col
      justify-center
      h-screen
      bg-very-dark-blue
      overflow-x-hidden
    "
  >
    <div
      class="
        relative
        flex flex-col
        md:flex-row md:space-x-5 md:space-y-0
        rounded-lg
        max-w-xs
        md:max-w-4xl
        mx-auto
        bg-dark-desaturated-blue
      "
    >
      <div class="w-full md:w-3/5 flex flex-col p-12 text-white">
        <h3 class="md:text-3xl text-xl pb-5">
          Get <span class="text-purple-700 font-bold">insights</span> that help
          your span business grow.
        </h3>
        <p class="md:text-lg text-gray-500 text-base pb-10">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div class="grid grid-cols-3 text-xl justify-between w-full">
          <div class="flex flex-col">
            <span>10k+</span
            ><span class="text-sm text-gray-400 font-thin">companies</span>
          </div>
          <div class="flex flex-col">
            <span>314</span
            ><span class="text-sm text-gray-400 font-thin">templates</span>
          </div>
          <div class="flex flex-col">
            <span>12M+</span
            ><span class="text-sm text-gray-400 font-thin">queries</span>
          </div>
        </div>
      </div>
      <div class="w-full md:w-3/5 object-cover object-center bg-purple-900">
        <img
          src="../assets/images/statsPreviewCard/image-header-desktop.jpg"
          class="rounded-r-lg h-full mix-blend-overlay"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../css/statsPreviewCard.css";
</style>
