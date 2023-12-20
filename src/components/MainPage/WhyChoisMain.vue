<template>
   <SectionInfoGrid :reverse="true" image="Image3.png" :elementShow="elementShow" headingName="WHY CHOOSE US" heading="Why Choose Us for Your VR Needs">
    <ul class="chois__grid">
        <li class="chois__grid-el" :class="{ 'chois__grid-el_active': this.showedEl === 'elOne' }">
            <button class="chois__grid-el-btn" :disabled="this.showedEl === 'elOne'" id="elOne"
                @click="(e) => { showMore(e.target.id) }">Passionate and Experienced Team <span
                    class="chois__grid-el-btn-arrow"
                    :class="{ 'chois__grid-el-btn-arrow_active': this.showedEl === 'elOne' }"></span></button>
            <p class="chois__grid-el-text">
                We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
                highest quality work. Our team consists of experienced VR developers, designers, and technicians who
                have a proven track record of creating immersive and engaging VR experiences.
            </p>
        </li>
        <li class="chois__grid-el" :class="{ 'chois__grid-el_active': this.showedEl === 'elTwo' }">
            <button class="chois__grid-el-btn" :disabled="this.showedEl === 'elTwo'" id="elTwo"
                @click="(e) => { showMore(e.target.id) }">Customized Solutions <span
                    class="chois__grid-el-btn-arrow"
                    :class="{ 'chois__grid-el-btn-arrow_active': this.showedEl === 'elTwo' }"></span></button>
            <p class="chois__grid-el-text">
                We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
                highest quality work. Our team consists of experienced VR developers, designers, and technicians who
                have a proven track record of creating immersive and engaging VR experiences.
            </p>
        </li>
        <li class="chois__grid-el" :class="{ 'chois__grid-el_active': this.showedEl === 'elThree' }">
            <button class="chois__grid-el-btn" :disabled="this.showedEl === 'elThree'" id="elThree"
                @click="(e) => { showMore(e.target.id) }">Exceptional
                Customer Service<span class="chois__grid-el-btn-arrow"
                    :class="{ 'chois__grid-el-btn-arrow_active': this.showedEl === 'elThree' }"></span></button>
            <p class="chois__grid-el-text">
                We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the
                highest quality work. Our team consists of experienced VR developers, designers, and technicians who
                have a proven track record of creating immersive and engaging VR experiences.
            </p>
        </li>
    </ul>
   </SectionInfoGrid>
</template>

<script>
import SectionInfoGrid from '../sections/SectionInfoGrid.vue';

export default {
    name: 'WhyChoisMain',
    data() {
        return { showedEl: null, elementShow: false }
    },
    methods: {
        showMore(e) {
            this.showedEl = e
        }
    },
    watch: {
        currentPos(newCurrentPos) {
            
            if(newCurrentPos >= this.$el.offsetTop / 1.26){
                this.elementShow = true
            }

        }
    },
    props: ['currentPos'],
    components: {  SectionInfoGrid }
}
</script>

<style scoped lang="scss">
.chois {
    max-width: var(--max-width);
    margin: 150px auto 0;
    display: flex;
    justify-content: space-between;

   

    &__grid {
        list-style: none;
        padding: 0;
        margin: 0;


        &-el {
            max-height: 45px;
            overflow: hidden;
            transition: max-height .5s;

            &-text {
                margin-top: 12px;
                color: var(--col-grey);
                font-size: 16px;
                font-weight: 400;
                line-height: 28px;

            }

            &_active {
                max-height: 500px;
            }

            &-btn {
                width: 100%;
                display: flex;
                justify-content: space-between;
                background-color: var(--col-clear);
                border: none;
                color: white;
                border-bottom: 2px solid var(--col-grey-dark);
                padding: 0 0 12px;
                margin: 5px 0 0;
                box-sizing: border-box;
                font-size: 20px;
                font-weight: 500;
                line-height: 26px;

                background-image: linear-gradient(246deg, var(--col-pink) 0%, var(--col-blue) 100%);
                background-position: bottom left;
                background-repeat: no-repeat;
                background-size: 0 2px;
                transition: all .5s;

                &:disabled {
                    background-size: 100% 2px;
                }

                &-arrow {
                    width: 10px;
                    height: 10px;
                    background-image: url(@/assets/ui/arrow-small.svg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    transition: all .5s;

                    &_active {
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }

    
    @media screen and (max-width: 700px) {
 .chois__grid-el-btn{
    font-size: 15px;
 }       
    }
}
</style>