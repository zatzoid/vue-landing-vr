<template>
    <h4 ref="watchedEl" class="text"
        :style="{ background: `linear-gradient(${cursorPos}deg, var(--col-pink) 0%, var(--col-blue) 100%)`, backgroundClip: 'text' }"
        @mousemove="(e) => mousefunc(e)">
        <slot>

        </slot>
    </h4>
</template>
<script>
import mouseMove from '@/utils/mouseMove.js'
export default {
    name: 'ColoredText',
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
.text {
    cursor: default;
    text-transform: uppercase;
    margin: 0;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.14em;

}
</style>