<script setup>
import { ref, computed } from "vue";
const emit = defineEmits(["setPerson"]);

const email = ref("");

const pf = ref(false);
const pj = ref(false);

const disabled = computed(() => {
  if(
    email.value.length > 0 &&
    (pf.value || pj.value)
  ) {
    return false
  } else {
    return true
  }
})

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
    type: pf.value ? 0 : 1
  }
  emit("setPerson", person);
  
}
</script>

<template>
  <h1 class="title mb-1">Seja bem-vindo(a)</h1>

  <label for="email">Endereço de Email</label>
  <input type="email" name="email" id="" v-model="email" />

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
      <Button text="Continuar" class="w-100" :disabled="disabled" @click="handleSetPerson" />
    </div>
  </div>
</template>
