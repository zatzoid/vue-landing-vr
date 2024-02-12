<template>
    <section class="sub" ref="watchedEl"
        :style="{ background: `linear-gradient(${cursorPos}deg, var(--col-pink) 0%, var(--col-blue) 100%)` }"
        @mousemove="(e) => mousefunc(e)">
        <p class="sub__text section-heading">Subscribe to our newsletter for latest updates</p>
        <form @submit.prevent="subForm" class="sub__form">
            <input class="sub__form-input" type="text" required placeholder="enter text" v-model="inputVal">
            <button class="sub__form-btn" type="submit" aria-label="save-form" title="save-form"></button>

        </form>

    </section>
</template>

<script>
import mouseMove from '@/utils/mouseMove.js'
export default {
    name: 'SubscribeFooter',
    data() {
        return { cursorPos: '246', inputVal: '' }
    },
    methods: {
        mousefunc(e) {
            this.cursorPos = mouseMove(e, this.$refs.watchedEl)
        },
        subForm() {
            alert(this.inputVal)
        }
    }
}
</script>

<style scoped lang="scss">
.sub {
    max-width: var(--max-width);
    margin: 150px auto 120px;
    padding: 35px 0;
    padding-left: clamp(15px, 5vw, 74px);
    padding-right: clamp(15px, 5vw, 74px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {

        max-width: 520px;
    }

    &__form {
        width: 30%;
        display: flex;
        height: 56px;

        &-input {
            color: white;
            width: 100%;
            padding: 0;
            border: none;
            background-color: rgba(255, 255, 255, 0.1);

            &::placeholder {
                color: white;
            }

            &:focus {
                outline: none;
            }

        }

        &-btn {
            background-color: rgba(255, 255, 255, 0.336);
            width: 50px;
            height: 100%;
            padding: 2px 2px 2px 0;
            box-sizing: border-box;
            margin: 0;
            border: none;
            border-top: 4px solid rgba(255, 255, 255, 0.1);
            border-right: 4px solid rgba(255, 255, 255, 0.1);
            border-bottom: 4px solid rgba(255, 255, 255, 0.1);
            background-image: url(@/assets/ui/send-msg.svg);
            background-repeat: no-repeat;
            background-position: center;
        }
    }

}

@media screen and (max-width: 700px) {

    .sub {
        flex-direction: column;

    }

    .sub__form {
        margin-top: 30px;
        width: 100%;
    }
}</style>