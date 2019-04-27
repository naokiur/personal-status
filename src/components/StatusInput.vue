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
        <b-row v-for="category in generateCategories" :key="category">
          <b-form-group
            :id="`group-${category}`"
            :label="category"
            :label-for="category"
          >
            <b-form-textarea
              :id="category"
              rows="3"
              max-rows="3"
              :placeholder="`input ${category}`"
            >
            </b-form-textarea>
          </b-form-group>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      categoryInput: ''
    }
  },
  computed: {
    generateCategories() {
      const cateList = this.categoryInput.split('\n')
      return cateList.filter(v => v != '')
    }
  }
}
</script>