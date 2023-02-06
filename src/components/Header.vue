<template>
  <div>
    <div>
      <template v-for="(tag, i) in routes" :key="i">
        <RouterLink v-if="!!tag.name" :to="tag.path" class="ml-6">{{ tag.name }}</RouterLink>
      </template>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { routes } from '../router';
</script>