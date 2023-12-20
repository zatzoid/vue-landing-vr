<template>
    <div class="aboutPage">
        <SectionHeading heading='About Us' />
        <AboutUsHeading :currentPos="currentPos" />
        <section class="aboutChois">
            <coloredText>
                WHY CHOOSE US
            </coloredText>
            <h2 class="section-heading">Empowering Your Virtual Reality Experience</h2>
            <WhyChois :elementMustShow="true" />
        </section>
        <OurTeam />
        <OurPartners :currentPos="currentPos" />
    </div>
</template>

<script>
import SectionHeading from './sections/SectionHeading.vue';
import WhyChois from './sections/WhyChois.vue';
import OurTeam from './AboutPage/OurTeam.vue';
import OurPartners from './AboutPage/OurPartners.vue';
import AboutUsHeading from './AboutPage/AboutUsHeading.vue';
export default {
    name: 'AboutPage',
    data() { return { currentPos: 0 } },

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
    components: { SectionHeading, WhyChois, OurTeam, OurPartners, AboutUsHeading }
}
</script>
<style scoped>
.aboutPage {
    padding: 120px 15px 0;
    box-sizing: border-box;
    max-width: var(--max-width);
    margin: auto;

}

.aboutChois {
    margin-top: clamp(10px, 10vw, 120px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
}
</style>