<script setup>
import { ref, onMounted } from "vue";
import Details from '../components/Details.vue'
import DetailsSuspense from '../components/DetailsSuspense.vue'

const props = defineProps(["capital"]);
const result = ref(null);
const src = ref(null);
const alt = ref(null);

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const arr = await res.json();
    result.value = await arr[0];
    await assign(result.value);
  } catch (e) {}
};

const getNewData = async (data) => {
  result.value = null;
  await fetchData(`https://restcountries.com/v3.1/capital/${data}`)
}

const assign = async (data) => {
  if (data) {
    src.value = await data.flags.png
    alt.value = await data.name.common
  }
}

onMounted(async () => {
  if (props.capital) {
    await fetchData(`https://restcountries.com/v3.1/capital/${props.capital}`)
  }
});
</script>

<template>
  <main>
    <div class="container">
      <button @click="$router.go(-1)" type="button" class="btn shadow-sm">
        <i class="bi bi-arrow-left"></i>
        <span>Back</span>
      </button>
      <div v-if="result" class="details">
        <img :src="src" :alt="alt" />
        <Details :data="result" @getNewData="getNewData"/>
      </div>
      <DetailsSuspense v-else />
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 2rem 0 1rem;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: var(--elements);
  color: var(--text);
  border-radius: 3px;
  padding: 0.2rem 0;
  width: 90px;
  border-radius: 3px;
  margin-bottom: 2rem;
}

.btn i {
  font-size: 1.2rem;
}

.details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1.5rem;
}

.details img {
  border-right: 5px;
  border-radius: 2px;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .details {
    display: block;
  }
  
  .details img {
    margin-bottom: 3rem;
    min-height: 200px;
    max-height: 220px;
  }
  
  .container {
    width: 88%;
    margin: auto;
  }
}
</style>
