<template>
  <section>
    <div v-for="item in storeStatus" :key="item.id">
      <div v-for="midiumItem in item.contents" :key="midiumItem.id">
        <div>
          {{ midiumItem.name }}
        </div>
        <div v-for="minorItem in midiumItem.contents" :key="minorItem.id">
          <div>
            {{ minorItem.id }}: {{ minorItem.content }}
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <b-container>
    <b-row v-for="item in storeStatus" :key="item.id">
      <b-row v-for="midiumItem in item.contents" :key="midiumItem.id">
        <b-row v-for="minorItem in midiumItem.contents" :key="minorItem.id">
          <b-row>
            {{ minorItem.id }}: {{ minorItem.content }}
          </b-row>
        </b-row>
      </b-row>
    </b-row>
  </b-container> -->
</template>

<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Status extends Vue {
      get storeMessage(): string {
        return this.$store.state.message;
      }

      get storeStatus() {
        return this.$store.state.status;
      }

      public updateMessage() {
        this.$store.dispatch('updateMessage');
      }
  }
</script>
