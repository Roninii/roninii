<template>
    <div class="base-input">
        <label :for="id" v-if="label">{{label}}</label>
        <input
            :id="id"
            :type="type"
            :name="name"
            class="relative w-full bg-gray-900 py-2 px-2 focus:outline-none"
        />
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
        name: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
        },
    },
};
</script>

<style scoped>
.base-input {
    position: relative;
}
.base-input::after {
    position: absolute;
    content: ' ';
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 2px;
    @apply bg-primary;
    @apply rounded;

    transition: all 300ms linear;
}

.base-input:focus-within label {
    @apply text-secondary;
}
.base-input:focus-within::after {
    @apply bg-secondary;
    transform: translateY(5px);
}
</style>