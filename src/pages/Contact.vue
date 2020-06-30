<template>
    <div class="min-h-screen grid md:grid-cols-2 gap-4 items-center">
        <h1 class="text-4xl text-center uppercase font-medium tracking-wide md:col-span-2">
            Let's build something
            <span class="text-primary">together</span>!
        </h1>
        <form class="md:col-span-2 md:w-1/3 mx-auto grid md:grid-cols-2 col-gap-2 row-gap-4">
            <BaseInput type="text" name="name" />
            <BaseInput type="email" name="email" />
            <textarea
                name="services description"
                id
                cols="40"
                rows="5"
                class="rounded bg-transparent md:col-span-2 border border-primary focus:outline-none"
            ></textarea>
            <BaseButton class="col-span-2" text="Submit" @click.prevent="success = true" />
        </form>
        Sent: {{ success }}
    </div>
</template>

<script>
export default {
    name: 'Contact',
    components: {
        BaseButton: () => import('@/components/base/BaseButton.vue'),
        BaseInput: () => import('@/components/base/BaseInput.vue'),
    },
    data() {
        return {
            success: false,
        };
    },
};
</script>

<style scoped>
textarea:focus {
    box-shadow: 0 0 3px 1px #7e4ed2;
}
</style>