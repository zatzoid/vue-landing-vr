<template>
  <div class="app">

    <HeaderAll />

    <router-view v-slot="{ Component }">
      <Transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>

    <SubscribeFooter />
    <FooterAll />
  </div>
</template>

<script>
import '@/utils/fonts/fonts.css';
import HeaderAll from '@/components/sections//HeaderAll.vue';
import FooterAll from './components/sections/FooterAll.vue';
import SubscribeFooter from './components/sections/SubscribeFooter.vue';



export default {
  name: 'App',
  data() { return { transitionName: null } },
  watch: {
    $route(to) {
      const newRoute = to.path.split('/')[1];
      this.transitionName = newRoute !== '' ? newRoute : 'main'
    }
  },
  components: {
    HeaderAll,
    FooterAll,
    SubscribeFooter
  }
}
</script>

<style>
body {
  --col-pink: #CA6AEB;
  --col-blue: #19B5F1;
  --col-green: #00C566;
  --col-yelow: #FACC15;
  --col-red: #FF4747;
  --col-black: black;
  --col-black-light: #252532;
  --col-black-light-05: #2525327a;
  --col-grey-dark: #3b3b46;
  --col-grey: #B0B0B2;
  --col-white: white;
  --col-clear: rgba(0, 0, 0, 0);
  --max-width: 1200px;
  font-family: 'Chakra Petch', sans-serif;
  background-color: #18181B;
  color: var(--col-white);



}

.app {
  position: relative;
  overflow-x: hidden;
}

.section-heading {
  font-size: clamp(24px, 5vw, 48px);
  font-weight: 600;
  line-height: clamp(24px, 5vw, 58px);
  letter-spacing: -0.005em;
}

.section-sub {
  color: var(--col-grey);
  font-size: clamp(8px, 3.5vw, 16px);
  line-height: clamp(15px, 3vw, 28px);
  font-weight: 300;
}

.default-height {
  min-height: 600px !important;
}
section{
  transition: min-height .5s;
  min-height: auto;
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;

}

.main-enter-from {
  transform: translateX(-100%);
}

.service-enter-from,
.about-enter-from {
  transform: translateX(100%);
}

.main-enter-active,
.about-enter-active,
.service-enter-active {
  transition: all .5s;
}


.main-enter-to,
.about-enter-to,
.service-enter-to {
  transform: translateX(0);

}

.main-leave-from,
.service-leave-from,
.about-leave-from  {
  transform: translateX(0);
}


.main-leave-active,
.service-leave-active,
.about-leave-active {
  transition: all .5s;
}


.main-leave-to {
  transform: translateX(100%);

}
.main-leave-to,
.service-leave-to,
.about-leave-to {
  transform: translateX(-100%);

}

</style>
