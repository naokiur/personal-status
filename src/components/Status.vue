<template>
  <section>
    <b-tabs>
      <b-tab title="aaa">aaa</b-tab>
      <b-tab title="bbb">bbb</b-tab>
      <b-tab title="ccc">ccc</b-tab>
      <b-tab title="ddd">ddd</b-tab>
    </b-tabs>
    <!-- <div v-for="item in storeStatus" :key="item.id">
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
    </div> -->
    <!-- <b-container v-for="item in storeStatus" :key="item.id">
      <b-row v-for="midiumItem in item.contents" :key="midiumItem.id">
        <b-row v-for="minorItem in midiumItem.contents" :key="minorItem.id">
          <b-row>
            {{ minorItem.id }}: {{ minorItem.content }}
          </b-row>
        </b-row>
      </b-row>
    </b-container> -->
    <Chart></Chart>
  </section>
</template>

<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';
  import Chart from '@/components/Chart.vue';

  @Component({
    components: {
      Chart,
      },
  })
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
