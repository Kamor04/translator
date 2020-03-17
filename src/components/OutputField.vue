<template>
  <v-container>
    <v-textarea
      v-model="translatedText"
      outlined
    />
  </v-container>
</template>

<script>
export default {
  name: 'OutputField',
  props: ['translatedText'],
  data: () => ({
  }),
};
</script>
