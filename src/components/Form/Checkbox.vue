<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  checked: {
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
  }
});
</script>

<template>
  <label class="check">
    <input 
      type="checkbox" 
      :checked="props.checked" 
      :disabled="props.disabled"
      autocomplete="off" 
    />
    <span class="checkmark"></span>
    
    <span class="text">
      {{ text }}
    </span>
  </label>
</template>

<style scoped lang="scss">
.check {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: .5rem;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked~.checkmark {
      background-color: var(--orange-400);


      &:after {
        display: block;
      }
    }
    &:disabled~.checkmark {
      background-color: var(--gray);
      border: 1px solid var(--gray);
      cursor: not-allowed;
    }
  }

  .checkmark {
    height: 25px;
    width: 25px;
    background-color: var(--white);
    border: 1px solid var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    overflow: hidden;
    border-radius: var(--radius);
    cursor: pointer;

    &:after {
      content: "";
      display: none;
      width: 5px;
      height: 10px;
      border: solid var(--blue);
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  

  &:hover input~.checkmark {
    background-color: var(--orange-200);
  }
}
</style>