<template>
    <div>
        <Hero />
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'Home',
    },
    components: {
        Hero: () => import('~/components/index/Hero.vue'),
    },
};
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
