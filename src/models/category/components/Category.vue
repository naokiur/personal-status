<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-textarea 
          id="headCategoryInput"
          v-model="headCategoryInput"
          rows=6
          max-rows="6"
          placeholder="input Head Category"
        />
      </b-col>
      <b-col>
        <b-row>
          aaaas
          {{ this.headCategoryList }}
        </b-row>
      </b-col>
      <b-col>
        <b-form-textarea
          id="categoryInput"
          v-model="categoryInput"
          rows=6
          max-rows="6"
          placeholder="input category"
        >
        </b-form-textarea>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import {Component, Watch, Vue} from 'vue-property-decorator';
  import modelCategory from '@/models/category/CategoryList.ts';
  import modelHeadCategory from '@/models/headCategory/HeadCategoryList.ts';
  import modelHead from '@/models/headCategory/HeadCategory';

  @Component
  export default class Category extends Vue {
    public categoryInput: string = '';
    public headCategoryInput: string = '';
    public headCategoryList: modelHeadCategory;

    // public getHeadCategoryList(): modelHead[] {
    //   return this.$store.state.HeadCategoryList;
    // }

    @Watch('headCategoryInput')
    public updateHeadCategory() {
      const m = new modelHeadCategory(this.headCategoryInput);
      this.headCategoryList = m;
    }

    @Watch('categoryInput')
    public updateCategory() {
      const m = new modelCategory(this.categoryInput);
      this.$store.dispatch('updateCategoryList', m);
    }
  }
</script>
