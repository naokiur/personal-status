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
        <b-row v-for="head in this.headCategoryList.getValues()" :key="head.id">
          <CategoryInput :head="head.name" />
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
  import {Component, Watch, Vue} from 'vue-property-decorator';
  import CategoryInput from '@/models/category/components/CategoryInput.vue';
  import modelCategory from '@/models/category/CategoryList.ts';
  import modelHeadCategory from '@/models/headCategory/HeadCategoryList.ts';
  import modelHead from '@/models/headCategory/HeadCategory';

  @Component({
    components: {
        CategoryInput,
      },
  })

  export default class Category extends Vue {
    public headCategoryInput: string = '';

    public get headCategoryList(): modelHeadCategory {
      return new modelHeadCategory(this.headCategoryInput);
    }
  }
</script>
