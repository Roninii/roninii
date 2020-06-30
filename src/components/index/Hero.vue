<template>
    <article class="text-center uppercase h-screen flex flex-col justify-center items-center">
        <div>
            <h1 class="name leading-none uppercase tracking-wide">
                <span class="text-primary neon">Ron</span>nie
                <br />Villar
                <span class="text-primary neon">ini</span>
            </h1>
            <h2 class="text-gray-500">Front End Developer / Freelancer / Star Wars Nerd</h2>
        </div>
        <g-link
            class="action button bg-primary px-8 py-4 my-8 text-xl uppercase font-medium rounded"
            to="/contact"
        >Get In Touch</g-link>
    </article>
</template>

<script>
export default {
    name: 'Hero',
};
</script>

<style scoped>
.name {
    font-size: 6rem;
}
.action {
    transition: all 500ms ease-in-out;
    position: relative;
}

.action::before {
    content: '';
    position: absolute;
    z-index: -1;
    @apply bg-primary;
    @apply h-full;
    @apply w-full;
    @apply inset-0;
    @apply rounded;
}

.action:hover {
    transform: translateY(-5px) scale(1.1);
}

.action:hover::before {
    animation: 600ms ease-in-out pulse;
}

.neon {
    animation: 2s ease-in-out neon forwards;
}

@keyframes pulse {
    from {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(1.3);
        opacity: 0;
    }
}

@keyframes neon {
    0% {
        opacity: 0;
        text-shadow: 0 0 60px #7e4ed2;
    }

    20% {
        opacity: 0.1;
    }

    23% {
        opacity: 0;
    }
    26% {
        opacity: 0.15;
        text-shadow: 0 0 60px #7e4ed2;
    }
    30% {
        opacity: 0;
    }
    35% {
        opacity: 0.2;
        text-shadow: 0 0 60px #7e4ed2;
    }
    38% {
        opacity: 0.1;
        text-shadow: 0 0 60px #7e4ed2;
    }
    100% {
        opacity: 1;
        text-shadow: 0 0 60px #7e4ed2;
    }
}
</style>