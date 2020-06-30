<template>
    <div class="base-input">
        <input :type="type" class="relative w-full bg-gray-900 py-2 focus:outline-none z-10" />
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        type: {
            type: String,
            default: 'text',
        },
    },
};
</script>

<style scoped>
.base-input {
    padding: 0.1rem;
    position: relative;
    z-index: 1;
    background-image: linear-gradient(#6200ee, #6200ee);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 95% 90%;
}

.base-input::after {
    content: ' ';
    position: absolute;
    z-index: -1;
    height: 2px;
    background-image: linear-gradient(to right, #6200ee, #04dac6);
    background-position: 0% 50%;
    background-repeat: no-repeat;
    background-size: 0% 90%;
    transition: all 500ms ease-in-out;
    right: 0;
    bottom: 0;
    left: 0;
    @apply rounded;
}

.base-input:focus-within::after {
    background-size: 100% 75%;
}
</style>