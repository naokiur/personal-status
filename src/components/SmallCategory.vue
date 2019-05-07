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
        smallCategoryInput: ''
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
      const contents = newCategoryInfo.map(v => {
        const content = v.split('\t').filter(v => v != '')
  
        if (content.length === 2) {
          return { 
            id: content[0],
            level: content[1]
          }
        }
      }).filter(v => v != '')
      this.$store.dispatch('updateCategoryInfo', {id: this.category.id, name: this.category.name, contents: contents})
    } 
  }
}
</script>
