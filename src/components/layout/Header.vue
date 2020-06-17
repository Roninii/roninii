<template>
    <header class="uppercase font-medium tracking-wide flex justify-between">
        <h1 class="text-primary">
            Ronini
        </h1>

        <nav>
            <ul class="grid md:grid-flow-col gap-4">
                <li>
                    <g-link active-class="text-primary" class="text-gray-700" to="/">Home</g-link>
                </li>
                <li>
                    <g-link active-class="text-primary" class="text-gray-700" to="/about"
                        >About</g-link
                    >
                </li>
                <li>
                    <g-link active-class="text-primary" class="text-gray-700" to="/portfolio"
                        >My Work</g-link
                    >
                </li>
                <li>
                    <g-link active-class="text-primary" class="text-gray-700" to="/contact"
                        >Contact</g-link
                    >
                </li>
                <li>
                    <g-link active-class="text-primary" class="text-gray-700" to="/blog"
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
