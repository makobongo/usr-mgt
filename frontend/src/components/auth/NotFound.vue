<template>
  <v-container fluid>
    <v-row>
      <!-- Login Section -->
      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <router-link :to="{ name: 'login'}">
          <v-chip class="ma-2" color="success" variant="outlined">
          <v-icon icon="mdi-information-outline" start></v-icon>
          SORRY PAGE NOT FOUND!
        </v-chip>
        </router-link>
      </v-col>

      <!-- Carousel Section (visible only on large screens) -->
      <Carousel />
    </v-row>
  </v-container>
</template>

<script setup>
import { Carousel } from "../includes";
</script>
