<template>
    <a ref="watchedEl" :href="link" class="link" target="_blank"
        :style="{ borderImageSource: `linear-gradient(${this.cursorPos}deg, var(--col-pink) 0%, var(--col-blue) 100%)` }"
        @mousemove="(e) => mousefunc(e)">
        <img class="link__img" :src="imglink" :alt="link">
    </a>
</template>

<script>
import mouseMove from '@/utils/mouseMove.js'
export default {
    name: 'ColoredLink',
    data() {
        return { cursorPos: '246' }
    },
    computed: {
        imglink() {
            return require(`@/assets/social/${this.img}.svg`)
        }
    },

    methods: {
        mousefunc(e) {
            this.cursorPos = mouseMove(e, this.$refs.watchedEl)
        }
    },
    props: {
        link: { String },
        img: { String }
    }
}
</script>

<style scoped>
.link {


    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    border: 3px solid;
    border-image-slice: 1;
    box-sizing: border-box;


}

.link__img {
    width: 65%;
    height: 65%;
}
</style>