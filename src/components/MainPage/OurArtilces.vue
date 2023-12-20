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
            <div class="articles__item-wrapper" v-show="elementShow">
                <h3 class="articles__item-heading">current item</h3>
                <div class="articles__item">
                    <div class="articles__item-name">
                        <p>{{ itemList[currentEl].text }}</p>
                    </div>

                    <img class="articles__item-img" :src="itemList[currentEl].img" alt="picture">
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
            currentEl: 1,
            elementShow: false,
            itemList: [
                {
                    text: 'The Future of Education: How VR is Revolutionizing the Classroom',
                    img: require('@/assets/items/item1.png')
                },
                {
                    text: 'Bringing Designs to Life: How VR is Changing Architecture',
                    img: require('@/assets/items/item2.png')
                },
                {
                    text: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
                    img: require('@/assets/items/item3.png')
                },
                {
                    text: 'Exploring New Worlds: The Benefits of VR Travel',
                    img: require('@/assets/items/item4.png')
                },
                {
                    text: 'The Future of Education: How VR is Revolutionizing the Classroom',
                    img: require('@/assets/items/item1.png')
                },
                {
                    text: 'Bringing Designs to Life: How VR is Changing Architecture',
                    img: require('@/assets/items/item2.png')
                },
                {
                    text: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
                    img: require('@/assets/items/item3.png')
                },
                {
                    text: 'Exploring New Worlds: The Benefits of VR Travel',
                    img: require('@/assets/items/item4.png')
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

.showItemArticle-enter-active{
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
        height: 425px;
       

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

            p {
                padding-left: 10px;
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
}
</style>