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
          <v-card-title class="text-center">Register</v-card-title>
          <v-form>
            <v-text-field label="Name"  variant="outlined" density="compact" required prepend-inner-icon="mdi-account-star"/>
            <v-text-field label="Email"  variant="outlined" density="compact" required prepend-inner-icon="mdi-account-circle"/>
            <v-text-field label="Phone"  variant="outlined" density="compact" required prepend-inner-icon="mdi-phone"/>
            <v-text-field label="Password" type="password" variant="outlined" density="compact" required prepend-inner-icon="mdi-lock"/>
            <v-btn color="primary" block variant="flat">Login</v-btn>
            <router-link :to="{ name: 'login'}">login</router-link>
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
</script>
