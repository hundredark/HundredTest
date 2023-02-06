<template>
  <Header />
  <div class="mt-20">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<style scoped>
</style>
