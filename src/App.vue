<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex">
        <h2 id="title">Translator</h2>
      </div>
    </v-app-bar>
    <v-content>
      <v-row class="ml-4 mt-2">
        <v-btn-toggle
          v-model="language"
          tile
          color="deep-purple accent-3"
          group
        >
          <v-btn value="pl">Polish</v-btn>
          <v-btn value="en">English</v-btn>
          <v-btn value="de">German</v-btn>
          <v-btn value="ru">Russian</v-btn>
        </v-btn-toggle>
      </v-row>
      <div class="d-flex mx-6">
        <input-field v-on:emitTextToTranslate="textToTranslate"></input-field>
        <output-field :translatedText="translatedText"></output-field>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import InputField from './components/InputField.vue'
import OutputField from './components/OutputField.vue'

export default {
  name: 'App',
  components: {
    InputField,
    OutputField,
  },
  data () {
    return {
      translatedText: '',
      language: 'en'
    }
  },
  methods: {
    textToTranslate(text) {
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200315T110837Z.602d8c8310f62b68.29ca80e2ab938f171ce05cae11db76691b4c57a4&lang=' + this.language + '&text=' + text).then((res) => {
        this.translatedText = (res.body['text'][0])
      })
    }
  }
}
</script>
