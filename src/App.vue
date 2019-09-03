<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Main</router-link>|
      <router-link to="/repository">Repository</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  min-height: 100%;
}

body {
  background: #42b983;
  color: #fff;
}

button {
  cursor: pointer;
}
</style>
