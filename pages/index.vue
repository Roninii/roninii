<template>
  <div class="container">
    <article class="grid gap-6 md:w-3/4">
      <section>
        <h2 class="text-5xl text-gray-800">
          Hi! My name is
          <span class="text-primary">Ron</span>nie Villar<span
            class="text-primary"
            >ini</span
          >
        </h2>
        <p class="text-gray-600 text-lg">
          I'm a full stack developer from Mattoon, Illinois.
        </p>
      </section>
      <h3 class="text-3xl text-gray-800">
        I breathe life into your business and build software your users will
        actually enjoy using.
      </h3>
    </article>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  display: grid;
  place-items: center center;
  @apply min-h-screen px-8 py-4;
}
</style>
