<template>
  <v-container class="mt-7">
    <v-textarea
      v-model="translatedText"
      outlined
    >
      <template v-slot:label>
        <div>
          Tłumaczenie
        </div>
      </template>
    </v-textarea>
  </v-container>
</template>

<script>
export default {
  name: 'InputField',
  props: ['translatedText'],
  data: () => ({
  }),
};
</script>
