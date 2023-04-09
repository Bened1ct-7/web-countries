<script setup>
import { ref, onMounted } from "vue";
import Input from "./Input.vue";
import Filter from "./Filter.vue";

const emit = defineEmits(["filter"])

const filterRegion = async (data) => {
  await emit("filter", data)
}

const searchCountry = async (data) => {
  await emit("search", data)
}

</script>

<template>
  <nav>
    <div class="flex-container">
      <Input @search="searchCountry" />
      <Filter @filter="filterRegion" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  margin: 1.5rem 0;
}

nav .flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto;
}



@media only screen and (max-width: 768px) {
  nav .flex-container {
    display: block;
  }
}
</style>
