<script setup>
import { ref, onMounted } from "vue";
import uniqueId from 'lodash.uniqueid';
import Country from "./Country.vue"

const result = ref(null);
const props = defineProps(["data"]);

onMounted(() => {
  if (props.data) {
    result.value = props.data
  }
})

</script>

<template>
  <section>
    <div class="container">
      <Country 
      v-for="nation in result"
      :key="uniqueId('country-')"
      :nation="nation"
      />
    </div>
  </section>
</template>

<style scoped>
.container {
  margin: 1.5rem auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
}

@media only screen and (max-width: 992px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 500px) {
  .container {
    display: block;
  }

  .container > div {
    width: 75%;
    max-width: 450px;
    margin: 13% auto;
  }
}
</style>
