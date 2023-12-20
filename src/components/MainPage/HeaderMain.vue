<template>
    <section>
        <div class="header__grid">
            <h1 class="header__heading section-heading">Immerse Yourself in Virtual Reality</h1>
            <p class="header__sub section-sub">Experience Unforgettable Events in VR. Bring your events to life like never before with
                our VR services</p>
            <ColoredBtn>discover more</ColoredBtn>
            <div class="clients">
                <div class="clients__img">
                    <img class="clients__img-el" src="@/assets/man/man1.png" alt="man1">
                    <img class="clients__img-el" src="@/assets/man/man2.png" alt="man1">
                    <img class="clients__img-el" src="@/assets/man/man3.png" alt="man1">
                </div>
                <p class="clients__img-text"><strong>32k+</strong> Happy Client</p>

            </div>
        </div>
        <div class="header__img-wrapper">
            <img class="header__img" src="@/assets/images/Image1.png" alt="image1">
            <GradientBg></GradientBg>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeaderMain'
}
</script>

<style scoped lang="scss">
section {

    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 100%;

    padding-top: 132px;
}

.header {

    &__grid {
        margin-top: 87px;
    }

    &__sub {
 
        max-width: 85%;
        margin-bottom: 32px;
    }

    &__img {
        width: 100%;
        height: 100%;

        &-wrapper {
            max-width: 526px;
            width: 50vw;
            max-height: 626px;
            height: 60vw;
            position: relative;
            align-self: flex-end;
        }
    }
}

.clients {
    display: flex;
    margin-top: 81px;

    align-items: center;

    &__img {

        &-el {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid black;
            object-position: center;
            object-fit: cover;
            margin: 0;
            transform: translateX(-15px);

            &:first-of-type {
                transform: translateX(0);
            }

            &:last-of-type {
                transform: translateX(-30px);
            }
        }

        &-text {
            font-size: 16px;
            font-weight: 300;
            line-height: 28px;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                width: 48px;
                height: 8px;
                background-image: url(@/assets/ui/underline.svg);
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                bottom: 0;
                left: 0;

            }
        }
    }
}
@media screen and (max-width: 700px) {
    .header__img-wrapper{
        display: none;
    }
    section {
       display: block;
    }
    
}
</style>