<template>
  <keyboard
      :options="keyboardOption"
      class="ui-keyboard-case"
      v-model="textToTranslate"
    />
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue-virtual-keyboard!',
      props: ['textToTranslate'],
      keyboardOption: {
        usePreview: false,
        stickyShift: false,
        autoAccept: true,
        language: 'zh',
        display: {
          accept: 'submit',
          bksp: 'delete'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ui-keyboard-case {
    font-size: 40px;
    text-align: center;
    border: 1px solid #ffe3e2;
    padding: 4px;
    width: 38%;
    height: auto;
    margin-right: 5%;
  }
</style>
