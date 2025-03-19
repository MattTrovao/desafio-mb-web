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

  step.value = step.value + 1;
};

const createPerson = async (value) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/registration`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      }
    );

    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    Swal.fire({
      title: "Usuário cadastrado",
      html: data.message,
      icon: "success",
      confirmButtonText: "Fechar",
    }).then((result) => {
      step.value = 1;
    });

    user.value = {};
  } catch (error) {
    Swal.fire({
      title: "Um erro inesperado ocorreu",
      html: "Por favor tente novamente mais tarde ou fale com nossa equipe de suporte pelo número <br> (41)99999-9999",
      icon: "error",
      confirmButtonText: "Fechar",
    });
  }
};

const backStep = () => {
  step.value = step.value - 1;
};
</script>

<template>
  <Page>
    <Card size="small">
      <FormStep :total="4" :current="step" />

      <Person v-if="step == 1" @setPerson="updateUser" :data="user" />
      <About
        v-if="step == 2"
        :type="type"
        @back="backStep"
        @setPerson="updateUser"
        :data="user"
      />
      <Password
        v-if="step == 3"
        @back="backStep"
        @setPerson="updateUser"
        :data="user"
      />
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
