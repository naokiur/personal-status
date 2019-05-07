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
      <b-col>
        <b-row v-for="category in categoryList" :key="category.id">
          <b-form-group
            :id="`group-${category.id}`"
            :label="category.name"
            :label-for="category.id"
          >
            <SmallCategory :category="category"></SmallCategory>
          </b-form-group>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SmallCategory from '@/components/SmallCategory.vue'

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
            // smallCategoryInput: '',
            // smallCategoryList: [1, 2, 3]
          }
      })
    }
  },
  components: {
    SmallCategory
  }
  // methods: {
  // //   generateSmallCategory(id) {
  // //     const smallInput = this.cateList.filter(v => v.id = id)[0].smallCategoryInput
  // //     this.cateList.filter(v => v.id = id)[0].smallCateList = smallInput.split(`\n`).filter(v => v != '').map(v => {
  // //       return {
  // //         id: v,
  // //         level: 0
  // //       }
  // //     })
  // //   }
  //   generateCategoryList() {
  //     this.categoryList = this.categoryInput.split('\n')
  //       // Ignore blank data.
  //       .filter(v => v != '').map((v, index) => {
  //         return {
  //           id: `id-${index}`,
  //           name: v,
  //           smallCategoryInput: '',
  //           smallCategoryList: []
  //         }
  //       })
  //   },
  //   generateSmallCategoryList(categoryId) {
  //     const targetCategory = this.categoryList.filter(v => v.id == categoryId)[0]
  //     targetCategory.smallCategoryList 
  //       = targetCategory.smallCategoryInput
  //         .split('\n')
  //         .filter(v => v != '')
  //         .map((v, index) => {
  //           return {
  //             id: `small-id-${index}`,
  //             name: v,
  //             level: 0,
  //             category: categoryId
  //           }
  //         })
  //   }
  // }
}
</script>