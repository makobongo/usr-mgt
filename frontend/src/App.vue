<script setup></script>

<template>
   <div>
    <router-link :to="{ name: 'login'}">Login</router-link>
    <router-link :to="{ name: 'register'}">Register</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
