<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex">
        Translator
      </div>
    </v-app-bar>

    <v-content>
      <div class="d-flex mx-6">
        <input-field v-on:textToTranslate="textToTranslate"></input-field>
        <output-field></output-field>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import InputField from './components/InputField.vue';
import OutputField from './components/OutputField.vue';

export default {
  name: 'App',

  components: {
    InputField,
    OutputField,
  },

  data: () => ({
    textToTranslate: null
  }),
  methods: {
    textToTranslated() {
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200315T110837Z.602d8c8310f62b68.29ca80e2ab938f171ce05cae11db76691b4c57a4&lang=eng&text=' + this.textToTranslate).then((res) => {
        console.log(res.body['textToTranslate'][0])
      })
    }
    // textToTranslate(textToTranslate) {
    //   console.log(textToTranslate);
    //},
  }
}
</script>
