<script setup>
const props = defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button :class="`btn ${outline ? 'outline' : ''}`" :disabled="disabled">
    {{ text }}
  </button>
</template>

<style lang="css" scoped>
.btn {
  border-radius: var(--radius);
  background: var(--orange-400);
  border: 2px solid var(--orange-400);
  color: var(--white);
  font-size: 0.9rem;
  transition: var(--transition);
  padding: 10px 1rem;

  &:not(:disabled) {
    &:hover {
      background: var(--orange-800);
    }
  }

  &.outline {
    background: transparent;
    color: var(--blue);

    &:not(:disabled) {
      &:hover {
        background: var(--orange-200);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--gray);
    border-color: var(--blue);
    color: var(--blue);
    opacity: 0.5;
  }
}
</style>
