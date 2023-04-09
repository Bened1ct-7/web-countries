<script setup>
import CountrySuspense from './CountrySuspense.vue'

</script>

<template>
  <section>
    <div class="container">
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
      <CountrySuspense />
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
    margin: 10% auto;
  }
}
</style>