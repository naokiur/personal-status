<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <Avatar></Avatar>
        </b-col>
        <b-col>
          <Status></Status>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
  .home {
    margin: 1%
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
