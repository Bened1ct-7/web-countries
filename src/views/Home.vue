<script setup>
import { ref, onMounted } from "vue";
import Nav from "../components/Nav.vue";
import Section from "../components/Section.vue";
import HomeSuspense from "../components/HomeSuspense.vue";
import ErrorComponent from "../components/ErrorComponent.vue";

const result = ref(null);
const error = ref(false);

const fetchData = async (url) => {
  try {
    error.value = false;
    const res = await fetch(url);
    result.value = await res.json();
    if (result.value.status == 404) {
      error.value = true;
    }
  } catch (e) {
    error.value = true;
  }
};

const filterRegion = async (data) => {
  result.value = null;
  await fetchData(`https://restcountries.com/v3.1/region/${data}`);
};

const searchCountry = async (data) => {
  if (data !== "") {
    result.value = null;
    await fetchData(`https://restcountries.com/v3.1/name/${data}`);
  }
};

onMounted(async () => await fetchData("https://restcountries.com/v3.1/all"));
</script>

<template>
  <Nav @filter="filterRegion" @search="searchCountry" />
  <div v-if="error == true">
    <ErrorComponent />
  </div>
  <div v-else>
    <Section v-if="result" :data="result" />
    <HomeSuspense v-else />
  </div>
</template>
