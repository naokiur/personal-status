<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-textarea
          v-model="major"
          rows=6
          max-rows="6"
          placeholder="input 区分"
        >
        </b-form-textarea>
      </b-col>
      <b-col>
        <b-row v-for="majorData in dataList" :key="majorData">
          <b-form-group
            :id="`group-${majorData}`"
            :label="majorData"
            :label-for="majorData"
          >
            <b-form-textarea
              :id="majorData"
              rows="3"
              max-rows="3"
              :placeholder="`input ${majorData}`"
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
      major: '',
      dataList: ['a', 'b']
    }
  }
}
</script>