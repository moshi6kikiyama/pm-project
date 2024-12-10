<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation horizontal>
      <v-btn @click="navigateTo({ name: '003' })" class="!px-[0px] ! px-[30px] !text-white">
        <v-icon class="!text-white">mdi-home</v-icon>
        Home
      </v-btn>

      <v-btn @click="navigateTo({ name: '005', params: { id: jwtData.id } })" class="!px-[0px] px-[30px] !text-white">
        <v-icon class="!text-white">mdi-account</v-icon>
        Profile </v-btn
      ><v-btn @click="navigateTo({ name: '008' })" class="!px-[0px] px-[30px] !text-white">
        <v-icon class="!text-white">mdi-frequently-asked-questions</v-icon>
        Guides
      </v-btn>
      <v-btn @click="navigateTo({ name: '011' })" class="!px-[0px] px-[30px] !text-white">
        <v-icon class="!text-white">mdi-message-outline</v-icon>
        Chat
      </v-btn>
      <v-btn @click="navigateTo({ name: '007' })" class="!px-[0px] px-[30px] !text-white">
        <v-icon class="!text-white">mdi-plus</v-icon>
        Post
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script lang="ts" setup>
const jwtData = decode(localStorage.getItem('JWT_TOKEN') + '');
</script>

<style scoped>
input {
  outline: none;
}
</style>
