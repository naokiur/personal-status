<template>
    <b-container>
        <b-row>
            <b-col><span>{{storeMessage}}</span></b-col>
        </b-row>
    </b-container>
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
