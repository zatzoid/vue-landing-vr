<template>
    <section class="articles" :class="{ 'default-height': !elementShow }">
        <Transition name="showBlock1">
            <div class="articles__heading" v-show="elementShow">
                <coloredText> our articles</coloredText>
                <div class="articles__heading-block">
                    <h2 class="articles__heading-text section-heading">Stay Up-to-Date with Our VR Insights</h2>
                    <clearBtn> see all</clearBtn>
                </div>
            </div>
        </Transition>
        <Transition name="showItemArticle">
            <div class="articles__item-wrapper" v-show="elementShow" >
                <h3 class="articles__item-heading">current item</h3>
                <div class="articles__item" @click="showVideo = !showVideo">
                    <div class="articles__item-name" :class="{ 'articles__item-name_hide': showVideo }">
                        <p>{{ itemList[currentEl].text }}</p>
                    </div>
                    <div>
                        <picture class="articles__item-img" v-if="!showVideo" >
                            <source :srcset="`https://i.ytimg.com/vi_webp/${itemList[currentEl].video}/maxresdefault.webp`"
                                type="image/webp">
                            <img :src="`https://i.ytimg.com/vi/${itemList[currentEl].video}/maxresdefault.jpg`"
                                :alt="itemList[currentEl].text">
                            <button class="articles__item-play-btn" aria-label="play video">
                                <svg version="1.1" width="100px" height="70px" viewBox="0 0 260 180"
                                    enable-background="new 0 0 260 180" xml:space="preserve">
                                    <path d="M220,2H40C19.01,2,2,19.01,2,40v100c0,20.99,17.01,38,38,38h180c20.99,0,38-17.01,38-38V40C258,19.01,240.99,2,220,2z
                            M102,130V50l68,40L102,130z" />
                                </svg>

                            </button>
                        </picture>
                        <iframe class="articles__item-video" title="YouTube video player"
                            :src="`https://www.youtube.com/embed/${itemList[currentEl].video}?rel=0&autoplay=1&mute=1&showinfo=0`"
                            frameborder="0" v-if="showVideo"></iframe>
                    </div>

                </div>
            </div>
        </Transition>
        <Transition name="showBlock2">
            <div class="articles__items" v-show="elementShow">
                <h3 class="articles__items-heading">Recent Article</h3>
                <ul class="articles__items-grid">
                    <li class="articles__items-grid-el" v-for="(item, index) in itemList " :key="index" :id="index">
                        <img class="articles__items-grid-el-img" :src="item.img" alt="img">
                        <span class="articles__items-grid-el-span">VR Education</span>
                        <p class="articles__items-grid-el-text">{{ item.text }}</p>
                        <clearBtn class="articles__items-grid-el-btn" @click="showEl(index)">
                        </clearBtn>
                    </li>
                </ul>
            </div>
        </Transition>
    </section>
</template>

<script>
export default {
    name: 'OurArticles',
    data() {
        return {
            currentEl: 0,
            elementShow: false,
            showVideo: false,
            itemList: [
                {
                    text: 'The Future of Education: How VR is Revolutionizing the Classroom',
                    img: require('@/assets/items/item1.png'),
                    video: 'k3WkJq478To'
                },
                {
                    text: 'Bringing Designs to Life: How VR is Changing Architecture',
                    img: require('@/assets/items/item2.png'),
                    video: 'xcyzh_GzpLA'
                },
                {
                    text: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
                    img: require('@/assets/items/item3.png'),
                    video: 'Gfo8jFSPm9Y'
                },
                {
                    text: 'Exploring New Worlds: The Benefits of VR Travel',
                    img: require('@/assets/items/item4.png'),
                    video: 'SsrcW-5XlK4',
                },
                {
                    text: 'The Future of Education: How VR is Revolutionizing the Classroom',
                    img: require('@/assets/items/item1.png'),
                    video: 'PYtefaXgiJs'
                },
                {
                    text: 'Bringing Designs to Life: How VR is Changing Architecture',
                    img: require('@/assets/items/item2.png'),
                    video: 'k3WkJq478To'
                },
                {
                    text: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
                    img: require('@/assets/items/item3.png'),
                    video: 'Wd_bVNy2KE'
                },
                {
                    text: 'Exploring New Worlds: The Benefits of VR Travel',
                    img: require('@/assets/items/item4.png'),
                    video: 'Gfo8jFSPm9Y'
                }
            ]
        }
    },
    methods: {
        showEl(index) {
            this.currentEl = index
        }
    },
    watch: {
        currentPos(newCurrentPos) {
            if (newCurrentPos >= this.$el.offsetTop / 1.2) {
                this.elementShow = true
            }

        },
        currentEl() {
            this.showVideo = false
        }

    },
    props: ['currentPos']
}
</script>

