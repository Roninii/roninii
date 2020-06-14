<template>
  <header class="header flex justify-between py-4 px-8 uppercase">
    <h1>
      <nuxt-link to="/" class="text-primary text-xl font-medium tracking-wide">
        Ronini
      </nuxt-link>
    </h1>

    <ul class="grid grid-flow-col gap-4">
      <li>
        <nuxt-link
          to="/"
          class="font-medium text-gray-600 transition-colors duration-200 ease-linear hover:text-primary"
          active-class="text-primary"
          >Home</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/about"
          class="font-medium text-gray-600 transition-colors duration-200 ease-linear hover:text-primary"
          active-class="text-primary"
          >About</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/portfolio"
          class="font-medium text-gray-600 transition-colors duration-200 ease-linear hover:text-primary"
          active-class="text-primary"
          >Work</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/contact"
          class="font-medium text-gray-600 transition-colors duration-200 ease-linear hover:text-primary"
          active-class="text-primary"
          >Contact</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/blog"
          class="font-medium text-gray-600 transition-colors duration-200 ease-linear hover:text-primary"
          active-class="text-primary"
          >Blog</nuxt-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
