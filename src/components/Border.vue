<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(["name"]);

const emit = defineEmits(['getNewData'])
const result = ref(null)
const nation = ref(null)
const capital = ref(null)

const fetchData = async (url) => {
  const res = await fetch(url)
  const array = await res.json()
  result.value = await array[0]
  nation.value = await result.value.name.common
  capital.value = await result.value.capital[0]
}

onMounted(async () => {
  await assign(result.value)
})

fetchData(`https://restcountries.com/v3.1/alpha/${props.name}`)

const getData = () => {
  emit('getNewData', capital.value)
}

</script>

<template>
  <button v-if="nation" type="button" class="shadow-sm" @click="getData">
    {{ nation }}
  </button>
  <div v-else class="shadow-sm"></div>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0;
  font-size: 0.9rem;
}

div {
  height: 30px;
  border-radius: 2px;
  animation: reflect 2s linear infinite;
}
</style>
