<script setup>
import { ref } from "vue";
import HeaderButton from "./HeaderButton.vue";
</script>

<template>
  <header class="shadow-sm">
    <div class="container flex-between">
      <router-link to="/">
        <h4>Where in the world?</h4>
      </router-link>
      <HeaderButton />
    </div>
  </header>
</template>

<style scoped>
h4 {
  font-weight: 700;
  font-size: 1.5rem;
}
</style>
