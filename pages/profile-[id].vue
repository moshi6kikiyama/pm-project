<template>
  <div class="pt-[30px] text-white bg-[#171717] min-h-screen">
    <div class="text-2xl text-center pb-[20px]">{{ user?.firstname }}'s profile</div>
    <div class="max-w-xl mx-auto flex flex-col items-center space-y-[15px]">
      <div class="relative">
        <img v-if="user?.avatar_url" class="w-[200px] h-[200px] rounded-full object-cover cursor-pointer" :src="user?.avatar_url" alt="" @click="triggerFileInput" />
        <img
          v-else
          class="w-[200px] h-[200px] rounded-full object-cover cursor-pointer"
          src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
          alt=""
          @click="triggerFileInput"
        />
        <input type="file" ref="fileInput" class="absolute inset-0 opacity-0 cursor-pointer" @change="handleFileChange" />
      </div>

      <span class="text-2xl"> {{ user?.name }} </span>
      <span class="text-xl !mb-[50px]"> {{ user?.firstname }} {{ user?.lastname }} </span>
      <div class="flex items-center text-center justify-center space-x-[10px]">
        <div class="bg-black rounded-xl px-[37px] py-[22px]">{{ user?.followers?.length }} followers</div>
        <div class="bg-black rounded-xl px-[37px] py-[22px]">{{ user?.following?.length }} following</div>
        <div v-if="jwtData.id != $route.params.id && !follower" class="flex items-center space-x-[10px]">
          <v-icon @click="follow" class="!text-white !w-[30px]">mdi-account-plus-outline</v-icon>
          Follow
        </div>
        <div v-if="jwtData.id != $route.params.id && follower" class="flex items-center space-x-[10px]">
          <v-icon @click="unfollow" class="!text-white !w-[30px]">mdi-account-minus-outline</v-icon>
          Unfollow
        </div>
      </div>
      <div style="border: 1px solid black" class="h-[1px]"></div>
      <div class="flex items-center justify-between w-full px-[20px]">
        <span>Posts</span>
        <div class="flex items-center space-x-[10px]">
          <div v-if="jwtData.id == $route.params.id" class="rounded-full bg-[#4B4B4B] px-[10px] py-[5px]">Edit</div>
          <div class="rounded-full bg-[#4B4B4B] px-[10px] py-[5px]" @click="navigateTo({ name: '003' })">View all</div>
        </div>
      </div>

      <div class="flex space-x-[10px] px-[10px] pb-[20px] mb-[50px] overflow-x-auto">
        <img class="rounded-md w-[100px] h-[100px]" v-for="post in user?.posts" :src="post.imageUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: '005',
});

const jwtData = decode(localStorage.getItem('JWT_TOKEN') + '');
const serviceStore = useServiceStore();
const route = useRoute();
const user = ref();
const follower = ref(false);

const triggerFileInput = () => {
  const fileInput = $refs.fileInput as HTMLInputElement;
  fileInput.click();
};

const handleFileChange = async (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  const file = fileInput?.files?.[0];

  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await serviceStore.api.updateAvatar(formData);
      user.value.avatar_url = response.data.avatar_url; // Применяем новое URL аватарки
      window.location.reload();
    } catch (error) {
      alert('Failed to update avatar.');
    }
  }
};

const follow = async () => {
  const res = await serviceStore.api.follow(route.params.id as string, jwtData.id);
  follower.value = true;
  window.location.reload();
};

const unfollow = async () => {
  const res = await serviceStore.api.unfollow(route.params.id as string, jwtData.id);
  follower.value = true;
  window.location.reload();
};

const checkIfFollower = (followers: Array<any>) => {
  return followers.some(follower => follower.id === jwtData.id);
};

watch(
  () => route.params.id as string,
  async () => {
    serviceStore.overlayLoading = true;
    const res1 = await serviceStore.api.getUserData(route.params.id as string);
    const res2 = await serviceStore.api.getUserFollowers(route.params.id as string);
    const res3 = await serviceStore.api.getUserFollowing(route.params.id as string);
    const res4 = await serviceStore.api.getUserPosts(route.params.id as string);

    user.value = res1.data.data;
    user.value.followers = res2.data.data;
    user.value.following = res3.data.data;
    user.value.posts = res4.data.data;

    // Проверяем, является ли текущий пользователь подписчиком
    follower.value = checkIfFollower(res2.data.data);

    serviceStore.overlayLoading = false;
  },
);

onMounted(async () => {
  serviceStore.overlayLoading = true;
  const res1 = await serviceStore.api.getUserData(route.params.id as string);
  const res2 = await serviceStore.api.getUserFollowers(route.params.id as string);
  const res3 = await serviceStore.api.getUserFollowing(route.params.id as string);
  const res4 = await serviceStore.api.getUserPosts(route.params.id as string);

  user.value = res1.data.data;
  user.value.followers = res2.data.data;
  user.value.following = res3.data.data;
  user.value.posts = res4.data.data;

  // Проверяем, является ли текущий пользователь подписчиком
  follower.value = checkIfFollower(res2.data.data);

  serviceStore.overlayLoading = false;
});
</script>
