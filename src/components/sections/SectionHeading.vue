<template>
    <section class="heading">
        <gradientBg></gradientBg>
        <h1 class="header">{{ heading }}</h1>
        <nav class="header__nav">
            <router-link v-for="(item, index) in currentPath" :key="index" class="heading__nav-link" :to="`/${item}`">{{
                item !== '' ? item : 'homepage' }}</router-link>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'SectionHeading',
    computed: {
        currentPath() { return window.location.pathname.split('/') }

    },
    props: [
        'heading'
    ]

}
</script>
<style scoped>
.heading {
    position: relative;
    max-width: var(--max-width);
    margin: auto;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 30px;
}

.heading__nav-link {
    text-decoration: none;
    color: white;
    font-size: 20px;
}

.heading__nav-link::after {
    content: ' / ';
}

.heading__nav-link:last-of-type {
    opacity: 0.3;
    pointer-events: none;
    cursor: default;

}

.heading__nav-link:last-of-type::after {
    content: '';

}
</style>