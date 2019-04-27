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
        <b-row v-for="category in generateCategories" :key="category.id">
          <b-form-group
            :id="`group-${category.id}`"
            :label="category.id"
            :label-for="category.id"
          >
            <b-form-textarea
              :id="category.id"
              v-model="category.smallCategoryInput"
              rows="3"
              max-rows="3"
              :placeholder="`input ${category.id}`"
              @change="generateSmallCategory(category.id)"
            >
            </b-form-textarea>
          </b-form-group>
        </b-row>
      </b-col>
    </b-row>
    <b-row v-for="category in cateList" :key="category.id">
      <b-row>
        <b-col>
          {{ category.id }}
        </b-col>
        <b-col>
        </b-col>
        <b-row v-for="smallCate in category.smallCateList" :key="smallCate.id">
          {{ `${smallCate.id} : ${smallCate.level}`  }}
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
      cateList: [],
      // smallCateList: [
      //   {id: '', level: ''}
      // ]
    }
  },
  computed: {
    generateCategories() {
      const inputList = this.categoryInput.split('\n')
        // Ignore blank data.
        .filter(v => v != '')
      
      this.cateList = inputList.map(v => {
        return {
          id: v,
          smallCategoryInput: '',
          smallCategory: [
            {
              id: '',
              level: 0
            }
          ]
        }
      })

      return this.cateList
    },
  },
  methods: {
    generateSmallCategory(id) {
      const smallInput = this.cateList.filter(v => v.id = id)[0].smallCategoryInput
      this.cateList.filter(v => v.id = id)[0].smallCateList = smallInput.split(`\n`).filter(v => v != '').map(v => {
        return {
          id: v,
          level: 0
        }
      })
    }
  }
}
</script>