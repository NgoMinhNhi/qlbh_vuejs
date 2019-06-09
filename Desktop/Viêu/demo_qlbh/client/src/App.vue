<template>
  <div id="app">
    <header-page />
    <div class="container">
        <div class="row">
        <div class="col-md-3">
          <left-side-bar />
        </div>
        <div class="col-md-9 padding-right">
          <router-view/>
        </div>
      </div>
    </div>
    <footer-page />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import LeftSideBar from './components/LeftSideBar'
export default {
  name: 'App',
  components:{
    headerPage: Header,
    footerPage: Footer,
    leftSideBar: LeftSideBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
