<template>
  <div class="bg-gray-200">
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
