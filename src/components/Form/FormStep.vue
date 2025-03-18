<script setup>
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    required: true,
    default: 1,
  },
});
</script>

<template>
  <p class="caption mb-2">
    Etapa
    <span class="text-orange-400">
      {{ current }}
    </span>
    de {{ total }}
  </p>
</template>
