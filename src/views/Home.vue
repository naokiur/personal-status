<template>
  <div class="home">
    <b-card no-body>
        <b-tabs card>
          <b-tab title="ステータス">
            <Info></Info>
          </b-tab>
          <b-tab title="入力">
            入力
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

  @Component({
    components: {
      Info,
    },
  })
  export default class Home extends Vue {}
</script>
