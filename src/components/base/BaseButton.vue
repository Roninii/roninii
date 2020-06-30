<template>
    <button
        class="action button bg-primary px-4 py-2 my-8 uppercase font-medium rounded"
        v-on="$listeners"
    >{{ text }}</button>
</template>

<script>
export default {
    name: 'BaseButton',
    inheritAttrs: false,
    props: {
        text: {
            type: String,
            default: 'Submit',
        },
    },
};
</script>

<style lang="scss" scoped>
</style>