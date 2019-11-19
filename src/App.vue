<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getLodash } from '@/libs/lodash'
import groupBy from 'lodash/groupBy'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  created: function () {
    console.log('getLodash', getLodash('data_mounted'))
    console.warn('groupBy', groupBy(['one', 'two', 'three'], 'length') ) // => { '3': ['one', 'two'], '5': ['three'] }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
