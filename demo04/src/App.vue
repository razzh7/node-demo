<template>
  <div>
    <h1 class="orange">webpack手动搭建Vue2.x开发环境</h1>
    <h3 class="green">success!</h3>
    <button @click="testEs6" :style="style">ES6语法</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: "tsuzaki",
        age: 18,
      },
    };
  },
  methods: {
    testEs6() {
      const res = () => {
        console.log("Es6语法实践");
        console.log("this", test);
      };
      res();
    },
  },
  computed: {
    style() {
      return "color: #340E9E;font-size: 22px;";
    },
  },
};
</script>

<style>
@import url(./index.css);
.orange {
  color: orange;
}
.green {
  color: #28e31e;
}
</style>
