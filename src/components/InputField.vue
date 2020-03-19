<template>
  <v-container>
    <v-row class="text-center">
      <v-textarea
        v-model.lazy="textToTranslate"
        outlined
        :rules="rules"
        counter="100"
      >
      </v-textarea>
    </v-row>
      <!-- <div class="text-right">
        <v-btn @click="submitText">TRANSLATE</v-btn>
      </div> -->
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
    language: 'en',
  }),
  mounted () {
    this.submitText()
  },
  methods: {
    submitText: debounce(function() {
      this.$emit('emitTextToTranslate', this.textToTranslate)
    }, 500)
  }
}
</script>
