<template>
  <div class="country shadow-sm">
    <div class="img"></div>
    <div class="main">
      <div class="data">
        <h6></h6>
        <p>
          <span></span>
          <span></span>
        </p>
        <p>
          <span></span>
          <span></span>
        </p>
        <p>
          <span></span>
          <span></span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.country {
  border-radius: 5px;
  height: 320px;
  color: var(--text);
  background: var(--elements);
}

.country .img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 47%;
  width: 100%;
  animation: reflect 2s linear infinite;
}

.main {
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
  height: 35px;
  width: 100px;
  animation: reflect 2s linear infinite;
  border-radius: 1px;
}

.data p {
  margin: 0.35rem 0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.data p span {
  display: block;
  border-radius: 1px;
  height: 20px;
  width: 80px;
  animation: reflect 2s linear infinite;
}

.data p span:nth-child(2) {
  width: 120px;
}

@keyframes reflect {
  0% {
    background: rgba(150, 150, 150, 0.3);
  }
  50% {
    background: rgba(230, 230, 230, 0.3)
  }
  100% {
    background: rgba(190, 190, 190, 0.3)
  }
}
</style>
