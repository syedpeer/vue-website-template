
<template>
  <div class="vw-header-main-layout">
    <my-header></my-header>
    <div class="vw-content">
      <slot></slot>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');

body {
  font-family: 'Titillium Web';
  color: #4c5054;
  font-size: 18px;
  font-weight: 100px;
  padding: 0;
  margin: 0;
}

.vw-header-main-layout {
  & .vw-content {
    margin-top: 70px;
    padding: 15px;
  }
}
</style>