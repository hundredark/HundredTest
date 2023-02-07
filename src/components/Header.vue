<template>
  <div>
    <div>
      <template v-for="(tag, i) in router.routes" :key="i">
        <RouterLink v-if="!!tag.name" :to="tag.path" class="ml-6">{{ tag.name }}</RouterLink>
      </template>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { router } from '../router';
</script>