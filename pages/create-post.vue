<template>
  <div class="flex h-screen flex-col z-[1000] w-full">
    <img src="/assets/images/frame-4.png" class="sm:hidden" alt="" />
    <div class="h-full bg-[#171717] text-white w-full flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <div class="rounded-[10px] p-[30px] my-[36px] flex flex-col space-y-[20px] min-h-[300px] justify-center items-center">
          <span class="text-2xl">Creating post</span>

          <input v-model="title" type="text" placeholder="Title" style="border: 1px solid white" class="bg-black text-white outline-none p-[10px] rounded-xl w-[300px]" />

          <input v-model="content" type="text" placeholder="Content" style="border: 1px solid white" class="bg-black text-white outline-none p-[10px] rounded-xl w-[300px]" />

          <label
            style="border: 1px solid white"
            for="file-upload"
            class="cursor-pointer bg-black text-white outline-none p-[10px] rounded-xl w-[300px] text-center flex items-center justify-center"
          >
            <i class="fa-upload text-white">
              <v-icon class="!text-white">mdi-image-plus</v-icon>
            </i>
            <input id="file-upload" type="file" @change="handleFileChange" class="hidden" />
          </label>

          <button @click="createPost" class="w-[300px] cursor-pointer transition delay-100 bg-[#FFFFFF] text-black font-bold rounded-xl px-[20px] p-[10px]">Create post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

definePageMeta({
  name: '007',
});

const title = ref('');
const content = ref('');
const file = ref<File | null>(null);

const serviceStore = useServiceStore();

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    file.value = input.files[0];
  }
};

const createPost = async () => {
  if (!file.value) {
    alert('Пожалуйста, выберите изображение');
    return;
  }

  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('content', content.value);
  formData.append('image', file.value);

  try {
    await serviceStore.api.createPost(formData);
    alert('Пост успешно создан!');
    title.value = '';
    content.value = '';
    file.value = null;
  } catch (error) {
    console.error('Ошибка при создании поста:', error);
    alert('Не удалось создать пост');
  }
};
</script>

<style scoped>
.fas {
  margin-right: 10px;
}
</style>
