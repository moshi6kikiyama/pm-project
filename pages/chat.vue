<template>
  <div class="min-h-screen bg-[#171717] flex flex-col">
    <div class="flex-1 w-full flex flex-col items-start overflow-y-auto p-[20px] space-y-[10px]">
      <div
        v-for="(message, index) in messages"
        :key="message.id"
        :class="{
          'flex items-start space-x-3': true,
          'self-end justify-end': message.author.id === jwtData.id,
        }"
      >
        <img :src="message?.author?.avatar_url" alt="avatar" class="mx-[10px] w-8 h-8 rounded-full" />
        <div class="bg-white p-3 rounded-md max-w-[80%]">
          <p class="font-bold text-black">{{ message?.author?.firstname }} {{ message?.author?.lastname }}</p>
          <p class="text-black">{{ message?.content }}</p>
          <p class="text-xs text-gray-500">
            {{ new Date(message?.sentAt).toLocaleString() }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex pb-[40px] items-center justify-between space-x-[20px] px-[30px] h-[50px] w-full">
      <textarea v-model="content" class="rounded-md bg-white w-full outline-none !p-[10px]" placeholder="Message..." rows="1" />
      <v-icon @click="sendMessage" class="!text-white cursor-pointer"> mdi-send-variant-outline </v-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: '011',
});
const jwtData = decode(localStorage.getItem('JWT_TOKEN') + '');

const content = ref('');
const messages = ref<
  Array<{
    id: number;
    content: string;
    sentAt: string;
    author: {
      firstname: string;
      lastname: string;
      avatar_url: string;
    };
  }>
>([]);

const serviceStore = useServiceStore();

onMounted(async () => {
  const response = await serviceStore.api.getMessages();
  messages.value = response.data.data;
  console.log(messages.value);
});

const sendMessage = async () => {
  if (content.value.trim() !== '') {
    const newMessage = await serviceStore.api.sendMessage(content.value);
    messages.value.push(newMessage.data);
    content.value = '';
  }
  reloadNuxtApp();
};
</script>

<style scoped>
textarea {
  resize: none;
}

.v-icon {
  cursor: pointer;
}

.flex.justify-end {
  flex-direction: row-reverse;
}

.flex.justify-end .bg-white {
  background-color: #e0e0e0;
}
</style>
