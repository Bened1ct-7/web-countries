<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["nation"]);

const population = ref(null);
const region = ref(null);
const capital = ref(null);
const name = ref(null);
const link = ref('/country/Kingstown');

const assign = async (data) => {
  name.value = await data.nation.name.common;
  population.value = await data.nation.population;
  region.value = await data.nation.region;
  capital.value = await data.nation.capital[0];
  link.value = await `/country/${data.nation.capital[0]}`;
};

onMounted(async () => {
  await assign(props);
});
</script>

<template>
  <router-link :to="link">
    <div class="data">
      <h6 class="name">{{ name }}</h6>
      <p>
        <span>Population</span>
        <span class="fw-light">{{ population }}</span>
      </p>
      <p>
        <span>Region</span>
        <span class="fw-light">{{ region }}</span>
      </p>
      <p>
        <span>Capital</span>
        <span class="fw-light">{{ capital }}</span>
      </p>
    </div>
  </router-link>
</template>

<style scoped>
a {
  display: flex;
  align-items: center;
  height: 53%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.data {
  padding: 0 1rem;
}

.data .name {
  margin-bottom: 0.55rem;
  margin-top: 0;
  font-weight: 700;
  font-size: 1.65rem;
}

.data p {
  margin: 0.35rem 0;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
}
</style>
