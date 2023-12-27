<template>
    <section class="detail">
        <Transition name="item" mode="out-in">
            <div class="detail__item" :key="currentItem">
                <coloredText class="detail__item-head">{{ itemList[[currentItem]].kinde }}</coloredText>
                <h2 class="section-heading detail__item-heading">{{ itemList[[currentItem]].name }}</h2>
                <p class="section-sub">{{ itemList[[currentItem]].body }}</p>


            </div>
        </Transition>
        <button class="detail__item-btn detail__item-btn_left" @click="this.currentItem -= 1"
            :disabled="currentItem === 0"></button>
        <button class="detail__item-btn detail__item-btn_right" @click="this.currentItem += 1"
            :disabled="currentItem === 4"></button>
        <div class="detail__grid-wrapper">
            <ul class="detail__grid">
                <li class="detail__grid-el"
                    :style="{ transform: `rotate(${index <= currentItem ? 30 + (index * 13) : 100 + (index * 13)}deg)` }"
                    :class="{ 'detail__grid-el_choisen': currentItem === index }" v-for="(item, index) in itemList"
                    :key="index">
                    <button class="detail__grid-el-btn" :disabled="currentItem === index" @click=" this.currentItem = index"
                        :style="{ transform: `rotate(${index <= currentItem ? -30 - (index * 13) : -100 - (index * 13)}deg)` }">
                        <div class="detail__grid-el-btn-text"><p class="detail__grid-el-btn-text-el">{{ item.name }}</p></div>
                    </button>
                </li>
            </ul>
        </div>
    </section>
</template>


<script>
export default {
    name: 'ServiceDetail',
    data() {
        return {
            currentItem: 4,
            itemList: [
                {
                    name: 'VR            design',
                    kinde: 'design',
                    body: `At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a game, we can help you bring your idealife.`
                },
                {
                    name: 'VR            Events',
                    kinde: 'Events',
                    body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis fugit alias amet placeat ullam. Libero perspiciatis alias tempora ad quibusdam nemo ipsa accusamus vitae est blanditiis eligendi reiciendis ipsam porro assumenda, quo ex nam quam. Quos quas quam quia suscipit tempore fugit optio nobis fuga ducimus! Saepe voluptas facere perspiciatis consectetur. Cumque laudantium a autem in possimus, natus officiis inventore expedita excepturi incidunt delectus atque velit veritatis nulla omnis voluptatum, et provident debitis neque! Dignissimos quasi nesciunt exercitationem veniam aliquid quia velit nobis voluptates eum eveniet autem totam, nihil, amet molestias modi placeat facilis doloremque magni accusamus tempore. Ex, aliquid?`
                },
                {
                    name: 'VR             Games',
                    kinde: 'Games',
                    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur harum labore debitis aspernatur vero ea iure, voluptate officia, consequatur nam quaerat repudiandae nostrum. Aspernatur, nostrum modi! Doloribus assumenda ipsam non odit cupiditate pariatur enim, ea eaque aspernatur sed asperiores, tempore rerum culpa labore nobis praesentium recusandae eligendi nemo beatae. Quisquam?`
                },
                {
                    name: 'VR           Consulting',
                    kinde: 'Consulting',
                    body: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo expedita provident iure repellat temporibus voluptates distinctio optio impedit possimus, sit, est, corporis ducimus aliquid illum dolores aspernatur architecto. Praesentium voluptas aspernatur dicta sapiente non quam accusantium a, possimus provident, vitae error magnam placeat vel, enim deserunt necessitatibus cumque ea tempore. Perferendis cupiditate eligendi ducimus quas excepturi impedit fugiat temporibus quod magni hic veritatis alias tempora, nemo dicta odio, veniam assumenda iusto facere quo eaque atque maiores. Facere recusandae est atque dolorem, sapiente autem quisquam magni numquam! Neque voluptatibus inventore rerum quia non, corporis ipsam sed. Veritatis dolor consequatur cumque expedita distinctio incidunt alias id blanditiis eum illo animi voluptate exercitationem quia laborum nobis soluta aliquam mollitia, cupiditate magnam. Laboriosam numquam odio dicta deserunt nesciunt, obcaecati possimus tempora, quis eaque laudantium voluptas omnis, repellat dolores dolorem. Autem suscipit saepe quod. Dolorum aliquam placeat cumque ducimus sunt illum illo et ipsa quia.`
                },
                {
                    name: 'VR           Entertaiment',
                    kinde: 'Entertaiment',
                    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit quisquam, harum nihil maiores perferendis, nulla odit porro corrupti odio corporis mollitia quidem et excepturi tenetur repellat sed id quod beatae repellendus, iure voluptatum? Sequi saepe minus eius, modi distinctio consectetur explicabo, eveniet commodi amet a neque totam dolor autem obcaecati libero nulla animi similique consequatur labore! Blanditiis voluptas quae quis perferendis, laudantium dolor corporis ut temporibus nihil saepe animi quasi quos eveniet culpa labore, nisi ducimus! Sapiente, sit repellendus voluptate quas aut porro amet eaque veniam consectetur ab non aspernatur laboriosam suscipit ipsa est possimus doloribus recusandae odit minus illo! Cupiditate dolorem dolorum minus temporibus magnam earum ipsa magni incidunt quod? Quis eius enim maxime ex assumenda exercitationem consequuntur amet nemo, accusantium in magnam, animi libero, aut similique quia quibusdam ullam. Veritatis doloribus nemo quaerat nulla vitae facere consequuntur tempora quod, ad ipsam molestiae praesentium ducimus totam dicta temporibus itaque accusantium nostrum provident maiores omnis aut quae! Ducimus neque ab repellat sapiente nesciunt itaque `
                }
            ]
            
        }
    }

}
</script>

