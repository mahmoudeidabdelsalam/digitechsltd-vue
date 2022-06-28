<template>
  <div id="app">
    <Header></Header>
    <BlockHero></BlockHero>
    <BlockAbout></BlockAbout>
    <BlockServices></BlockServices>
    <BlockClients></BlockClients>
    <BlockPortfolio></BlockPortfolio>
    <BlockTechs></BlockTechs>
    <BlockTeam></BlockTeam>
    <BlockContact></BlockContact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import BlockHero from './components/BlockHero.vue'
import BlockAbout from './components/BlockAbout.vue'
import BlockServices from './components/BlockServices.vue'
import BlockClients from './components/BlockClients.vue'
import BlockPortfolio from './components/BlockPortfolio.vue'
import BlockTechs from './components/BlockTechs.vue'
import BlockTeam from './components/BlockTeam.vue'
import Footer from './components/Footer.vue'
import BlockContact from './components/BlockContact.vue'

export default {
  name: 'App',
  components: {
    Header,
    BlockHero,
    BlockAbout,
    BlockServices,
    BlockClients,
    BlockPortfolio,
    BlockTechs,
    BlockTeam,
    BlockContact,
    Footer
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
