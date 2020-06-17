<template>
    <header class=" py-4 uppercase font-medium tracking-wide flex justify-between">
        <h1 class="text-primary">
            <g-link to="/">
                Ronini
            </g-link>
        </h1>

        <nav>
            <ul class="grid md:grid-flow-col gap-4 text-gray-600">
                <li>
                    <g-link class="hover:text-primary" active-class="text-primary" to="/" exact
                        >Home</g-link
                    >
                </li>
                <li>
                    <g-link class="hover:text-primary" active-class="text-primary" to="/about"
                        >About</g-link
                    >
                </li>
                <li>
                    <g-link class="hover:text-primary" active-class="text-primary" to="/portfolio"
                        >My Work</g-link
                    >
                </li>
                <li>
                    <g-link class="hover:text-primary" active-class="text-primary" to="/contact"
                        >Contact</g-link
                    >
                </li>
                <li>
                    <g-link class="hover:text-primary" active-class="text-primary" to="/blog"
                        >Blog</g-link
                    >
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped></style>
