<template>
  <div class="details">
    <div class="img"></div>
    <div class="content">
      <h2 class="name"></h2>
      <div class="flex-container">
        <div>
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
          <p>
            <span></span>
            <span></span>
          </p>
          <p>
            <span></span>
            <span></span>
          </p>
        </div>

        <div>
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
      <div class="borders">
        <h2></h2>
        <div class="btns">
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1.5rem;
}

.details .img {
  border-right: 5px;
  border-radius: 2px;
  height: 230px;
  width: 100%;
  animation: reflect 2s linear infinite;
}

@media only screen and (max-width: 768px) {
  .details {
    display: block;
  }
  
  .details .img {
    margin-bottom: 3rem;
    min-height: 200px;
    max-height: 220px;
  }
  
  .container {
    width: 88%;
    margin: auto;
  }
}

h2 {
  height: 35px;
  width: 100px;
  animation: reflect 2s linear infinite;
  border-radius: 1px;
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

p {
  margin: 0.1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}

p span {
  display: block;
  border-radius: 1px;
  height: 20px;
  width: 80px;
  animation: reflect 2s linear infinite;
}

p span:nth-child(2) {
  width: 120px;
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
