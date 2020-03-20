<template>
  <v-container>
    <v-row class="text-center">
      <v-textarea
        v-model.lazy="textToTranslate"
        type="text"
        @keyup.exact="submitText($event)"
        outlined
        :rules="rules"
        counter="100"
      />
    </v-row>
      <virtual-keyboard :textToTranslate="textToTranslate"/>
  </v-container>
</template>

<script>
import VirtualKeyboard from './VirtualKeyboard.vue'
import debounce from 'lodash.debounce'
export default {
  name: 'InputField',
  components: {
    VirtualKeyboard
  },
  data: () => ({
    rules: [(v) => v.length <= 100 || 'Max 100 characters'],
    textToTranslate: '',
    language: 'en'
  }),
  created () {
    this.submitText()
  },
  methods: {
    submitText: debounce(function() {
      this.$emit('emitTextToTranslate', this.textToTranslate)
    }, 500)
  }
}
</script>
