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
            @keypress="generateCategoryList"
            @keydown="generateCategoryList"
            @keyup="generateCategoryList"
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
            <b-form-textarea
              :id="category.id"
              v-model="category.smallCategoryInput"
              rows="3"
              max-rows="3"
              :placeholder="`input ${category.name}`"
              @keypress="generateSmallCategoryList(category.id)"
              @keydown="generateSmallCategoryList(category.id)"
              @keyup="generateSmallCategoryList(category.id)"
            >
            </b-form-textarea>
          </b-form-group>
        </b-row>
        <!-- <b-row v-for="category in generateSmallCategories" :key="category">
          <b-form-group
            :id="`group-${category}`"
            :label="category.id"
            :label-for="category.id"
          >
            <b-form-textarea
              :id="category.id"
              v-model="category.smallCategoryInput"
              rows="3"
              max-rows="3"
              :placeholder="`input ${category.id}`"
            >
            </b-form-textarea>
          </b-form-group>
        </b-row> -->
      </b-col>
    </b-row>
    <b-row v-for="category in categoryList" :key="category.id">
      <b-row>
        <b-col>
          {{ category.id }}
        </b-col>
        <b-col>
        </b-col>
        <b-row v-for="smallCategory in category.smallCategoryList" :key="smallCategory.id">
          <p>{{ `${smallCategory.id} : ${smallCategory.level}`  }}</p>
        </b-row>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      categoryInput: '',
      categoryList: [],
      smallCategoryList: []
    }
  // },
  // computed: {
  //   generateSmallCategories() {
  //     const inputList = this.categoryInput.split('\n')
  //       // Ignore blank data.
  //       .filter(v => v != '')
      
  //     this.cateList = inputList.map(v => {
  //       return {
  //         id: v,
  //         smallCategoryInput: '',
  //         smallCategory: [
  //           {
  //             id: '',
  //             level: 0
  //           }
  //         ]
  //       }
  //     })

  //     return inputList
  //   },
  },
  methods: {
  //   generateSmallCategory(id) {
  //     const smallInput = this.cateList.filter(v => v.id = id)[0].smallCategoryInput
  //     this.cateList.filter(v => v.id = id)[0].smallCateList = smallInput.split(`\n`).filter(v => v != '').map(v => {
  //       return {
  //         id: v,
  //         level: 0
  //       }
  //     })
  //   }
    generateCategoryList() {
      this.categoryList = this.categoryInput.split('\n')
        // Ignore blank data.
        .filter(v => v != '').map((v, index) => {
          return {
            id: `id-${index}`,
            name: v,
            smallCategoryInput: '',
            smallCategoryList: []
          }
        })
    },
    generateSmallCategoryList(categoryId) {
      const targetCategory = this.categoryList.filter(v => v.id == categoryId)[0]
      targetCategory.smallCategoryList 
        = targetCategory.smallCategoryInput
          .split('\n')
          .filter(v => v != '')
          .map((v, index) => {
            return {
              id: `small-id-${index}`,
              name: v,
              level: 0,
              category: categoryId
            }
          })
    }
  }
}
</script>