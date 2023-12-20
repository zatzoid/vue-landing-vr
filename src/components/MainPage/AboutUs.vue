<template>
    <SectionInfoGrid image="Image2.png" :elementShow="elementShow" :currentPos="currentPos" headingName="about us"
        heading="Bring your events to life like never before with our VR services." text="VRNas is a leading provider of VR services for education,
entertainment,
architecture, and events. Our
mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn
in
new ways, and experience events in a whole new light.">
        <ul class="about__content-list">
            <li class="about__content-list-el">
                <p class="about__content-list-el-text">Cutting-Edge Technology</p>
            </li>
            <li class="about__content-list-el">
                <p class="about__content-list-el-text">Versatile Applications</p>
            </li>
            <li class="about__content-list-el">
                <p class="about__content-list-el-text"> Affordable and Accessible</p>
            </li>
        </ul>

    </SectionInfoGrid>
</template>

<script>
import SectionInfoGrid from '../sections/SectionInfoGrid.vue';

export default {
    name: 'aboutUs',
    data() {
        return { elementShow: false }
    },
    watch: {
        currentPos(newCurrentPos) {
            if (newCurrentPos >= this.$el.offsetTop / 3) {
                this.elementShow = true
            }

        }
    },
    props: ['currentPos'],
    components: { SectionInfoGrid }
}
</script>

<style scoped>
.about__content-list {
    list-style: url(@/assets/ui/list-check.svg);
    padding-left: 25px;
    box-sizing: border-box;
    margin: 0 0 32px;
    gap: 14px;
    display: grid;

}

.about__content-list-el {
    line-height: 14px;
}

.about__content-list-el-text {
    margin-left: 12px;
    font-size: 1rem;

}
</style>