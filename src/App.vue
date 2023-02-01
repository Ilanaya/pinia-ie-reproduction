<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="test">{{ counter.count }}</div>
  </div>
</template>

<script>
import { defineStore } from "pinia";
import HelloWorld from "./components/HelloWorld.vue";
const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count += 1;
    },
  },
});
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const counter = useCounterStore();
    return {
      counter,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.test {
  width: 200px;
  height: 200px;
}
</style>
