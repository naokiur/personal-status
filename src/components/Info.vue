<template>
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
</template>

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
  export default class Info extends Vue {}
</script>