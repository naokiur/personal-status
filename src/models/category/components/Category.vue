<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-group
          id="group-categoryInput"
          label="区分"
          label-for="categoryInput"
        >
          <b-form-textarea
            id="categoryInput"
            v-model="categoryInput"
            rows=6
            max-rows="6"
            placeholder="input category"
          >
          </b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import {Component, Watch, Vue} from 'vue-property-decorator';
  import model from '@/models/category/CategoryList.ts';

  @Component
  export default class Category extends Vue {
    public categoryInput: string = '';

    @Watch('categoryInput')
    public updateCategory() {
      const m = new model(this.categoryInput);
      this.$store.dispatch('updateCategoryList', m);
    }
  }
</script>
