
<template>
  <div class="content">
    <md-layout md-gutter>
      <md-layout class="width:50%">
        <md-card>
          <md-card-content>
            <div class="codemirror">
              <codemirror v-model="code" :options="cmOption"></codemirror>
            </div>
            <button class="visualize">visualize</button>
          </md-card-content>
        </md-card>
      </md-layout>
      <md-layout>
        <md-card>
          <md-card-content>
            <div class="result">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </md-card-content>
        </md-card>
      </md-layout>
    </md-layout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
div.content {
  padding: 10px;
}
div.result {
  padding: 15px;
}
button.visualize {
  font-family: 'Press Start 2P', cursive;
  font-size: 15px;
  height: 50px;
  width: 100%;
}
.md-card {
  height: 600px;
  width: 45%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-card-content {
  padding: 0 !important;
  margin-bottom: 0 !important;
}
.CodeMirror {
  height: 550px !important;
}
</style>

<script>
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/theme/monokai.css'
  import'codemirror/addon/selection/active-line.js'
  
  export default {
    data() {
const code =
`int main(){
  int a = 10;
  int b = 20;
  int c = a + b;
  return 0;
}`
      return {
        code,
        cmOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/x-c',
          theme: 'monokai'
        }
      }
    }
  }
</script>
