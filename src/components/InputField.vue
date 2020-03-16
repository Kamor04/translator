<template>
  <v-container class="mt-7">
    <v-row class="text-center">
      <v-textarea
        v-model="textToTranslate"
        outlined
        :rules="rules"
        counter="100"
      />
    </v-row>
      <div class="text-right">
        <v-btn @click="submitText">TRANSLATE</v-btn>
      </div>
  </v-container>
</template>

<script>
export default {
  name: 'InputField',
  data: () => ({
    rules: [(v) => v.length <= 100 || 'Max 100 characters'],
    textToTranslate: '',
  }),
  methods: {
    submitText() {
      this.$emit('textToTranslate', this.textToTranslate);
    },
  },
};
</script>
