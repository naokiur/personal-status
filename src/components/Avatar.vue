<template>
  <b-container>
    <b-row>
      <span @click="updateMessage()">{{storeMessage}}</span>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Avatar extends Vue {
      get storeMessage(): string {
          return this.$store.state.message;
      }
  }
</script>
