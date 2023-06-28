<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-protoapp-white-color">
    <Navigation />
    <About />
    <SectionFooter />
    <Footer />
    <RouterView />
    
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import About from './components/About.vue';
import SectionFooter from './components/SectionFooter.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navigation,
    About,
    SectionFooter,
    Footer
  }
};
</script>

<style lang="scss" scoped>

</style>