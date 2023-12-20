<template>
    <li class="team__grid-el"  @mouseleave=" this.mouseX = 0, this.mouseY = 0" @mousemove="(e) => { moveEl(e) }">
        <div :style="{ transform: ` perspective(800px) rotateX(${mouseY}deg) rotateY(${mouseX}deg) ` }" class="team__grid-el-item"
           >
            <img class="team__grid-el-item-img" :src="item.img" :alt="item.name">
            <div class="team__grid-el-item-text">
                <h6 class="team__grid-el-item-text-name">{{ item.name }}</h6>
                <p class="team__grid-el-item-text-job">{{ item.job }}</p>

            </div>
        </div>



    </li>
</template>

<script>
export default {
    name: 'TeamItem',
    data() {
        return { mouseX: 0, mouseY: 0 }
    },
    methods: {
        moveEl(event) {

            const rect = this.$el.getBoundingClientRect();

            // позиция курсора отнеосительно вьюпорта - позиция элемента относительно вьюпорта 
            // получаемая разница это положение курсора на элементе по осям
            const offsetX = (event.clientX - rect.x - (rect.width /2)) / 20;
            const offsetY = (event.clientY - rect.y - (rect.height /2)) / 20;
            // положение курсора относительно центра
          /*   const percentX = offsetX / rect.width - 0.5;
            const percentY = offsetY / rect.height - 0.5;

            const tiltX = percentY * 20;
            const tiltY = -percentX * 20; */

            this.mouseY = offsetY
            this.mouseX = offsetX
        }
    },
    props: ['item']
}
// 
</script>

<style scoped lang="scss">
.team__grid-el {
    max-width: 280px;
    margin: auto;
    max-height: 380px;
    box-sizing: border-box;
    &-item {
        position: relative;
        transition: all 0.2s ease-out;
        overflow: hidden;
       
        &:hover .team__grid-el-item-text{
            transform: translateY(0);
        }


        &-img {
            width: 100%;
            height: 100%;
        }

        &-text {
            position: absolute;
            padding-top: 50px;
            padding-bottom: 20px;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(180deg, rgba(50, 70, 188, 0) 0%, #232533 100%);
            text-align: center;
            transform: translateY(100%);
            transition: all 0.2s ease-out;
            &-name {
                font-size: 16px;
                font-weight: 600;
                line-height: 28px;

            }

            &-job {

                font-size: 12px;
                font-weight: 400;
                line-height: 20px;
                color: var(--col-grey);

            }
        }
    }
}</style>