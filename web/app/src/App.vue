<template>
  <div class="app">
    <md-toolbar>
      <h1 class="md-title">CppVisualizer</h1>
    </md-toolbar>
    <Editor/>
  </div>
</template>

<script>
import Editor from './components/Editor.vue'

export default {
  name: 'CppVisualizer',
  components: {
    Editor
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
html, body {
  background-color: #737373;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.md-toolbar {
  background-color: #404040;
}
.md-title {
  font-family: 'Press Start 2P', cursive;
  color: #f2f2f2;
}
</style>
