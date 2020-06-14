<template>
  <div class="bg-gray-200 rounded">
    <Header />
    <nuxt />
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
