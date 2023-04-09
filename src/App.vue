<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from "vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

const app = JSON.parse(localStorage.getItem("theme")) || "";

onMounted(() => {
  document.body.className = app.theme;
})

</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
