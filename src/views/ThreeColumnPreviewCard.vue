<template class="">
  <div
    class="flex flex-col justify-center bg-transparent-white overflow-x-hidden"
  ></div>

  <div class="grid grid-cols-3 max-w-3xl">
    <div class="bg-bright-orange p-10">
      <img
        src="../assets/images/threeColumnPreviewCard/icon-sedans.svg"
        alt=""
        class="pt-10"
      />
      <h2 class="text-2xl font-bold pt-10">Sedans</h2>
      <p class="pt-10 pb-20">
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>
      <a
        class="
          text-white text-center
          bg-transparent
          hover:bg-transparent-white
          border border-white
          rounded-3xl
          hover:text-orange-500 hover:bg-white
          text-sm
          px-5
          py-5
          mb-5
        "
        href="#"
      >
        Learn More
      </a>
    </div>
    <div class="bg-dark-cyan">
      <img
        src="../assets/images/threeColumnPreviewCard/icon-suvs.svg"
        alt=""
        class="pt-10"
      />
      <h2>SUVs</h2>
      <p class="pt-10 pb-20">
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.
      </p>
      <a
        class="
          text-white text-center
          bg-transparent
          hover:bg-transparent-white
          border border-white
          rounded-3xl
          hover:text-orange-500 hover:bg-white
          text-sm
          px-5
          py-5
          mb-5
        "
        href="#"
      >
        Learn More
      </a>
    </div>
    <div class="bg-very-dark-cyan">
      <img
        src="../assets/images/threeColumnPreviewCard/icon-luxury.svg"
        alt=""
      />
      <h2>Luxury</h2>
      <p>
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </p>
      <a
        class="
          text-white text-center
          bg-transparent
          hover:bg-transparent-white
          border border-white
          rounded-3xl
          hover:text-orange-500 hover:bg-white
          text-sm
          px-5
          py-5
          mb-5
        "
        href="#"
      >
        Learn More
      </a>
    </div>
  </div>
</template>

<style scoped>
@import "../css/threeColumnPreviewCard.css";
</style>
