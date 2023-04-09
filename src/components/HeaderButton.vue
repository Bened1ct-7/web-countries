<script setup>
import { ref } from "vue";

const name = ref("bi bi-moon");
const text = ref("Dark Mode");

const toggleMode = () => {
  const body = document.body;
  const lightTheme = {theme: "light-mode"}
  const darkTheme = {theme: "dark-mode"}
  name.value = "bi bi-moon" ? "bi bi-sun" : "bi bi-moon";
  text.value = "Dark Mode" ? "Light Mode" : "Dark Mode";
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", JSON.stringify(lightTheme))
  } else {
    localStorage.setItem("theme", JSON.stringify(darkTheme))
  }
};
</script>

<template>
  <button type="button" @click="toggleMode">
    <i :class="name"></i>
    <span> {{ text }}</span>
  </button>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 1rem;
}
</style>
