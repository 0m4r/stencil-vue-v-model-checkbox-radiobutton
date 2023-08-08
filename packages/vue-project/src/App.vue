<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref("");
const selectValue = ref("");
const checkboxValue = ref([]);
const radioValue = ref('');

const log = (e: any) => console.log(e);
</script>

<template>
  <h2>INPUT</h2>
  <h3>custom component</h3>
  <my-input v-model="inputValue" @myChange="log" />

  <h3>HTML native component</h3>
  <input type="text" v-model="inputValue" />
  <p>inputValue <strong>{{ inputValue }}</strong></p>

  <hr />

  <h2>SELECT</h2>
  <h3>custom component</h3>
  <my-select v-model="selectValue" @myChange="log" />

  <h3>HTML native component</h3>
  <select v-model="selectValue" @change="log">
    <option value="">NONE</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  <p>selectValue <strong>{{ selectValue }}</strong></p>

  <hr />
  <h2>RADIO</h2>
  <h3>custom component</h3>
  <my-radio v-model="radioValue" id="my-radio1" @myChange="log" name="radio"/>
  <my-radio v-model="radioValue" id="my-radio2" @myChange="log" name="radio"/>
  <!--
    
    <my-radio v-model="radioValue" value="my-radio3" id="my-radio3" value="my-radio3"/>
    
    [plugin:vite:vue] Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.
    /Users/omaadoba/workspace/playground/stencil-playground/packages/vue-project/src/App.vue:40:78
    38 |    <h2>RADIO</h2>
    39 |    <h3>custom component</h3>
    40 |    <my-radio v-model="radioValue" id="my-radio1" @myChange="log" name="radio" value="my-radio1"/>
    -->

  <h3>HTML native component</h3>
  <input
    type="radio"
    v-model="radioValue"
    value="radio1"
    id="radio1"
    name="radio"
    @change="log"
  />
  <input
    type="radio"
    v-model="radioValue"
    value="radio2"
    id="radio2"
    name="radio"
    @change="log"
  />
  <input
    type="radio"
    v-model="radioValue"
    value="radio3"
    id="radio3"
    name="radio"
    @change="log"
  />
  
  <p>radioValue <strong>{{ radioValue }}</strong></p>

  <h2>CHECKBOX</h2>
  <h3>custom component</h3>
  <my-checkbox v-model="checkboxValue" id="my-checkbox1" @myChange="log" />
  <my-checkbox v-model="checkboxValue" id="my-checkbox2" @myChange="log" />
  <!--
    
    <my-checkbox v-model="checkboxValue" value="my-checkbox3" id="my-checkbox3"/>
    
    this triggers an error:
      [plugin:vite:vue] Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.
      /playground/stencil-playground/packages/vue-project/src/App.vue:23:42
      21 |      <my-checkbox v-model="checkboxValue" id="my-checkbox2"/>
      22 |      
      23 |      <my-checkbox v-model="checkboxValue" value="my-checkbox3" id="my-checkbox3"/>
         |                                            ^
      24 |      
      25 |
    -->  

  <h3>HTML native component</h3>
  <input
    type="checkbox"
    v-model="checkboxValue"
    value="checkbox1"
    id="checkbox1"
    @change="log"
  />
  <input
    type="checkbox"
    v-model="checkboxValue"
    value="checkbox2"
    id="checkbox2"
    @change="log"
  />
  <input
    type="checkbox"
    v-model="checkboxValue"
    value="checkbox3"
    id="checkbox3"
    @change="log"
  />
  
  <p>checkboxValue: <strong>{{ checkboxValue }}</strong></p>
</template>
