<template>
  <div class="home">
    <Container></Container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Container from '@/components/Container.vue';

  @Component({
    components: {
      Container,
    },
  })
  export default class Home extends Vue {}
</script>
