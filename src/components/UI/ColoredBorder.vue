<template>
    <div class="border" ref="watchedEl" :style="currentStyle" @mouseenter="this.styleActive = true"
        @mouseleave=" this.styleActive = false" @mousemove="(e) => mousefunc(e)">
        <slot>

        </slot>
    </div>
</template>
<script>
import mouseMove from '@/utils/mouseMove.js'
export default {
    name: 'ColoredBorder',
    data() {
        return {
            cursorPos: '246',
            styleActive: false,

        }
    },
    computed: {
        currentStyle() {
            return this.styleActive ? { borderImageSource: `linear-gradient(${this.cursorPos}deg, var(--col-pink) 0%, var(--col-blue) 100%)` } :'';
        }
    },

    methods: {
        mousefunc(e) {
            this.cursorPos = mouseMove(e, this.$refs.watchedEl)
        }
    }
}
</script>

<style scoped>
.border {
    transition: all 0.5s;
    border: 3px solid var(--col-grey-dark);
    border-image-slice: 1;
    border-width: 3px;
    box-sizing: border-box;


}
</style>