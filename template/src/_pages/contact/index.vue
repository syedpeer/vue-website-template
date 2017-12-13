<template>
  <main-layout>
    <div @click="sendIt">
      contact
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