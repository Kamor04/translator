<template>
  <v-container>
    <v-row class="text-center">
      <v-textarea
        v-model="textToTranslate"
        outlined
        :rules="rules"
        counter="100"
      >
      </v-textarea>
    </v-row>
      <div class="text-right">
        <v-btn @click="submitText">TRANSLATE</v-btn>
      </div>
      <virtual-keyboard :textToTranslate="textToTranslate"/>
  </v-container>
</template>

<script>
import VirtualKeyboard from './VirtualKeyboard.vue'
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
  methods: {
    submitText() {
      this.$emit('emitTextToTranslate', this.textToTranslate)
    }
  }
}
</script>
