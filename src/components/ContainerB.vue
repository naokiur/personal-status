<template>
    <b-container>
        <b-row>
            <b-col><span @click="updateMessage()">{{storeMessage}}</span></b-col>
        </b-row>
    </b-container>
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
