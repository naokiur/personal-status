<template>
  <section>
    <!-- <b-card no-body>
      <b-tabs card>
        <b-tab  v-for="statusMinor in status" :key="statusMinor.id" :title="statusMinor.name">
          <Chart :label="statusMinor.contents.map(content => content.id)" :data="statusMinor.contents.map(content => content.level)"></Chart>
        </b-tab>
      </b-tabs>
    </b-card> -->
    <b-card no-body>
      <b-tabs card>
        <!-- <b-tab  v-for="(key, category) in categoryInfo" :key="key"> -->
        <b-tab v-for="category in categoryInfo" :key="category.id" :title="category.name">
          <!-- {{ category }} -->
          <!-- {{ key }} -->
          <Chart :label="category.contents.map(content => content.id)" :data="category.contents.map(content => content.level)"></Chart>
        </b-tab>
      </b-tabs>
    </b-card>
    <!-- <b-card no-body>
      <b-tabs card> -->
        <!-- <b-tab  v-for="statusMinor in categoryInfo" :key="statusMinor.id" :title="statusMinor.name"> -->
        <!-- <b-tab  v-for="statusMinor in categoryInfo" :key="statusMinor.id" :title="statusMinor.name"> -->
          <!-- <Chart :label="statusMinor.contents.map(content => content.id)" :data="statusMinor.contents.map(content => content.level)"></Chart> -->
          <!-- {{ statusMinor }}
        </b-tab>
      </b-tabs>
    </b-card> -->
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
    <!-- <Chart></Chart> -->
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
      // public categoryInfoStatus = this.$store.state.categoryInfoStatus;
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
