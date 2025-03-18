<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

const step = ref(1);

const user = ref({});
const type = ref("");

const updateUser = (value) => {
  user.value = { ...user.value, ...value };

  if (step.value == 1) {
    type.value = value.type;
  }

  console.log("user", user.value);

  step.value = step.value + 1;
};

const createPerson = (value) => {
  localStorage.setItem("user", value);

  Swal.fire({
    title: "Usuário cadastrado",
    html: `O usuário <b>${value.email}</b> foi cadastrado com sucesso!`,
    icon: "success",
    confirmButtonText: "Fechar",
  }).then((result) => {
    step.value = 1
  });
};

const backStep = () => {
  step.value = step.value - 1;
};
</script>

<template>
  <Page>
    <Card size="small">
      <FormStep :total="4" :current="step" />

      <Person v-if="step == 1" @setPerson="updateUser" />
      <About
        v-if="step == 2"
        :type="type"
        @back="backStep"
        @setPerson="updateUser"
      />
      <Password v-if="step == 3" @back="backStep" @setPerson="updateUser" />
      <Revision
        v-if="step == 4"
        :type="type"
        :user="user"
        @back="backStep"
        @createPerson="createPerson"
      />
    </Card>
  </Page>
</template>

<style scoped></style>
