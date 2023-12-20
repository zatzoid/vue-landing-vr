<template>
    <section class="SectionInfoGrid" :class="{ 'default-height': !elementShow }">
        <Transition name="showBlock1">
            <div class="SectionInfoGrid__img" :class="{ 'SectionInfoGrid__img_reverse': reverse }" v-show="elementShow">
                <gradientBg></gradientBg>
                <img class="SectionInfoGrid__img-el" :src="img" alt="image">
            </div>
        </Transition>
        <Transition name="showBlock2">
            <div class="SectionInfoGrid__content" :class="{ 'SectionInfoGrid__content_reverse': reverse }"
                v-show="elementShow">
                <coloredText> {{ headingName }}</coloredText>
                <h2 class="SectionInfoGrid__content-heading section-heading">{{ heading }}</h2>
                <p class="SectionInfoGrid__content-text section-sub">{{ text }}</p>
                <slot></slot>
            </div>
        </Transition>
    </section>
</template>

<script>
export default {
    name: 'SectionInfoGrid',
    computed: {
        img() {
            return require(`@/assets/images/${this.image}`)
        }
    },
    watch: {
        elementShow(newVal) {
            console.log(this.headingName, 'to::', newVal)
        }
    },

    props: ['headingName', 'heading', 'text', 'currentPos', 'image', 'elementShow', 'reverse']
}
</script>

<style scoped lang="scss">
.SectionInfoGrid {
    max-width: var(--max-width);
    margin: 120px auto 0;
    min-height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(10px, 2vw, 67px);

    &__img {

        position: relative;
        display: flex;
        width: clamp(300px, 45vw, 500px);
        height: clamp(400px, 60vw, 625px);

        &_reverse {
            margin-left: auto;
            grid-column: 2;
        }

        &-el {
            z-index: 2;
            width: 100%;
            height: 100%;
        }

        &::after {
            position: absolute;
            z-index: -1;
            content: '';
            width: 80%;
            height: 75%;
            bottom: -20px;
            left: -20px;
            backdrop-filter: blur(5px);
            background-color: #25253250;
            opacity: 0.5;

        }

    }

    &__content {
        padding-top: clamp(10px, 5vw, 81px);
        box-sizing: border-box;
        line-height: 58px;

        &_reverse {
            grid-column: 1;
            grid-row: 1;
        }

        &-heading {
            margin: 12px 0;
        }

        &-text {
            text-align: left;
            margin-bottom: 24px;
        }

        &-list {
            list-style: url(@/assets/ui/list-check.svg);
            padding-left: 25px;
            box-sizing: border-box;
            margin: 0 0 32px;
            gap: 14px;
            display: grid;

            &-el {
                line-height: 14px;
            }

            &-el-text {
                margin-left: 12px;
                font-size: 1rem;

            }


        }
    }
}

@media screen and (max-width: 700px) {
    .SectionInfoGrid__img {
        display: none;
    }

    .SectionInfoGrid {
        margin-top: 30px;
        padding-top: 0;
        grid-template-columns: 1fr;
    }

    .SectionInfoGrid__content {
        padding-top: 0;
    }

}
</style>
