<script setup>
import { ref, onMounted } from "vue";
import Data from "./Data.vue";

const props = defineProps(["nation"]);

const src = ref(null);
const alt = ref(null);
const country = ref(null);

const assign = async (data) => {
  src.value = await data.flags.png;
  alt.value = await data.name.common;
  country.value = await data;
};

onMounted(async () => {
  if (props.nation) {
    await assign(props.nation);
  }
});
</script>

<template>
  <div class="country shadow-sm">
    <img v-if="src" :src="src" :alt="alt" />
    <div v-else class="img"></div>
    <Data v-if="country" :nation="country" />
  </div>
</template>

<style scoped>
.country {
  border-radius: 5px;
  height: 320px;
  color: var(--text);
  background: var(--elements);
  transition: all 0.3s ease;
}

.country:hover {
  transform: scale(1.05);
}

.country img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 47%;
  width: 100%;
}

.country .img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 47%;
  width: 100%;
  animation: reflect 2s linear infinite;
}
</style>
