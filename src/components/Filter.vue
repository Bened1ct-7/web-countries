<script setup>
import { ref, onMounted } from "vue";

const regions = ref(null);
const icon = ref("bi bi-chevron-down");
const text = ref("Filter by region");
const showRegion = ref(false);

const emit = defineEmits(["filter"])

const toggleRegion = () => {
  showRegion.value = !showRegion.value;
  icon.value =
    icon.value === "bi bi-chevron-down"
      ? "bi bi-chevron-up"
      : "bi bi-chevron-down";
};

const filterRegion = async (region) => {
  text.value = await region;
  await emit("filter", region);
  await toggleRegion();
};

onMounted(() => {
  regions.value = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
});
</script>

<template>
  <div class="filter">
    <div @click="toggleRegion" class="select shadow-sm">
      <span>{{ text }}</span>
      <i :class="icon"></i>
    </div>
    <div v-if="showRegion" class="region shadow-sm">
      <p v-for="region in regions" :key="region" @click="filterRegion(region)">
        {{ region }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.filter {
  position: relative;
  flex-basis: 39%;
  max-width: 220px;
}

.filter .select {
  height: 50px;
  background: var(--elements);
  color: var(--text);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.filter .region {
  padding: 1rem;
  border-radius: 3px;
  background: var(--elements);
  color: var(--text);
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  z-index: 5;
}

.region p {
  padding: 0.6rem 0;
  transition: all 0.3s ease;
}

.region p:hover {
  opacity: 0.5;
}

@media only screen and (max-width: 768px) {
  div.filter {
    margin-top: 2rem;
  }
}
</style>
