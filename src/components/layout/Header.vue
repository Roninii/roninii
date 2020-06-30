<template>
    <header class="py-4 uppercase text-lg font-medium tracking-wide flex justify-between">
        <g-link to="/" class="text-primary">Ronini.dev</g-link>

        <nav class="text-right relative">
            <NavButton :menu="!navHidden" @click="navHidden = !navHidden" class="-mr-4 sm:hidden" />
            <ul
                :class="{'hidden': navHidden}"
                class="absolute right-0 sm:relative sm:grid sm:grid-flow-col gap-4 text-gray-600 text-right"
            >
                <li>
                    <g-link
                        class="hover:text-primary relative z-10"
                        active-class="text-primary"
                        to="/"
                        exact
                    >Home</g-link>
                </li>
                <li>
                    <g-link
                        class="hover:text-primary relative z-10"
                        active-class="text-primary"
                        to="/portfolio"
                    >My Work</g-link>
                </li>
                <li>
                    <g-link
                        class="hover:text-primary relative z-10"
                        active-class="text-primary"
                        to="/contact"
                    >Contact</g-link>
                </li>
                <li>
                    <g-link
                        class="hover:text-primary relative z-10"
                        active-class="text-primary"
                        to="/blog"
                    >Blog</g-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    components: {
        NavButton: () => import('./NavButton.vue'),
    },
    data() {
        return {
            navHidden: true,
        };
    },
};
</script>

<style scoped>
li > a::before {
    content: '';
    height: 2px;
    z-index: -1;
    bottom: 0;
    background-image: linear-gradient(to right, #6200ee, #04dac6);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    @apply absolute;
    @apply transition-all;
    @apply duration-200;
    @apply ease-linear;
    @apply w-full;
}

li > a:hover::before {
    background-size: 100% 100%;
}
</style>
