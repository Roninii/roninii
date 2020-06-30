<template>
    <div class="min-h-screen grid md:grid-cols-2 gap-4">
        <h1 class="text-4xl uppercase font-medium tracking-wide md:col-span-2">
            Let's build something
            <span class="text-primary">together</span>!
        </h1>
        <form>
            <input type="text" class="border-2 border-primary rounded bg-transparent" />
            <input type="email" class="border-2 border-primary rounded bg-transparent" />
            <textarea
                name
                id
                cols="40"
                rows="5"
                class="border-2 border-primary rounded bg-transparent md:col-span-2"
            ></textarea>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Contact',
};
</script>

<style scoped>
</style>