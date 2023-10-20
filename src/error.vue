<script setup lang="ts">
defineProps<{
  error: {
    url: string
    statusCode: number
    statusMessage: string
    message: string
    description: string
    data: any
  }
}>()
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div v-if="error.statusCode === 404" class="p-4">
      <img src="~/assets/img/404.svg" />
      <h1 class="text-base text-gray">{{ error.message }}</h1>
    </div>
    <div v-else class="p-4">
      <h1 class="text-base text-gray">{{ error.message }}</h1>
    </div>
  </div>
</template>
