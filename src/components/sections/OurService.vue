<template>
    <section class="service">
        <Transition name="showBlock1">
            <div class="service__header" v-show="elementShow || elMustShow">
                <div>
                    <coloredText>our service</coloredText>
                    <h2 class="service__heading section-heading">Our Service</h2>
                </div>
                <p class="service__descript section-sub">We use the latest VR hardware and software to create high-quality
                    VR
                    experiences that
                    are accessible and
                    affordable. Our goal is to provide exceptional customer service and support, and our team is always
                    available to
                    answer any questions and address any concerns you may have.</p>
            </div>
        </Transition>
        <ul class="service__grid" :class="{ 'default-height': !elementShow || elMustShow }">
            
            <Transition :name="item.transName" v-for="(item, index) in itemList" :key="index">
                <li class="service__grid-li" v-show="elementShow || elMustShow">
                    <coloredBorder>
                        <div class="service__grid-el">
                            <img class="service__grid-el-img" :src="item.img" alt="logo">
                            <h3 class="service__grid-el-heading">{{item.head}}</h3>
                            <p class="service__grid-el-text">{{item.body}}</p>
                            <div class="service__grid-el-more">
                                <clearBtn> learn more</clearBtn>
                            </div>
                        </div>
                    </coloredBorder>
                </li>
            </Transition>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'OurService',
    data() {
        return {
            elementShow: false,
            itemList: [
                {
                    head: 'VR Development',
                    body: 'From concept to creation, our team of VR developers will bring your vision to life.',
                    img: require('@/assets/logos/logo4.png'),
                    transName: 'showServiceItem1'
                },
                {
                    head: 'VR Design',
                    body: 'Our talented VR designers will create immersive and engaging environments that will captivate your audience.',
                    img: require('@/assets/logos/logo5.png'),
                    transName: 'showServiceItem2'
                },
                {
                    head: 'VR Consulting',
                    body: 'Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.',
                    img: require('@/assets/logos/logo6.png'),
                    transName: 'showServiceItem3'
                },
                {
                    head: 'VR Games',
                    body: 'We offer a wide selection of VR games that are suitable for players of all ages and skill levels.',
                    img: require('@/assets/logos/logo7.png'),
                    transName: 'showServiceItem4'
                },
                {
                    head: 'VR Development',
                    body: 'From concept to creation, our team of VR developers will bring your vision to life.',
                    img: require('@/assets/logos/logo8.png'),
                    transName: 'showServiceItem5'
                },
                {
                    head: 'VR Entertainment',
                    body: 'reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.',
                    img: require('@/assets/logos/logo9.png'),
                    transName: 'showServiceItem6'
                }
            ]
        }
    },
    watch: {
        currentPos(newCurrentPos) {
            if (newCurrentPos >= this.$el.offsetTop / 1.5) {
                this.elementShow = true
            }

        }
    },
    props: { currentPos: {}, elMustShow: { default: false } }
}
</script>


<style scoped lang="scss">
.showServiceItem1-enter-from,
.showServiceItem2-enter-from,
.showServiceItem3-enter-from,
.showServiceItem4-enter-from,
.showServiceItem5-enter-from,
.showServiceItem6-enter-from {
    transform: translateY(300px) !important;
    opacity: 0;
}

.showServiceItem1-enter-active {
    transition: all .5s .8s;
}

.showServiceItem2-enter-active {
    transition: all .5s 1.2s;
}

.showServiceItem3-enter-active {
    transition: all .5s 1.5s;
}

.showServiceItem4-enter-active {
    transition: all .5s 1.8s;
}

.showServiceItem5-enter-active {
    transition: all .5s 2.1s;
}

.showServiceItem6-enter-active {
    transition: all .5s 2.5s
}

.showServiceItem1-enter-to,
.showServiceItem4-enter-to {
    transform: translateY(0);
    opacity: 1;
}


.showServiceItem2-enter-to,
.showServiceItem5-enter-to {
    transform: translateY(50px) !important;
    opacity: 1;
}

.showServiceItem3-enter-to,
.showServiceItem6-enter-to {
    transform: translateY(100px) !important;
    opacity: 1;
}

.service {
    max-width: var(--max-width);
    margin: 150px auto 100px;

    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    &__descript {
        margin-left: auto;
        max-width: 60%;
    }

    &__heading {
        margin-top: 12px;
    }

    &__grid {
        grid-column: 1 / span 2;
        padding: 0;
        list-style: none;
        margin: 0 0 ;
        gap: 34px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        &> :nth-child(2) {
            transform: translateY(50px);
        }

        &> :nth-child(5) {
            transform: translateY(50px);
        }

        &> :nth-child(3) {
            transform: translateY(100px);
        }

        &> :nth-child(6) {
            transform: translateY(100px);
        }

        &-el {
            padding: 36px;
            position: relative;
            background-color: var(--col-black-light);
            min-height: 291px;
            box-sizing: border-box;
            overflow: hidden;

            &-img {
                width: 48px;
                height: 48px;
            }

            &-heading {
                font-size: 20px;
                font-weight: 400;
                line-height: 26px;
                margin: 60px 0 12px;
            }

            &-text {
                color: var(--col-grey);
                font-size: 14px;
                font-weight: 400;
                line-height: 28px;

            }

            &-more {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 40%;
                background: rgb(255, 255, 255);
                background: linear-gradient(180deg, var(--col-clear) 0, var(--col-black-light) 60%);
                transform: translateY(100%);
                transition: all .5s;
                display: flex;
                justify-content: center;
                align-items: center;

            }

            &:hover .service__grid-el-more {
              transform: translateY(0);
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .service {
        margin-top: 60px;
    }

    .service__header {
        flex-direction: column;
    }

    .service__descript {
        margin: 15px 0;
    }

    .service__grid {


        gap: 12px;

        grid-template-columns: 1fr;

        &> :nth-child(2) {
            transform: translateY(0);
        }

        &> :nth-child(5) {
            transform: translateY(0);
        }

        &> :nth-child(3) {
            transform: translateY(0);
        }

        &> :nth-child(6) {
            transform: translateY(0);
        }

    }
}
</style>