<template>
    <div class="servicePage">
        <SectionHeading heading="Our Service" />
        <OurService :elMustShow="elMustShow" />
        <ServiceDetail />
        <OurPricing :currentPos="currentPos" />
    </div>
</template>

<script>

import ServiceDetail from './ServicePage/ServiceDetail.vue'
import OurPricing from './sections/OurPricing.vue';
import OurService from './sections/OurService.vue';
import SectionHeading from './sections/SectionHeading.vue';

export default {
    name: 'ServicePage',
    data() {
        return { elMustShow: false, currentPos: 0 }
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
        }),
            setTimeout(() => {
                this.elMustShow = true
            }, 500);
        window.addEventListener('scroll', () => { this.checkPos() })
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.checkPos)
    },
    components: { OurService, SectionHeading, OurPricing, ServiceDetail }
}
</script>
<style scoped>
.servicePage {
    padding: 120px 15px 0;
    box-sizing: border-box;
    max-width: var(--max-width);
    margin: auto;
}
</style>