<template>
    <section class="clients">

        <div>
            <coloredText>TESTIMONIAL</coloredText>
            <h2 class="clients__heading section-heading"> What Our Clients Are Saying</h2>
        </div>

        <Transition name="showBlockClients">
            <div class="clients__img" v-show="elementShow">
                <img class="clients__img-el" src="@\assets\images\Image4.png" alt="">
            </div>
        </Transition>


        <ul class="clients__grid">
            <Transition :name="item.transName" v-for="(item, index) in itemList" :key="index">
                <li :class="{ 'clients__grid-el': true, [`clients__grid-el_pos${index + 1}`]: true }" v-show="elementShow">

                    <button class="clients__grid-el-btn">
                        <span class="clients__grid-el-btn-bg"></span>
                        <img class="clients__grid-el-btn-img" :src="item.img" alt="man">

                    </button>
                    <div :class="{ 'clients__grid-el-descript': true, 'clients__grid-el-descript_left': item.posLeft }">
                        <div class="clients__grid-el-descript-wrapper">
                            <p
                                :class="{ 'clients__grid-el-descript-text': true, 'clients__grid-el-descript-text_left': item.posLeft }">
                                {{ item.text }}
                            </p>
                            <p
                                :class="{ 'clients__grid-el-descript-text': true, 'clients__grid-el-descript-text_left': item.posLeft }">
                                <strong>{{ item.name }}</strong>{{ item.job }}
                            </p>

                        </div>
                    </div>
                </li>
            </Transition>

        </ul>
    </section>
</template>

