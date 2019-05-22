<template>
  <div class="home">
    <b-card no-body>
        <b-tabs card>
          <b-tab title="ステータス">
            <Info></Info>
          </b-tab>
          <b-tab title="入力">
            <!-- <StatusInput></StatusInput> -->
            <Category />
          </b-tab>
        </b-tabs>
    </b-card>
  </div>
</template>

<style scoped>
  .home {
    margin: 1%;
  }
</style>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Info from '@/components/Info.vue';
  // import StatusInput from '@/components/StatusInput.vue';
  import Category from '@/models/category/components/Category.vue';

  @Component({
    components: {
      Info,
      // StatusInput,
      Category,
    },
  })
  export default class Home extends Vue {
  }
</script>
