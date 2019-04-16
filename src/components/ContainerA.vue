<template>
  <span>{{storeMessage}}</span>
</template>

<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';

  @Component
  export default class ContainerA extends Vue {
      get storeMessage(): string {
          return this.$store.state.message;
      }
  }
</script>
