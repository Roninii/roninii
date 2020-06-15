<template>
  <div class="bg-gray-200 min-h-screen rounded">
    <Header />
    <div class="min-h-screen px-8 py-4">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '@/components/layoutComponents/Header'

export default {
  name: 'Default',
  components: {
    Header
  }
}
</script>
