<template>
  <div class="min-h-screen text-white bg-[#171717]">
    <div class="text-2xl text-center py-[20px]">Guides</div>

    <div class="space-y-[15px] flex flex-col items-center">
      <div @click="navigateTo({ name: '009' })" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> How to start? </span>
      </div>
      <div @click="navigateTo({ name: '010' })" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> Essential Hiking Gear for Beginners </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span>Choosing the Right Trail for Your Skill </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> How to Pack Light but Smart </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span>Safety Tips for Hiking in the Wilderness</span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> Understanding Trail Markings and Signs </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> What to Do in Case of an Emergency </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> Planning Your First Overnight Hike </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> Best Practices for Hiking with Kids </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> Preparing for Weather Conditions </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> How to Navigate Using Maps and GPS </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> Must-Know First Aid for Hikers </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> Hiking with Pets: Safe Adventure tips </span>
      </div>
      <div @click="$serviceStore.toast.error('In develop')" class="mx-auto max-w-6xl px-[20px] flex items-center justify-start space-x-[10px]">
        <v-icon class="!text-white">mdi-play</v-icon>
        <span> How to Train for Longer Hikes </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: '008',
});
</script>
