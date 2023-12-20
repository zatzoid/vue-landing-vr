<template>
    <section class="partner">
        <coloredText>our trusted partners</coloredText>
        <h2 class="partner__heading section-heading">Discover the Companies We Work With</h2>
        <div class="partner__content">
            <div class="partner__content-el " :class="{ 'partner__content-el-1': elementShow }"> <span
                    class="partner__content-el-content partner__content-el-content-1"></span></div>
            <div class="partner__content-el " :class="{ 'partner__content-el-2': elementShow }"> <span
                    class="partner__content-el-content partner__content-el-content-2"></span></div>
            <div class="partner__content-el " :class="{ 'partner__content-el-3': elementShow }"> <span
                    class="partner__content-el-content partner__content-el-content-3"></span></div>
            <div class="partner__content-el " :class="{ 'partner__content-el-4': elementShow }"> <span
                    class="partner__content-el-content partner__content-el-content-4"></span></div>
            <div class="partner__content-el " :class="{ 'partner__content-el-5': elementShow }"> <span
                    class="partner__content-el-content partner__content-el-content-5"></span></div>
            <div class="partner__content-el " :class="{ 'partner__content-el-6': elementShow }"> <span
                    class="partner__content-el-content partner__content-el-content-6"></span></div>
            <div class="partner__content-el " :class="{ 'partner__content-el-7': elementShow }"> <span
                    class="partner__content-el-content partner__content-el-content-7"></span></div>
            <img class="partner__content-img" src="@/assets/images/Image5.png" alt="image">
        </div>

    </section>
</template>

<script>
export default {
    name: 'OurPartners',
    data() {
        return { elementShow: false }
    },
    watch: {
        currentPos(newCurrentPos) {
            if (newCurrentPos >= this.$el.offsetTop / 1.2) {
                this.elementShow = true
            }

        }
    },
    props: ['currentPos']
}
</script>

<style scoped lang="scss">
.partner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: clamp(30px, 10vw,152px);

    &__heading {
        margin: 12px 0 0;
    }

    &__content {
        padding-top: 100px;
        position: relative;

        &-img {
            max-width: 650px;
            width: 50vw;
            max-height: 378px;
            height: 27vw;
        }

        &-el {
            position: absolute;
            width: 63%;
            transform-origin: right center;
            transition: transform 1s, opacity 0.1s .2s;
            bottom: 0;
            right: 50%;
            opacity: 0;


            &-content {
                display: block;
                width: 70px;
                height: 70px;
                border-radius: 50%;
                background-color: rgba(128, 128, 128, 0.185);
                backdrop-filter: blur(10px) opacity(50%);
                box-shadow: 1px -1px 0px 2px rgba(129, 129, 129, 0.25) inset;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                transition: all .5s ease-in-out;

                &:hover {
                    box-shadow: -1px 1px 0px 2px rgba(168, 168, 168, 0.493) inset;
                    backdrop-filter: blur(10px) opacity(100%);
                }

                &-1,
                &-2,
                &-3,
                &-4,
                &-5,
                &-6,
                &-7 {
                    position: relative;

                    &::after {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        content: '';
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 70%;

                    }

                }

                &-1 {
                    &::after {
                        background-image: url(@/assets/logos/logo4.png);
                    }
                }

                &-2 {
                    &::after {
                        transform: rotate(-30deg);
                        background-image: url(@/assets/logos/logo5.png);
                    }
                }

                &-3 {
                    &::after {
                        transform: rotate(-60deg);
                        background-image: url(@/assets/logos/logo6.png);
                    }
                }

                &-4 {
                    &::after {
                        transform: rotate(-90deg);
                        background-image: url(@/assets/logos/logo4.png);
                    }
                }

                &-5 {
                    &::after {
                        transform: rotate(-120deg);
                        background-image: url(@/assets/logos/logo5.png);
                    }
                }

                &-6 {
                    &::after {
                        transform: rotate(-150deg);
                        background-image: url(@/assets/logos/logo6.png);
                    }
                }

                &-7 {
                    &::after {
                        transform: rotate(-180deg);
                        background-image: url(@/assets/logos/logo7.png);
                    }
                }
            }

            &-1 {
                opacity: 1;
                transform: rotate(0deg);
            }

            &-2 {
                opacity: 1;
                transform: rotate(30deg);
            }

            &-3 {
                opacity: 1;
                transform: rotate(60deg);
            }

            &-4 {
                opacity: 1;
                transform: rotate(90deg);
            }

            &-5 {
                opacity: 1;
                transform: rotate(120deg);
            }

            &-6 {
                opacity: 1;
                transform: rotate(150deg);
            }

            &-7 {
                opacity: 1;
                transform: rotate(180deg);
            }
        }

    }

    background-image: url(@/assets/bg/bg3.png);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
}
@media screen and (max-width: 700px) {
    .partner__content{
        padding-top: 40px;
    }
    .partner__content-el{
        width: 70%;
        &-content{
            width: 40px;
            height: 40px;
        }
    }
    
}
</style>