<template>
  <b-container>
    <b-row>
      <Category />
    </b-row>
  </b-container>
</template>

<script>
  import Category from '@/models/category/components/Category.vue';
  export default {
    data() {
      return {
        categoryInput: '',
        smallCategoryList: []
      }
    },
    computed: {
      categoryList() {
        return this.categoryInput.split('\n')
          // Ignore blank data.
          .filter(v => v != '').map((v, index) => {
            return {
              id: `id-${index}`,
              name: v,
            }
        })
      }
    },
    components: {
      Category,
    }
  }
</script>