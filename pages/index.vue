<template>
  <div class="fixed w-full z-[1000]">
    <v-carousel class="h-screen" :continuous="false" :show-arrows="!$vuetify.display.mobile" progress="white" hide-delimiters>
      <v-carousel-item cover
        ><div class="h-screen con text-center text-white flex flex-col space-y-[10px] items-center justify-center">
          <span class="text-6xl font-bold">peak2peak</span>
          <span class="text-xl"> Start climbing mountains with us </span>
        </div></v-carousel-item
      >

      <v-carousel-item cover>
        <div class="h-screen bg-black p-[65px] flex flex-col xl:flex-row items-center space-y-[50px] xl:space-y-[0px] text-center justify-center xl:space-x-[50px]">
          <img class="object-cover" src="/assets/images/frame-2.png" alt="" />
          <div class="flex flex-col text-md max-w-[300px]">
            <span class="text-2xl font-bold">Start now.</span>
            <span class="mb-[24px]">Learn everything you need for your first hike </span>
          </div>
        </div>
      </v-carousel-item>

      <v-carousel-item cover>
        <div class="h-screen bg-black p-[65px] flex flex-col xl:flex-row items-center space-y-[50px] xl:space-y-[0px] text-center justify-center xl:space-x-[50px]">
          <img class="object-cover" src="/assets/images/frame-3.png" alt="" />
          <div class="flex flex-col text-md max-w-[300px]">
            <span class="text-2xl font-bold">Join the community.</span>
            <span class="mb-[24px]">Become a part of a group that shares your passion for adventure. </span>
          </div>
        </div></v-carousel-item
      >

      <v-carousel-item cover>
        <div class="h-screen bg-black py-[60px]">
          <div class="flex flex-col mx-auto text-center items-center text-sm w-full justify-center mb-[48px]">
            <span class="text-2xl font-bold">About us</span>
            <span>What do we offer?</span>
          </div>
          <div class="w-full flex flex-col items-center space-y-[48px]">
            <div class="flex items-start space-x-[24px] max-w-[300px]">
              <nuxt-icon filled name="001/001"></nuxt-icon>
              <div class="flex flex-col items-start">
                <span class="font-bold"> Tutorials for beginners </span>
                <span> Various tutorials on any topic for beginners </span>
              </div>
            </div>
            <div class="flex items-start space-x-[24px] max-w-[300px]">
              <nuxt-icon filled name="001/001"></nuxt-icon>
              <div class="flex flex-col items-start">
                <span class="font-bold"> Community </span>
                <span> You can find like-minded people and friends here to conquer the mountains </span>
              </div>
            </div>
            <div class="flex items-start space-x-[24px] max-w-[300px]">
              <nuxt-icon filled name="001/001"></nuxt-icon>
              <div class="flex flex-col items-start">
                <span class="font-bold"> Chat-bot </span>
                <span> We have our own AI assistant who you can ask anything you want. </span>
              </div>
            </div>
          </div>
        </div>
        ></v-carousel-item
      >

      <v-carousel-item cover>
        <div class="text-center bg-black flex-col space-y-[40px] h-screen flex justify-center items-center text-6xl">
          <span> Let's start! </span>
          <button class="bg-white py-[20px] px-[40px] rounded-xl" @click="navigateTo({ name: '004' })">Join us</button>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: '006',
});
const serviceStore = useServiceStore();

// onMounted(() => {
//   serviceStore.toast.success('Start point');
//   serviceStore.modal.type = 'danger';
//   serviceStore.modal.header = 'Тест';
//   serviceStore.modal.text = 'Тест';
//   serviceStore.modal.buttonText = 'Тест';
//   serviceStore.modal.onClick = () => {
//     serviceStore.toast.success('Кнопка нажата');
//     serviceStore.modal.show = false;
//   };
//   serviceStore.modal.show = true;
// });
</script>

<style scoped>
.con {
  background: url('/assets/images/frame-1.png');
  background-size: cover;
}
</style>
