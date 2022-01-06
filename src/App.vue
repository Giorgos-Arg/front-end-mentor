<template>
  <div id="app" class="content-wrapper flex flex-col min-h-screen">
    <HamburgerMenu />
    <div class="flex-grow">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import HamburgerMenu from "./components/HamburgerMenu.vue";
</script>

<style scoped>
@import "./css/main.css";
</style>
