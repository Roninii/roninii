<template>
    <div class="min-h-screen grid items-center">
        <div class="grid md:grid-cols-2 gap-4 items-center">
            <h1 class="text-4xl text-center uppercase font-medium tracking-wide md:col-span-2">
                Let's build something
                <span class="text-primary">together</span>!
            </h1>
            <form class="md:col-span-2 md:w-1/3 mx-auto grid md:grid-cols-2 col-gap-2 row-gap-4">
                <BaseInput type="text" name="name" id="contactName" label="name" />
                <BaseInput type="email" name="email" id="contactEmail" label="email" />
                <label for="description" class="md:col-span-2 focus-within:text-secondary">
                    What do you have in mind?
                    <textarea
                        name="services description"
                        id="description"
                        cols="40"
                        rows="5"
                        class="bg-transparent p-2 w-full focus:outline-none rounded border-2 border-primary focus:border-secondary transition-all duration-300 transform focus:translate-y-1"
                    ></textarea>
                </label>
                <BaseButton class="col-span-2" text="Submit" @click.prevent="success = true" />
            </form>
        </div>
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
</style>