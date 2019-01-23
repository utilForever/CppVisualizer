
<template>
  <div class="content">
    <md-layout md-gutter>
      <md-layout class="width:50%">
        <md-card>
          <md-card-content>
            <div class="codemirror">
              <codemirror v-model="code" :options="cmOption"></codemirror>
            </div>
            <button id="visualize" @click="compile">visualize</button>
          </md-card-content>
        </md-card>
      </md-layout>
      <md-layout>
        <md-card>
          <md-card-content>
            <div class="result">
              <p>결과는 이곳에 표시됩니다.</p>
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
#visualize {
  font-family: 'Press Start 2P', cursive;
  font-size: 15px;
  height: 50px;
  width: 100%;
  color: #f2f2f2;
  background-color: #ec008c;
  border-width: 0;
}
#visualize:hover {
  color: #ffe2e2;
  background-color: #e271b5;
}
div.result {
  font-size: 18px;
  color: #f2f2f2;
  padding: 15px;
}
.md-card {
  background-color: #404040;
  height: 600px;
  width: 48%;
  /* todo: layout with devices with small screen width then 520px */
  margin: 5px;
  display: inline-block;
  vertical-align: top;
}
.md-card-content {
  padding: 0 !important;
  margin-bottom: 0 !important;
}
.CodeMirror {
  height: 550px !important;
  font-size: 20px;
}
</style>

<script>
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/theme/monokai.css'
  import'codemirror/addon/selection/active-line.js'
  
  export default {
    data() {
const code =
`// mission #1
int main(){
  int a = 10;
  int b = 20;
  int c = a + b;
  return 0;
}
`
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
    },
    methods: {
      compile: function () {
        var btn = document.getElementById('visualize')
        btn.disabled = true;
        btn.style.color = '#737373'
        btn.style.backgroundColor = 'lightgray'
        btn.innerText = 'Running...'
      }
    }
  }
</script>
