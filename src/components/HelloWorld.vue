<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> _replcae = {{ _replcae }}</p>
    <p> _camelCase = {{ _camelCase }}</p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
  </div>
</template>

<script>
import replace from 'lodash/replace' 
import camelCase from 'lodash/camelCase'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    _replcae() {
      return replace('Hi Hsu', 'Hsu', 'Jacob')
    },
    _camelCase() {
      return camelCase('Jacob Hsu')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
