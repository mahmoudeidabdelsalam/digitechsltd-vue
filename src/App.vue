<template>
  <div id="app">
    <Header></Header>
    <BlockHero></BlockHero>
    <BlockAbout></BlockAbout>
    <BlockServices></BlockServices>
    <BlockClients></BlockClients>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import BlockHero from './components/BlockHero.vue'
import BlockAbout from './components/BlockAbout.vue'
import BlockServices from './components/BlockServices.vue'
import BlockClients from './components/BlockClients.vue'

export default {
  name: 'App',
  components: {
    Header,
    BlockHero,
    BlockAbout,
    BlockServices,
    BlockClients
  }
}
</script>

<style lang="css">
@import 'css/app.css';
#app {
  font-family: 'Dubai Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
