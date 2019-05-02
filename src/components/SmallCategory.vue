<template>
  <div>
    <b-form-textarea
        :id="category.id"
        v-model="smallCategoryInput"
        rows="3"
        max-rows="3"
        :placeholder="`input ${category.name}`"
    >
    </b-form-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
        smallCategoryInput: '',
        smallCategoryList: []
      }
  },
  props: {
    category: {
      type: Object,
      default() {
        return {
          id: '',
          name: ''
        }
      }
    }
  },
  watch: {
    smallCategoryInput(newInput, oldInput) {
      const newCategoryInfo = newInput.split('\n').filter(v => v != '')
      this.smallCategoryList = newCategoryInfo
      this.$store.dispatch('updateCategoryInfo', {id: this.category.id, val: newCategoryInfo})
      console.log(this.$store.state.categoryInfo)
    } 
  }
  // computed: {
  //   smallCategoryInput: {
  //     // get() {
  //     //   return this.smallCategoryInput
  //     // },
  //     set(newInput) {
  //       this.smallCategoryInput = newInput
  //       this.smallCategoryList = newInput.split('\n').filter(v => v != '')
  //     }
  //   }
  // }
}
</script>
