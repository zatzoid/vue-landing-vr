<template>
    <div ref="watchedEl" class="text"
    @mousemove="(e) => mousefunc(e)"
        :style="{ background: `linear-gradient(${cursorPos}deg, var(--col-pink) 0%, var(--col-blue) 100%)`, backgroundClip: 'text' }">
        <h4>
            <slot>

            </slot>
        </h4>
    </div>
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
    color: transparent;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.14em;

}

h4 {
    display: inline;
}
@supports not (-webkit-text-fill-color: transparent){
    .text{
        background-color: transparent !important;
        color: white;
    }

}
</style>