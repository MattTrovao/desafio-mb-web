<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["setPerson", "back"]);

const props = defineProps({
  type: {
    type: Number,
    required: true,
  },
});

const name = ref("");
const document = ref("");
const date = ref("");
const phone = ref("");

const disabled = computed(() => {
  if (
    name.value.length > 0 &&
    (
      (props.type === 0 && document.value.length === 14) ||
      (props.type === 1 && document.value.length === 18)
    ) &&
    date.value.length > 0 &&
    phone.value.length > 0
  ) {
    return false;
  } else {
    return true;
  }
});

const handleSetPerson = () => {
  let userData = {
    name: name.value,
    document: document.value,
    date: date.value,
    phone: phone.value,
  };

  emit("setPerson", userData);
};
</script>

<template>
  <h1 class="title mb-1">
    Pessoa
    <template v-if="type == 0"> Física </template>
    <template v-else> Jurídica </template>
  </h1>

  <div class="flex column gap-1">
    <div class="item">
      <label for="name" v-if="type == 0">Nome</label>
      <label for="name" v-else>Razão Social</label>
      <input type="text" name="name" v-model="name" />
    </div>
    <div class="item">
      <label for="document" v-if="type == 0">CPF</label>
      <label for="document" v-else>CNPJ</label>
      <input
        type="text"
        name="document"
        v-model="document"
        v-mask="['###.###.###-##', '##.###.###/####-##']"
      />
    </div>
    <div class="item">
      <label for="date" v-if="type == 0">Data de Nascimento</label>
      <label for="date" v-else>Data de Abertura</label>
      <input type="date" name="date" v-model="date" />
    </div>
    <div class="item">
      <label for="phone">Telefone</label>
      <input
        type="text"
        name="phone"
        v-model="phone"
        v-mask="['(##) ####-####', '(##) #####-####']"
      />
    </div>
  </div>

  <div class="footer flex space-between mt-2 w-100">
    <Button text="Voltar" class="auto" :outline="true" @click="$emit('back')" />
    <Button
      text="Continuar"
      class="auto"
      :disabled="disabled"
      @click="handleSetPerson"
    />
  </div>
</template>
