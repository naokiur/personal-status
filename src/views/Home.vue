<template>
  <div class="home">
    <ContainerA></ContainerA>
    <ContainerB></ContainerB>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ContainerA from '@/components/ContainerA.vue';
  import ContainerB from '@/components/ContainerB.vue';

  @Component({
    components: {
      ContainerA,
      ContainerB,
    },
  })
  export default class Home extends Vue {}
</script>
