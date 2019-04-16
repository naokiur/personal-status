<template>
  <span @click="updateMessage()">{{storeMessage}}</span>
</template>

<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';

  @Component
  export default class ContainerB extends Vue {
      get storeMessage(): string {
          return this.$store.state.message;
      }

      public updateMessage() {
          this.$store.dispatch('updateMessage');
      }
  }
</script>