<script>
export default {
    name: 'OurClients',
    data() {
        return {
            elementShow: false,
            itemList: [
                {
                    img: require('@/assets/man/man2.png'),
                    text: `The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.`,
                    name: 'Robert Fox',
                    job: '- CEO Anono',
                    posLeft: false,
                    transName: 'showElClients'
                },
                {
                    img: require('@/assets/man/man3.png'),
                    text: `The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.`,
                    name: 'Robert Fox',
                    job: '- CEO Anono',
                    posLeft: true,
                    transName: 'showElClientsRight'
                },
                {
                    img: require('@/assets/man/man4.png'),
                    text: `The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.`,
                    name: 'Robert Fox',
                    job: '- CEO Anono',
                    posLeft: true,
                    transName: 'showElClientsRight'
                },
                {
                    img: require('@/assets/man/man1.png'),
                    text: `The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.`,
                    name: 'Robert Fox',
                    job: '- CEO Anono',
                    posLeft: true,
                    transName: 'showElClientsRight'
                }, {
                    img: require('@/assets/man/man2.png'),
                    text: `The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.`,
                    name: 'Robert Fox',
                    job: '- CEO Anono',
                    posLeft: false,
                    transName: 'showElClients'
                }, {
                    img: require('@/assets/man/man3.png'),
                    text: `The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.`,
                    name: 'Robert Fox',
                    job: '- CEO Anono',
                    posLeft: false,
                    transName: 'showElClients'
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
    props: ['currentPos']
}
</script>

<style scoped lang="scss">
///element left to right


.clients {
    overflow: hidden;
    max-width: var(--max-width);
    max-height: calc(var(--max-width) /2);
    height: 50vw;
    background-image: url(@/assets/bg/bg3.png);
    background-position: center top;
    background-size: cover;
    margin: 100px auto 00;
    padding-top: 50px;
    box-sizing: border-box;
    text-align: center;
    position: relative;

    &__img {
        position: absolute;
        bottom: 0;
        left: 50%;
        max-width: 600px;
        width: 50vw;
        max-height: 378px;
        height: 27vw;
        transform: translateX(-50%);

        &-el {
            width: 100%;
            height: 100%;
        }
    }

    &__grid {
        list-style: none;
        padding: 0;
        margin: 0;
        position: relative;
        width: 100%;
        height: 100%;

        &-el {
            position: absolute;


            &_pos1 {
                top: 8%;
                left: 18%;
            }

            &_pos2 {
                top: 8%;
                left: 72%;
            }

            &_pos3 {
                top: 37%;
                left: 93%;
            }

            &_pos4 {
                top: 60%;
                left: 81%;
            }

            &_pos5 {
                top: 60%;
                left: 20%;
            }

            &_pos6 {
                top: 30%;
                left: 3%;
            }


            &-btn {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: none;
                padding: 0;
                margin: 0;
                box-sizing: content-box;
                background-color: var(--col-clear);
                transition: all .5s;
                position: relative;



                &-bg {
                    position: absolute;
                    width: 110%;
                    height: 110%;
                    background-color: var(--col-clear);
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: -1;
                    transition: all .5s;
                    background-color: var(--col-grey-dark);
                    box-sizing: border-box;
                    border-radius: 50%;

                }

                &:hover .clients__grid-el-btn-bg {
                    transform: translate(-50%, -50%) scale(1.2);
                    background-image: linear-gradient(246deg, var(--col-pink) 0%, var(--col-blue) 100%);
                }

                &-img {
                    z-index: 2;
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    transition: all .5s;
                    box-sizing: content-box;


                }
            }

            &-descript {

                position: absolute;
                right: -30%;
                top: 50%;
                transform: translate(100%, -50%);
                width: 0;
                background-image: url(@/assets/bg/clients.png);
                background-repeat: no-repeat;
                border-left: none;
                transition: all 0.5s;
                overflow: hidden;

                &_left {
                    transform: translate(-100%, -50%) scale(-1, 1);
                    left: -30%;
                }

                &-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding: 18px 23px;
                    box-sizing: border-box;
                }

                &-text {
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 20px;
                    text-align: left;
                    color: var(--col-grey);
                    width: 254px;

                    &_left {
                        transform: scale(-1, 1);
                    }

                    &:last-of-type {
                        color: white;
                        border-bottom: 6px solid;
                        border-image-slice: 1;
                        border-width: 3px;
                        border-image-source: linear-gradient(246deg, var(--col-pink) 0%, var(--col-blue) 100%);

                    }

                }
            }
        }
    }
}

.clients__grid-el-btn:hover+.clients__grid-el-descript {
    width: 300px;
}

.showElClients-enter-from {
    transform: translateX(-100%) !important;
    opacity: 0;
}

.showElClients-enter-active {
    transition: all 1s .5s;
}


.showElClients-enter-to {
    transform: translateX(0) !important;
    opacity: 1;
}

////element right to left
.showElClientsRight-enter-from {
    transform: translateX(100%) !important;
    opacity: 0;
}

.showElClientsRight-enter-active {
    transition: all 1s .5s;
}


.showElClientsRight-enter-to {
    transform: translateX(0) !important;
    opacity: 1;
}

/////////block
.showBlockClients-enter-from {
    transform: translateY(200px) translateX(-50%) !important;
    bottom: 0;
    opacity: 0;
}

.showBlockClients-enter-active {
    transition: all .5s .5s;
}


.showBlockClients-enter-to {
    bottom: 0;
    transform: translateY(0) translateX(-50%) !important;
    opacity: 1;
}

@media screen and (max-width: 700px) {
    .clients {
        margin-top: 60px;
        padding-top: 0;
    }

    .clients__grid-el {

        &-btn {
            width: 25px;
            height: 25px;
        }

        &_pos1 {
            top: 8%;
            left: 10%;
        }

        &_pos2 {
            top: 8%;
            left: 85%;
        }

        &_pos3 {
            top: 30%;
            left: 85%;
        }

        &_pos4 {
            top: 55%;
            left: 85%;
        }

        &_pos5 {
            top: 55%;
            left: 10%;
        }

        &_pos6 {
            top: 30%;
            left: 10%;
        }

    }

    .clients__grid-el-descript {
        transform: translate(85%, -50%) scale(0.7);

        &_left {
            transform: translate(-85%, -50%) scale(-1, 1) scale(0.7);
            left: -30%;
        }
    }
}</style>