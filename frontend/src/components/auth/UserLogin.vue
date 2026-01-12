<template>
  <v-container fluid>
    <v-row>
      <!-- Login Section -->
      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <v-card class="pa-5" width="400">
          <v-card-title class="text-center">Login</v-card-title>
          <v-form @submit.prevent="loginUser">
            <v-text-field
              label="Username or Email"
              v-model="form.email"
              variant="outlined"
              density="compact"
              required
              autofocus
              prepend-inner-icon="mdi-account-circle"
            />
            <v-text-field
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              variant="outlined"
              density="compact"
              required
              prepend-inner-icon="mdi-lock"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showPassword = !showPassword"
            />
            <v-btn color="primary" block variant="flat" @click="loginUser"
              >Login</v-btn
            >
            <p style="font-size: 12px;margin-top: 5px;">
              Dont't have account? <router-link :to="{ name: 'register'}">register</router-link>
            </p>
          </v-form>
        </v-card>
      </v-col>

      <!-- Carousel Section (visible only on large screens) -->
      <Carousel />
    </v-row>
  </v-container>
</template>

<script setup>
import { Carousel } from "../includes";
import { ref } from "vue";
import { createUser } from "@/api/auth/login";
import { inject } from "vue";
const swal = inject("$swal");

const showPassword = ref(false);
const form = ref({
  email: "",
  password: "",
});
const loginUser = async () => {
  if (form.value.email == "" || form.value.password == "") {
    swal.fire({
      title: "NO CREDENTIALS PROVIDED!",
      text: "Kindly provide your credentials",
      icon: "info",
    });
  } else {
    try {
      const res = await createUser(form.value);
      console.log("message:", res.data);
    } catch (error) {
      console.log(error.response.data.message);
      if (error.status == 404) {
        swal.fire({
          title: "Sorry!",
          text: error.response.data.message,
          icon: "error",
        });
      } else {
        swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          width: "400px",
        });
      }
    }
  }
};
</script>
