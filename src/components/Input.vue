<script setup>
import { ref } from "vue";

const inputText = ref("");
const emit = defineEmits(["search"]);

const searchCountry = async () => {
  await emit("search", inputText.value)
}
</script>

<template>
  <div class="shadow-sm">
    <input v-model="inputText" @input="searchCountry" type="text" placeholder="Search a country.." />
    <i class="bi bi-search"></i>
  </div>
</template>

<style scoped>
div {
  height: 50px;
  background: var(--elements);
  border-radius: 3px;
  flex-basis: 59%%;
  width: 59%;
  max-width: 500px;
  position: relative;
}

input {
  height: 100%;
  width: 100%;
  appearance: none;
  border: none;
  outline: none;
  border-radius: inherit;
  background: var(--elements);
  color: var(--text);
  padding: 0 3rem;
}

i {
  font-size: 1.3rem;
  opacity: 0.8;
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
}

@media only screen and (max-width: 768px) {
  div {
    width: 100%;
    max-width: 100%;
    margin: auto;
  }
}
</style>
