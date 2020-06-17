<template>
    <div class="bg-gray-200 min-h-screen rounded px-8">
        <Header />
        <slot />
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '~/components/layout/Header.vue';

export default {
    name: 'Layout',
    components: {
        Header,
    },
};
</script>
