<script setup lang="ts">
import ErrorBoundary from './features/errors/ErrorBoundary.vue'

import '~/styles/main.scss'
</script>

<template>
  <error-boundary>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </error-boundary>
</template>
