<template>
    <header class="header " :class="{ 'header_fixed': headerFixed, 'header_hide': headerHide }">


        <nav class="header__navbar" :class="{ 'header__navbar_active': showNavbar }">
            <router-link to="/" class="logo">
                <img class="logo__img" src="@/assets/logo.png" alt="logo">
                <p class="logo-text">VRNasral</p>
            </router-link>
            <button class="header__navbarBtn" @click="this.showNavbar = !this.showNavbar">
                <span class="header__navbarBtn-line " :class="{ 'header__navbar-line_1': showNavbar }"></span>
                <span class="header__navbarBtn-line " :class="{ 'header__navbar-line_2': showNavbar }"></span>
                <span class="header__navbarBtn-line " :class="{ 'header__navbar-line_3': showNavbar }"></span>
            </button>
            <div class="header__navbar-container">
                <button v-if="headerFixed" @click="goTop" class="header__up-btn">up</button>
                <router-link class="header__link" :class="{ 'header__link_active': $route.path === '/about' }" to="/about">
                    about</router-link>
                <router-link class="header__link" :class="{ 'header__link_active': $route.path === '/service' }"
                    to="/service">
                    service</router-link>
                <ClearBtn class="header__btn-style"> contact us</ClearBtn>
            </div>



        </nav>

    </header>
</template>

<script>
export default {
    name: 'HeaderAll',
    data() {
        return { headerFixed: false, prevScroll: 0, headerHide: false, showNavbar: false }


    },
    methods: {
        checkPos() {
            if (window.scrollY > 650) {
                this.headerFixed = true
                this.headerHide = this.prevScroll > window.scrollY
                if (this.headerHide, this.headerHide) {
                    this.showNavbar = false
                }
            } else {
                this.headerFixed = false
                this.headerHide = false
            }
            this.prevScroll = window.scrollY

        },
        goTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }

    },
    mounted() {
        window.addEventListener('scroll', () => { this.checkPos() })
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.checkPos)
    },
}
</script>
<style scoped lang="scss">
.header__btn-style {
    margin-left: auto;
}

.header {
    z-index: 1;
    position: absolute;
    top: 0;
    padding: 43px 15px;
    width: 100%;
    box-sizing: border-box;

    &_hide {
        transform: translateY(000);
    }

    &_fixed {
        padding: 20px 15px;
        position: fixed;
        top: -200px;
        transform: translateY(200px);
        backdrop-filter: blur(10px);
        background-color: rgba(36, 38, 46, 0.281);
        transition: transform .5s 0.5s;
        z-index: 6;

    }

    &__up-btn {
        background-image: url(@/assets/ui/arrow-small.svg);
        background-color: var(--col-clear);
        background-size: 20px 20px;
        background-position: left;
        padding: 0 0 0 22px;
        background-repeat: no-repeat;
        color: var(--col-white);
        border: none;
        overflow: hidden;
        max-width: 0;
        transition: max-width 0.5s;
        margin-right: auto;
        cursor: pointer;
        position: absolute;
        left: 50%;

        &:hover {
            max-width: 100px;
        }
    }


    &__navbar {
        &-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
        }

        max-width: var(--max-width);
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__navbarBtn {
        display: none;
    }

    &__link {
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        margin-left: 20px;
        color: var(--col-white);
        text-decoration: none;
        background-image: linear-gradient(246deg, var(--col-pink) 0%, var(--col-blue) 100%);
        background-position: bottom left;
        background-size: 0 2px;
        background-repeat: no-repeat;
        opacity: 0.5;
        transition: all 0.3s;

        &:first-of-type {
            margin-left: 30%;
        }

        &_active {
            opacity: 1;
            background-size: 100% 2px;
        }

        &:hover {
            opacity: 1;
            background-size: 100% 2px;
        }


    }



}

.logo {
    text-decoration: none;
    display: flex;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: all .5s;
    }

    &__img {
        width: 38px;
        height: 30px;
    }

    &-text {
        color: white;
        font-size: 25px;
        border: none;
        background: linear-gradient(103deg, rgba(255, 255, 255, 1) 31%, rgba(24, 24, 27, 0) 56%);
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    &:hover>.logo-text {
        background: linear-gradient(103deg, rgba(255, 255, 255, 1) 50%, rgba(24, 24, 27, 1) 100%);
        -webkit-text-fill-color: transparent;
        background-clip: text;

    }
}



@media screen and (max-width: 700px) {
    .header__navbar_active {
        max-height: 500px;
    }

    .header {
        padding: 15px 15px;
        backdrop-filter: blur(10px);
        background-color: rgba(36, 38, 46, 0.281);

        &__btn-style {
            margin-left: 0;
        }

        &__up-btn {
            left: 20%;
            top: 20%;
        }

        &__navbarBtn {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 5px;
            box-sizing: border-box;
            background-color: var(--col-clear);
            border: none;
            width: 50px;
            z-index: 10;
            opacity: 1;

            &-line {
                width: 100%;
                height: 5px;
                border-radius: 5px;
                background-color: var(--col-white);
                transition: all .5s;
            }
        }

        &__navbar {
            overflow: hidden;
            max-height: 45px;
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: min-content;
            transition: all .5s;

            &_active {
                max-height: 500px;
            }

            &-container {
                z-index: 4;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                grid-row: 2;
                grid-column: 1 /span 2;
                bottom: 0;
                left: 0;

            }

            &-line_1 {
                transform-origin: center left;
                transform: rotate(48deg);

            }

            &-line_2 {
                opacity: 0;

            }

            &-line_3 {
                transform-origin: center left;
                transform: rotate(-48deg);

            }
        }

        &__link {
            &:first-of-type {
                margin: 15px 0;
            }

            &:last-of-type {
                margin-left: 0;
                margin-bottom: 60px;
            }
        }

    }





}
</style>