<template>
    <section class="chois">
        <Transition name="showBlock1">
            <coloredBorder v-show="elementShow || elementMustShow">
                <ul class="chois__grid">
                    <li class="chois__el">
                        <img class="chois__img" src="@/assets/logos/logo1.png" alt="logo">
                        <h2 class="chois__heading">Expertise</h2>
                        <p class="chois__text">Our team consists of experienced VR developers, designers, and technicians
                            who
                            have a passion for VR and
                            a commitment to delivering quality work and give the best service</p>
                    </li>
                    <li class="chois__el">
                        <img class="chois__img" src="@/assets/logos/logo2.png" alt="logo">
                        <h2 class="chois__heading">Customization</h2>
                        <p class="chois__text">Every client is unique, and we believe every VR experience should be too.
                            We'll
                            work with you to create a
                            customized solution that meets your specific needs and goals</p>
                    </li>
                    <li class="chois__el">
                        <img class="chois__img" src="@/assets/logos/logo3.png" alt="logo">
                        <h2 class="chois__heading">Service</h2>
                        <p class="chois__text">We believe in providing exceptional customer service, from initial
                            consultation
                            to final delivery. Our
                            goal is to ensure you're satisfied with every aspect of your VR experience.</p>
                    </li>

                </ul>
            </coloredBorder>
        </Transition>
    </section>
</template>

<script>
export default {
    data() {
        return { elementShow: false}
    },
    watch: {
        currentPos(newCurrentPos) {
            if(newCurrentPos >= this.$el.offsetTop / 5){
                this.elementShow = true
            }

        }
    },
    props: {currentPos:{}, elementMustShow:{default: false}}


}
</script>

<style scoped lang="scss">


.chois {
    min-height: 372px;

    &__grid {
        max-width: var(--max-width);
        padding: 55px 65px;
        padding-left: clamp(37px, 5vw, 65px);
        padding-right: clamp(37px, 5vw, 65px);
        display: flex;
        gap: 50px;
        background-color: var(--col-black-light);
        list-style: none;
        pad: 0;
        margin: 0;
    }

    &__el {
        justify-content: left;
    }

    &__img {
        width: 63px;
        height: 59px;
    }

    &__heading {
        margin: 42px 0 12px;
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
    }

    &__text {
        color: var(--col-grey);
        font-size: 14px;
        font-weight: 400;
        line-height: 28px;
    }
}

@media screen and (max-width: 700px) {
    .chois__grid {
        flex-direction: column;
    }

}
</style>