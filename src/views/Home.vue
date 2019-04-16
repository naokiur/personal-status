<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <ContainerA></ContainerA>
        </b-col>
        <b-col>
          <ContainerB></ContainerB>
        </b-col>
      </b-row>
    </b-container>
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