<style scoped lang="scss">
.detail__item-btn {
    display: none;
}

.detail {

    padding-top: 130px;
    max-height: auto;
    min-height: 75vh;
    position: relative;
    background-image: url(@/assets/bg/bg3.png);
    background-size: cover;
    background-position: center top;

    &__item {
        max-width: 600px;
        width: 55%;
        margin: 100px auto 0;

        &-head,
        &-heading {
            text-align: center;
        }
    }

    &__grid {
        width: 100%;
        height: 1px;
        position: relative;
        list-style: none;
        padding: 0;
        margin: auto auto 0;

        &-wrapper {
            display: flex;
            align-items: flex-end;
            position: absolute;
            width: 100%;
            height: clamp(50%, 50vw, 70%);
            top: 0;

            left: -50%;
            transform: translateX(50%);
        }

        &-el {
            width: 50%;
            border-radius: 50%;
            position: absolute;
            transform-origin: center right;
            transition: all .5s;



            &_choisen {
                transform: rotate(90deg) !important; //180
            }

            &-btn {
                padding: 0;
                font-size: 14px;
                font-weight: 400;
                line-height: 18px;
                color: var(--col-grey);
                opacity: 1;
                background-color: var(--col-clear);
                border: none;
                position: relative;
                z-index: 1;
                cursor: pointer;
                transition: all .4s;


                &-text {
                    background-color: var(--col-black-light);
                    border: 2px solid var(--col-grey-dark);
                    width: clamp(50px, 11vw, 100px);
                    height: clamp(50px, 11vw, 100px);
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    &-el{
                        text-align: center;
                        width: min-content;
                    }
                }



                &:hover {
                    color: var(--col-white);
                }

                &:hover:after {

                    transform: translate(-50%, -50%) scale(1);
                }

                &:disabled {
                    opacity: 1;
                    transform: rotate(-90deg) !important;
                    color: var(--col-white);

                    &::after {
                        content: '';
                        position: absolute;
                        z-index: -1;
                        width: 110%;
                        height: 110%;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%) scale(1);
                        border-radius: 50%;
                        background-image: linear-gradient(246deg, var(--col-pink) 0%, var(--col-blue) 100%);
                        transition: all .4s;
                    }
                }


            }
        }
    }
}

.item-enter-from,
.item-leave-to {
    opacity: 0;
}

.item-enter-active,
.item-leave-active {
    transition: all .5s;
}

.item-enter-to,
.item-leavr-from {
    opacity: 1;
}

@media screen and (max-width: 700px) {
    .detail {
        padding-top: 0;
    }

    .detail__grid-wrapper {
        display: none;
    }

    .detail__item-btn {
        position: absolute;
        display: flex;

        width: 50px;
        height: 50px;
        background-color: var(--col-black-light);
        border: 2px solid var(--col-grey);
        border-radius: 50%;
        top: 50%;
        background-image: url(@/assets/ui/arrow-small.svg);
        background-size: 50%;
        background-position: 60% 45%;
        background-repeat: no-repeat;
        padding: 0;
        cursor: pointer;

        &:disabled {
            opacity: 0.5;
            cursor: default;
        }

        &_left {
            transition: all .5s;
            transform: rotate(-90deg);

            &:active {
                transform: rotate(-90deg) translateY(-10px);

            }

        }

        &_right {
            transition: all .5s;
            right: 0;
            transform: rotate(90deg);

            &:active {
                transform: rotate(90deg) translateY(10px);

            }
        }
    }
}
</style>