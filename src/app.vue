<script setup lang="ts">
import ErrorBoundary from './features/errors/ErrorBoundary.vue'

import '~/styles/main.scss'
</script>

<template>
  <error-boundary>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </error-boundary>
</template>
