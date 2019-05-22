<template>
  <b-form-textarea
    id="inputData"
    v-model="inputData"
    rows=6
    max-rows="6"
    :placeholder="head"
  />
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';


  @Component
  export default class CategoryInput extends Vue {
    @Prop({ default: '' })
    head: string;

    private inputData: string = '';
  }
</script>
