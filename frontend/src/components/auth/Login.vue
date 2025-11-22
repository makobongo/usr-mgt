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
          <v-form>
            <v-text-field label="Username or Email"  variant="outlined" density="compact" required />
            <v-text-field label="Password" type="password" variant="outlined" density="compact" required />
            <v-btn color="primary" block variant="flat">Login</v-btn>
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
