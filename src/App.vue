<template>
    <Layout>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </Layout>
</template>

<script>
export default {};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
    transition-duration: 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>