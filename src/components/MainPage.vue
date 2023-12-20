<template>
    <div class="main-page-bg">
        <div class="main-page">
            <HeaderMain />
            <WhyChois :currentPos="currentPos" />
            <AboutUs :currentPos="currentPos" />
            <OurService :currentPos="currentPos" />
            <WhyChoisMain :currentPos="currentPos" />
            <OurClients :currentPos="currentPos" />
            <OurPricing :currentPos="currentPos" />
            <OurArtilces :currentPos="currentPos" />

        </div>
    </div>
</template>

<script>
import HeaderMain from './MainPage/HeaderMain.vue'
import OurArtilces from './MainPage/OurArtilces.vue';
import WhyChoisMain from './MainPage/WhyChoisMain.vue';
import OurClients from './sections/OurClients.vue';
import OurPricing from './sections/OurPricing.vue';
import OurService from './sections/OurService.vue';
import WhyChois from './sections/WhyChois.vue';
import AboutUs from './MainPage/AboutUs.vue';
export default {
    name: 'MainPage',
    data() {
        return { currentPos: 0 }
    },
    methods: {
        checkPos() {
            this.currentPos = window.scrollY
        },
    },
    mounted() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        window.addEventListener('scroll', () => { this.checkPos() })
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.checkPos)
    },
    components: {
        HeaderMain,
        WhyChois,
        OurService,
        WhyChoisMain,
        OurClients,
        OurPricing,
        OurArtilces,
        AboutUs
    }
}
</script>
<style  >
.main-page {
    max-width: var(--max-width);
    margin: auto;
    padding: 0 15px 0;
    box-sizing: border-box;
    z-index: 1;

}

.main-page-bg {
    position: relative;
    overflow: hidden;
}

.main-page-bg::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    background-image: url(@/assets/bg/bg2.png);
    background-position: top right;
    background-size: contain;
    background-repeat: no-repeat;
    width: 900px;
    height: 700px;
    z-index: -1;
}

.main-page-bg::before {
    position: absolute;
    top: 30vh;
    left: 0;
    content: '';
    background-image: url(@/assets/bg/bg1.png);
    background-position: top right;
    background-size: contain;
    background-repeat: no-repeat;
    width: 900px;
    height: 700px;
    z-index: -1;
}

.showBlock1-enter-from,
.showBlock2-enter-from {
    transform: translateY(200px);
    opacity: 0;
}

.showBlock1-enter-active {
    transition: all .5s .5s;
}

.showBlock2-enter-active {
    transition: all .5s .8s;
}

.showBlock1-enter-to,
.showBlock2-enter-to {
    transform: translateY(0);
    opacity: 1;
}
</style>