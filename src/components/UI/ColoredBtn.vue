<template>
    <button class="coloredBtn" ref="watchedEl"
        :style="{ background: `linear-gradient(${cursorPos}deg, var(--col-pink) 0%, var(--col-blue) 100%)` }"
        @mousemove="(e) => mousefunc(e)">
        <slot>

        </slot>

    </button>
</template>

<script>
import mouseMove from '@/utils/mouseMove.js'
export default {
    name: 'ColoredBtn',
    data() {
        return { cursorPos: '246' }
    },
    methods: {
        mousefunc(e) {
            this.cursorPos = mouseMove(e, this.$refs.watchedEl)
        }
    }
}
</script>
<style scoped>
.coloredBtn {
    padding: 18px 38px;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 1.5px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
    color: var(--col-white);
    cursor: pointer;

}
</style>