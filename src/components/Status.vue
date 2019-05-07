<template>
  <section>
    <b-card no-body>
      <b-tabs card>
        <b-tab v-for="category in categoryInfo" :key="category.id" :title="category.name">
          <Chart :label="category.contents.map(content => content.id)" :data="category.contents.map(content => content.level)"></Chart>
        </b-tab>
      </b-tabs>
    </b-card>
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
      public tabInfoList = ['aaa', 'bbb', 'ccc'];

      public status = this.$store.state.status;
      public categoryInfo = this.$store.state.categoryInfo;

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
