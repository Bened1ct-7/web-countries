<script setup>
import { ref, onMounted } from "vue";
import uniqueId from "lodash.uniqueid";
import Border from "./Border.vue";

const emit = defineEmits(["getNewData"]);
const name = ref(null);
const officialName = ref(null);
const population = ref(null);
const region = ref(null);
const subregion = ref(null);
const capital = ref(null);
const unMember = ref(null);
const currency = ref(null);
const symbol = ref(null);
const language = ref(null);
const borders = ref(null);
const props = defineProps(["data"]);

const assign = (data) => {
  name.value = data.name.common;
  officialName.value = data.name.official;
  population.value = data.population;
  region.value = data.region;
  subregion.value = data.subregion;
  capital.value = data.capital[0];
  unMember.value = data.unMember === true ? "Yes" : "No";
  borders.value = data.borders;
};

const assignCurr = (obj) => {
  for (let key in obj) {
    if (obj[key]) {
      currency.value = obj[key].name;
      symbol.value = obj[key].symbol;
    }
  }
};

const assignLang = (obj) => {
  for (let key in obj) {
    if (obj[key]) {
      language.value = obj[key];
    }
  }
};

const getData = (data) => {
  emit("getNewData", data);
}

onMounted(async () => {
  if (props.data) {
    await assign(props.data);
    await assignCurr(props.data.currencies);
    await assignLang(props.data.languages);
  }
});
</script>

<template>
  <div class="content">
    <h2 class="name">{{ name }}</h2>
    <div class="flex-container">
      <div>
        <p>
          <span>Official Name: </span>
          <span class="fw-light">{{ officialName }}</span>
        </p>
        <p>
          <span>Population: </span>
          <span class="fw-light">{{ population }}</span>
        </p>
        <p>
          <span>Region: </span>
          <span class="fw-light">{{ region }}</span>
        </p>
        <p>
          <span>Sub Region: </span>
          <span class="fw-light">{{ subregion }}</span>
        </p>
        <p>
          <span>Capital: </span>
          <span class="fw-light">{{ capital }}</span>
        </p>
      </div>

      <div>
        <p>
          <span>UN Member: </span>
          <span class="fw-light">{{ unMember }}</span>
        </p>
        <p>
          <span>Currency: </span>
          <span class="fw-light"> {{ currency }} - ({{ symbol }})</span>
        </p>
        <p>
          <span>Language: </span>
          <span class="fw-light">{{ language }}</span>
        </p>
      </div>
    </div>
    <div class="borders">
      <h2 class="name">Border Countries</h2>
      <div v-if="borders" class="btns">
        <Border
          v-for="border in borders"
          :key="uniqueId('border-')"
          :name="border"
          @getNewData="getData"
        />
      </div>
      <div v-else class="else my-4">No information available</div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.borders {
  margin-top: 1rem;
}

.else {
  margin: 1rem 0;
  opacity: 0.7;
}

p {
  margin: 0.1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}

.btns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 0.9rem;
  gap: 1rem;
}

.btns a {
  border-radius: 3px;
}

@media only screen and (max-width: 768px) {
  h2 {
    margin-bottom: 2.3rem;
  }

  .flex-container {
    display: block;
  }

  .flex-container > div + div {
    margin-top: 2rem;
  }

  p {
    margin-top: 0.25rem;
  }
}
</style>
