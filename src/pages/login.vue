<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import type { LoginPayload } from '~/features/auth/useAuthApi'
import useAuthApi from '~/features/auth/useAuthApi'

definePageMeta({
  title: 'Login',
  layout: 'default',
})

const formData = reactive<LoginPayload>({
  username: '',
  password: '',
})

const api = useAuthApi()
const { setToken } = useTokenStore()
const loginMutation = useMutation({
  mutationFn: api.login,
  onSuccess({ data }) {
    if (data.value?.data) {
      setToken(data.value.data)
      navigateTo({ name: 'home' })
    }
  },
})

function login(payload: LoginPayload) {
  loginMutation.mutate(payload)
}

function onSubmit() {
  login(toRaw(formData))
}
</script>

<template>
  <div class="h-full">
    <van-form @submit="onSubmit">
      <van-field
        v-model="formData.username"
        size="large"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '用户名必填' }]"
      >
        <template #left-icon>
          <local-icon name="username" />
        </template>
      </van-field>
      <van-field
        v-model="formData.password"
        size="large"
        placeholder="请输入密码"
        type="password"
        :rules="[{ required: true, message: '密码必填' }]"
      >
        <template #left-icon>
          <local-icon name="password" />
        </template>
      </van-field>
      <div class="p-6">
        <van-button block round type="primary" native-type="submit" :disabled="loginMutation.isSuccess.value">
          登录
        </van-button>
      </div>
    </van-form>
    <van-toast
      forbid-click
      type="loading"
      message="登录中..."
      loading-type="circular"
      :show="loginMutation.isPending.value"
    />
  </div>
</template>
