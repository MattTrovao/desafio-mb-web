<script setup>
import { ref, computed, watchEffect } from "vue";
const emit = defineEmits(["setPerson"]);

const props = defineProps({
  data: {
    type: Object,
  },
});

const email = ref(props.data.email ? props.data.email : '');

const pf = ref(props.data.type == 0 ? true : false);
const pj = ref(props.data.type == 1 ? true : false);

const emailValid = computed(
  () => email.value.length === 0 || email.value.includes("@")
);

const disabled = computed(() => {
  if (email.value.length > 0 && (pf.value || pj.value)) {
    return false;
  } else {
    return true;
  }
});

const tooglePerson = (type, value) => {
  if (type == "pf") {
    if (value == false) {
      pf.value = true;
      pj.value = false;
    } else {
      pf.value = false;
      pj.value = false;
    }
  } else if (type == "pj") {
    if (value == false) {
      pf.value = false;
      pj.value = true;
    } else {
      pf.value = false;
      pj.value = false;
    }
  }
};

const handleSetPerson = () => {
  let person = {
    email: email.value,
    type: pf.value ? 0 : 1,
  };
  emit("setPerson", person);
};
</script>

<template>
  <h1 class="title mb-1">Seja bem-vindo(a)</h1>

  <label for="email">Endereço de Email</label>
  <input type="email" name="email" id="" v-model="email" />
  <p class="caption text-red" v-if="!emailValid">Digite um email valido</p>

  <div class="flex gap-1">
    <Checkbox
      text="Pessoa Física"
      v-model="pf"
      :checked="pf"
      @change="tooglePerson('pf', pf)"
    />
    <Checkbox
      text="Pessoa Jurídica"
      v-model="pj"
      :checked="pj"
      @change="tooglePerson('pj', pj)"
    />

    <div class="footer mt-2 w-100">
      <Button
        text="Continuar"
        class="w-100"
        :disabled="disabled"
        @click="handleSetPerson"
      />
    </div>
  </div>
</template>
