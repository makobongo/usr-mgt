<script setup></script>

<template>
   <div>
    <!-- <router-link :to="{ name: 'login'}">Login</router-link>
    <router-link :to="{ name: 'register'}">Register</router-link> -->
    <router-view></router-view>
    <div style="text-align: center;">
      Copyright © {{ new Date().getFullYear() }} <br>
      <a href="https://sbong.xyz" target="_blank">sbong.xyz</a>
    </div>
  </div>
</template>

<style scoped></style>
