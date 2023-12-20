<template>
    <SectionInfoGrid image="Image2.png" :elementShow="elementShow" headingName='ABOUT US'
            heading='Bringing Your Vision to Life: Learn About VRNas'
            text="VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.
        Our team consists of experienced VR developers, designers, and technicians who are passionate about VR and dedicated to delivering the highest quality work. We use the latest VR hardware and software to create immersive, interactive experiences that are tailored to your specific needs.
        From initial consultation to final delivery, we are committed to providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every aspect of your VR experience.">
        </SectionInfoGrid>
</template>

<script>
import SectionInfoGrid from '../sections/SectionInfoGrid.vue';

export default{
    name: 'aboutUsHeading',
    data() {
        return { elementShow: false }
    },
    watch: {
        currentPos(newCurrentPos) {
            if (newCurrentPos >= this.$el.offsetTop / 5) {
                this.elementShow = true
            }

        }
    },
    props: ['currentPos'],
    components: { SectionInfoGrid }
}
</script>