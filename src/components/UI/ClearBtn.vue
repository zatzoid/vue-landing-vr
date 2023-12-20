<template>
    <button ref="watchedEl" class="ClearBtn" 
    :style="{borderImageSource: `linear-gradient(${cursorPos}deg, var(--col-pink) 0%, var(--col-blue) 100%)`}"  
     @mousemove="(e) => mousefunc(e)">
        <slot>

        </slot>

    </button>
</template>

<script>
import mouseMove from '@/utils/mouseMove.js'
export default {
    name: 'ClearBtn',
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
.ClearBtn {
    padding: 13px 33px;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 1.5px;
    text-align: center;
    text-transform: uppercase;
    color: var(--col-white);
    cursor: pointer;
    border-image-slice: 1;
    border-width: 3px;
    box-sizing: border-box;
    background-color: var(--col-clear);
    transition: all .4s;
}
.ClearBtn:hover{
    background-color: rgba(128, 128, 128, 0.185);
    backdrop-filter: blur(10px) opacity(50%);
}
</style>