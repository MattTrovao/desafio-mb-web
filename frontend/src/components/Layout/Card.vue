<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <section :class="`card ${size}`">
    <slot />
  </section>
</template>

<style scoped>
.card {
  background: var(--white);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  padding: 1rem;
  width: 90%;
  margin: 0 auto;

  &.full {
    max-width: 1280px;
  }
  &.medium {
    max-width: 800px;
  }
  &.small {
    max-width: 600px;
  }
}
</style>
