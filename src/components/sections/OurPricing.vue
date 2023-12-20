<template>
    <section class="price" :class="{ 'default-height': !elementShow }">
        <Transition name="showBlock1">
            <div v-show="elementShow">
                <coloredText>our prising</coloredText>
                <h2 class="price__heading section-heading">Affordable VR Services for Everyone</h2>
                <p class="price__text section-sub">At VRNas, we believe that everyone should have access to the benefits of
                    VR. That's why we
                    offer a range of
                    pricing options to meet the needs of any budget.</p>
            </div>
        </Transition>
        <Transition name="showBlock2">
            <div class="price__wrapper" v-show="elementShow">
                <ul class="price__grid">
                    <li class="price__grid-el">
                        <h3 class="price__grid-el-head">Customizable Packages</h3>
                        <p class="price__grid-el-text">We understand that each project is unique, so we offer customizable
                            packages to ensure that you get
                            the services you need at a price that works for you. Our team will work with you to create a
                            package
                            that meets your specific goals and budget.</p>
                    </li>
                    <li class="price__grid-el">
                        <h3 class="price__grid-el-head">Flexible Payment Options</h3>
                        <p class="price__grid-el-text">We offer flexible payment options to make it easy for you to get
                            started
                            with our services. We accept
                            various payment methods, including credit cards, bank transfers, and PayPal, and we can also
                            work
                            with you to create a payment plan that suits your needs.</p>
                    </li>
                    <li class="price__grid-el">
                        <h3 class="price__grid-el-head">Satisfaction Guarantee</h3>
                        <p class="price__grid-el-text">We stand behind our services and are committed to ensuring that you
                            are
                            completely satisfied with the
                            final product. If for any reason you are not happy with our services, we will work with you to
                            make
                            it right or provide a full refund.</p>
                    </li>
                </ul>

                <div class="price__block">
                    <coloredBorder>
                        <div class="price__block-wrapper">

                            <p class="price__block-head">Start from</p>
                            <p class="price__block-price">$99</p>
                            <coloredBtn> get started</coloredBtn>
                            <p class="price__block-sub">30 Days Moneyback Guarantee</p>

                        </div>
                    </coloredBorder>
                </div>

            </div>
        </Transition>
    </section>
</template>

<script>
export default {
    name: 'OurPrising',
    data() {
        return { elementShow: false }
    },
    watch: {
        currentPos(newCurrentPos) {
            if (newCurrentPos >= this.$el.offsetTop / 1.5) {
                this.elementShow = true
            }

        }
    },
    props: ['currentPos']
}
</script>

<style scoped lang="scss">
.price {
    max-width: var(--max-width);
    margin: 100px auto 0;


    &__heading {
        margin: 12px 0 16px;
    }

    &__text {
        max-width: 50%;
    }

    &__wrapper {
        margin-top: 40px;
        background-color: #252532CF;
        border: 2px solid var(--col-grey-dark);
        display: flex;
    }

    &__grid {
        list-style: none;
        padding: 0 100px 0 25px;
        margin: 55px 0;
        max-width: 50%;
        border-right: 2px solid var(--col-grey-dark);
        display: grid;
        gap: 32px;
        list-style-position: inside;



        &-el {
            background-image: url(@/assets/ui/list-cloud.svg);
            background-repeat: no-repeat;
            background-position: left top;
            padding-left: 50px;

            &-head {
                font-size: 18px;
                font-weight: 400;
                line-height: 23px;
                margin-bottom: 12px;
            }

            &-text {
                font-size: 16px;
                font-weight: 400;
                line-height: 28px;
                color: var(--col-grey);
            }
        }
    }

    &__block {
        width: 322px;
        height: 222px;
        margin: auto;
        text-align: center;

        &-wrapper {
            padding: 20px 20px;
            box-sizing: border-box;
        }

        &-head {
            color: var(--col-grey);
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
        }

        &-price {

            font-size: 60px;
            font-weight: 600;
            line-height: 66px;
            margin-bottom: 14px;
        }

        &-sub {
            margin-top: 14px;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: center;
            opacity: 0.7;

        }

    }
}

@media screen and (max-width: 700px) {
    .price__wrapper {
        flex-direction: column;
        padding-bottom: 10px;
    }

    .price__grid {
        max-width: 100%;
        padding-right: 25px;
    }

}</style>