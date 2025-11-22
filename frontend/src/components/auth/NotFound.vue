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
          <v-card-title class="text-center">SORRY PAGE NOT FOUND!</v-card-title>
          <router-link :to="{ name: 'login'}">login</router-link>
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
