<template>
  <v-container fluid>
    <v-row>
      <!-- Login Section -->
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center align-center"
      >
        <v-card class="pa-5" width="400">
          <v-card-title class="text-center">Login</v-card-title>
          <v-form @submit.prevent="loginUser">
            <v-text-field label="Username or Email" v-model="form.email" variant="outlined" density="compact" required autofocus prepend-inner-icon="mdi-account-circle" />
            <v-text-field label="Password" type="password" v-model="form.password" variant="outlined" density="compact" required prepend-inner-icon="mdi-lock" />
            <v-btn color="primary" block variant="flat" @click="loginUser">Login</v-btn>
            <router-link :to="{ name: 'register'}">Register</router-link>
          </v-form>
        </v-card>
      </v-col>

      <!-- Carousel Section (visible only on large screens) -->
      <Carousel />
    </v-row>
  </v-container>
</template>

<script setup>
import { Carousel } from '../includes';
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
  email: '',
  password: '' 
})
const loginUser = async() => {
  try {
    const res = await axios.post('http://localhost:3001/api/auth/login', form.value)
    console.log(res.data)
  //  return res.data;
  } catch (error) {
    console.log(error)
  }
}
</script>
