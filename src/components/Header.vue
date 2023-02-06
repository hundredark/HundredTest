<template>
  <div>
    <div>
      <template v-for="(tag, i) in menu" :key="i">
        <RouterLink :to="tag.to">{{ tag.text }}</RouterLink>
      </template>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const menu = [
  {
    text: '多签',
    to: '/multisig'
  }
];
</script>