<template>
  <div class="min-h-screen px-[20px] pt-[20px] text-white bg-[#171717]">
    <div class="flex justify-between mb-[20px]">
      <div @click="mode = 'feed'" class="w-[50%] text-center"><span :style="mode == 'feed' ? 'border-bottom: 2px solid #ffffff' : ''">Feed</span></div>
      <div @click="mode = 'my-posts'" class="w-[50%] text-center"><span :style="mode == 'my-posts' ? 'border-bottom: 2px solid #ffffff' : ''">My posts</span></div>
    </div>
    <div class="h-[1px]" style="border: 1px solid white"></div>
    <div class="space-y-[20px] py-[20px] max-w-6xl mx-auto" v-for="post in posts?.content">
      <div class="flex justify-start space-x-[20px] items-center">
        <img v-if="post.author.avatar_url" class="w-[50px] h-[50px] rounded-full object-cover" :src="post.author.avatar_url" alt="" />
        <img v-else class="w-[50px] h-[50px] rounded-full object-cover" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="" />
        <div class="flex flex-col items-start">
          <span> {{ post.author.firstname }} {{ post.author.lastname }} </span>
          <span> {{ timeDifference(post.createdAt) }} </span>
        </div>
      </div>
      <div class="flex flex-col items-start space-y-[20px]">
        <span class="font-bold">{{ post.title }}</span>
        <span>
          {{ post.content }}
        </span>
        <img class="rounded-md" :src="post.imageUrl" alt="" />
      </div>
      <div class="h-[1px]" style="border: 1px solid white"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: '003',
});
const serviceStore = useServiceStore();
const posts = ref();
const mode = ref('feed');
const jwtData = decode(localStorage.getItem('JWT_TOKEN') + '');

watch(
  () => mode.value,
  async () => {
    serviceStore.overlayLoading = true;
    if (mode.value == 'feed') {
      const res = await serviceStore.api.getPosts();
      posts.value = sortPostsByDate(res?.data.data);
    } else {
      const res = await serviceStore.api.getUserPosts(jwtData.id);
      posts.value.content = sortPostsByDate(res?.data.data).reverse();
    }
    serviceStore.overlayLoading = false;
  },
);

function sortPostsByDate(data: any): any {
  if (!data?.content) return data;
  data.content.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return data;
}

function timeDifference(inputDate: string): string {
  const inputTime = new Date(inputDate).getTime();
  const currentTime = Date.now();
  const difference = currentTime - inputTime;

  const minutes = Math.floor(difference / (1000 * 60));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return `${days}d ago`;
  } else if (hours > 0) {
    return `${hours}h ${minutes % 60}m ago`;
  } else if (minutes > 0) {
    return `${minutes}m ago`;
  } else {
    return 'Less than 1m ago';
  }
}
onMounted(async () => {
  serviceStore.overlayLoading = true;
  const res = await serviceStore.api.getPosts();
  posts.value = sortPostsByDate(res?.data.data);
  console.log(posts.value);
  serviceStore.overlayLoading = false;
});
</script>
