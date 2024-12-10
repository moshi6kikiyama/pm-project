<template>
  <div class="flex h-screen flex-col z-[1000] w-full">
    <img src="/assets/images/frame-4.png" class="sm:hidden" alt="" />
    <div class="h-full bg-[#171717] text-white w-full flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <div class="rounded-[10px] p-[30px] my-[36px] flex flex-col space-y-[20px] min-h-[300px] justify-center items-center">
          <span class="text-2xl">{{ login == true ? 'Welcome back' : 'Start Your Journey with Us!' }}</span>
          <input
            v-if="!login"
            v-model="username"
            type="text"
            placeholder="Username"
            style="border: 1px solid white"
            class="bg-black text-white outline-none p-[10px] rounded-xl w-[300px]"
          />
          <input v-model="email" type="text" placeholder="Login" style="border: 1px solid white" class="bg-black text-white outline-none p-[10px] rounded-xl w-[300px]" />
          <input
            v-if="!login"
            v-model="firstname"
            type="text"
            placeholder="First name"
            style="border: 1px solid white"
            class="bg-black text-white outline-none p-[10px] rounded-xl w-[300px]"
          />
          <input
            v-if="!login"
            v-model="lastname"
            type="text"
            placeholder="Last name"
            style="border: 1px solid white"
            class="bg-black text-white outline-none p-[10px] rounded-xl w-[300px]"
          />
          <input v-model="password" type="password" placeholder="Password" style="border: 1px solid white" class="bg-black text-white outline-none p-[10px] rounded-xl w-[300px]" />
          <input
            v-if="!login"
            v-model="confirm_password"
            type="password"
            placeholder="Confirm assword"
            style="border: 1px solid white"
            class="bg-black text-white outline-none p-[10px] rounded-xl w-[300px]"
          />
          <button v-if="login" @click="handleLogin" class="w-[300px] cursor-pointer transition delay-100 bg-[#FFFFFF] text-black font-bold rounded-xl px-[20px] p-[10px]">
            Login
          </button>
          <button v-else @click="handleRegister" class="w-[300px] cursor-pointer transition delay-100 bg-[#FFFFFF] text-black font-bold rounded-xl px-[20px] p-[10px]">
            Register
          </button>

          <span class="cursor-pointer" @click="login = !login"> {{ !login ? "I've already have an account" : "I don't have an account" }} </span>
          <!-- <div class="h-[20px]"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { api } from '~/api/api';
definePageMeta({
  name: '004',
});

const apiManager = api.services;
const serviceStore = useServiceStore();
const login = ref(true);

onMounted(() => {
  const jwt_token = localStorage['JWT_TOKEN'];
  const isTokenInvalid = !jwt_token || !isValidToken(jwt_token);
  if (!isTokenInvalid) {
    navigateTo({ name: '003' });
  }
});
const email = ref('');
const password = ref('');
const firstname = ref('');
const lastname = ref('');
const username = ref('');
const confirm_password = ref('');
const handleLogin = async () => {
  try {
    const res = await apiManager.loginUser(email.value, password.value);

    if (res && res.success) {
      serviceStore.JWT_TOKEN = res.data.access_token;
      localStorage.setItem('JWT_TOKEN', res.data.access_token);
      navigateTo({ name: '003' });
    } else {
      serviceStore.toast.error('Invalid credentials');
    }
  } catch (error) {
    serviceStore.toast.error('Check your data and try again');
  }
};

const handleRegister = async () => {
  try {
    const res = await apiManager.registerUser(username.value, password.value, email.value, confirm_password.value, firstname.value, lastname.value);
    if (res && res.data.success) serviceStore.toast.success('Log in using the data you used for registration');
  } catch (error) {
    serviceStore.toast.error('Check your data and try again');
  }
};
</script>
