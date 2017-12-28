<template>
  <main-layout>
    <div @click="sendIt">
      This project is Open Source and maintained by <a href="https://www.code-forefront.com/">Code Forefront</a>, click to get in touch!
    </div>
  </main-layout>
</template>
<script>
  export default {
    methods: {
      sendIt () {
        console.log('this sends a message')
      }
    }
  }
</script> 