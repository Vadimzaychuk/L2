<template>
  <div id="app">
    <h1>Рандомайзер</h1>
    <p>Випадкове число: <strong>{{ randomNumber }}</strong></p>
    <button @click="generateRandomNumber">Згенерувати ще раз</button>
  </div>
</template>

<script>
export default {
  name: "Randomizer",
  data() {
    return {
      randomNumber: null, // Початкове значення
    };
  },
  methods: {
    generateRandomNumber() {
      // Генеруємо число від 1 до 6
      this.randomNumber = Math.floor(Math.random() * 6) + 1;
    },
  },
  mounted() {
    // Генеруємо перше число при завантаженні сторінки
    this.generateRandomNumber();
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button:hover {
  background-color: #f0f0f0;
}
</style>