<style scoped lang="scss">
.showItemArticle-enter-from {
    transform: translateX(-200px);
    opacity: 0;
}

.showItemArticle-enter-active {
    transition: all .5s 1s;
}


.showItemArticle-enter-to {
    transform: translateX(0);
    opacity: 1;


}

.articles__items-grid::-webkit-scrollbar {
    background-color: var(--col-grey-dark);
    width: 5px;
}

.articles__items-grid::-webkit-scrollbar-thumb {
    background-color: var(--col-grey);
}

.articles {
    max-width: var(--max-width);
    margin: 150px auto 0;
    display: grid;
    grid-template-columns: 1fr 1.5fr;


    &__items {
        background-color: var(--col-black-light);
        border: 2px solid var(--col-grey);
        padding: 32px 20px;
        box-sizing: border-box;
        overflow: hidden;
        max-height: 605px;
        padding: 0 0 0 100px;

        &-heading {
            margin: 32px 0;

        }

        &-grid {
            list-style: none;
            overflow-y: scroll;
            height: 100%;
            margin: 0;
            padding: 0 0 50px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;

            &-el {
                display: grid;
                grid-template-columns: auto auto min-content;
                grid-template-rows: min-content 2fr;
                height: 100px;
                padding-bottom: 23px;
                border-bottom: 2px solid var(--col-grey);
                gap: 8px 20px;
                margin-right: 20px;
                margin-bottom: 35px;

                &-btn {
                    grid-column: 3;
                    grid-row: 1 / span 2;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-image: url(@/assets/ui/arrow.svg);
                    transform: rotate(180deg);
                    height: 40px;
                    width: 40px;
                    padding: 0;

                }

                &-img {
                    grid-row: 1 /span 2;
                }

                &-span {
                    background-color: var(--col-grey);
                    border-radius: 30px;
                    padding: 0 20px;
                    width: max-content;
                    font-weight: 500;
                    font-size: clamp(12px, 2vw, 14px);
                    line-height: clamp(17px, 2vw, 23px);
                    text-align: center;
                }

                &-text {
                    font-weight: 400;
                    font-size: clamp(12px, 2vw, 18px);
                    line-height: clamp(17px, 2vw, 23px);
                }
            }

        }
    }

    &__item {
        margin-top: 32px;
        box-sizing: border-box;
        position: relative;
        height: 60%;
        cursor: pointer;

        &:hover .articles__item-play-btn {
            fill: #ff0000;
            fill-opacity: 1;
        }

        &-video {
            position: absolute;
            width: 110%;
            height: 100%;
        }

        &-play-btn {
            fill: rgb(0, 0, 0);
            fill-opacity: 0.8;
            background-color: transparent;
            border: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;

            &:focus {
                fill: #ff0000;
                fill-opacity: 1;
                outline: none;
            }

        }


        &-wrapper {
            height: 100%;
        }

        &-name {
            position: absolute;
            bottom: -1px;
            left: 0%;
            z-index: 2;
            background: rgb(255, 255, 255);
            background: linear-gradient(180deg, var(--col-clear) 0, var(--col-black-light) 100%);
            width: 110%;
            padding: 40px 0 20px;
            font-size: 32px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: -0.005em;
            max-height: max-content;
            transition: all .5s;
            overflow: hidden;

            & p {
                padding-left: 10px;
            }
            &_hide{
                padding: 0;
                max-height: 0;
            }
        }

        &-img {
            z-index: 1;
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(0, -50%);
            width: 110%;
            height: 100%;

            &source,
            img {
                width: 100%;
                height: 100%;
            }
        }

        &-heading {
            font-size: 28px;
            font-weight: 600;
            line-height: 36px;
            letter-spacing: -0.005em;
        }
    }

    &__heading {
        grid-column: 1 / span 2;
        margin-bottom: 72px;

        &-block {
            display: flex;
            justify-content: space-between;

        }


    }
}

@media screen and (max-width: 700px) {
    .articles {
        margin-top: 60px;
    }

    .articles__item-wrapper {
        display: none;
    }

    .articles__items {
        grid-column: 1 / span 2;
        padding: 0 15px;
    }

    .articles__items-grid-el {
        gap: 8px 10px;

        &-img {
            max-width: 20vw;
        }
    }
}</style>