<template>
    <div class="gradient">

    </div>
</template>

<script>
export default {
    name: 'GradientBg'
}
</script>

<style scoped>

.gradient{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(203deg, rgba(202,106,235,0) 0%, rgba(202,106,235,0.8141631652661064) 34%, rgba(25,181,241,0.7637429971988796) 74%, rgba(25,181,241,0) 100%);    animation: gradient 5s ease infinite;
    backdrop-filter: blur(10px);
    animation: gradient 5s ease infinite;
    background-size: 400% 400%;
}
@keyframes gradient {
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
    
}
</style>

<!--    background: linear-gradient(288deg, rgba(202,106,235,0) 0%, rgba(202,106,235,1) 25%, rgba(25,181,241,1) 72%, rgba(25,181,241,0) 100%); -->