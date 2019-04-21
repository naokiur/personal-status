<template>
  <b-container>
    <b-row align-h="center" align-v="center">
      <b-card
          :title="storeMessage"
          img-src="https://picsum.photos/600/600/?random"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
          </b-card-text>
      </b-card>
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
