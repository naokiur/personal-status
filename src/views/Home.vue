<template>
  <div class="home">
    <b-card no-body>
        <b-tabs card>
          <b-tab title="ステータス">
            <b-container>
              <b-row align-v="center">
                <b-col>
                  <Avatar></Avatar>
                </b-col>
                <b-col>
                  <Status></Status>
                </b-col>
              </b-row>
            </b-container>
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
  import Avatar from '@/components/Avatar.vue';
  import Status from '@/components/Status.vue';

  @Component({
    components: {
      Avatar,
      Status,
    },
  })
  export default class Home extends Vue {}
</script>
