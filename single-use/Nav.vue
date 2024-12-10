<template>
  <v-card>
    <v-layout class>
      <v-app-bar color="black" prominent>
        <v-toolbar-title>peak2peak</v-toolbar-title>

        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : 'right'" temporary>
        <v-list-item class="bg-black mr-[2px]" style="border: 1px solid white">
          <v-btn @click="navigateTo({ name: '003' })" class="!bg-black !px-[0px] px-[30px] !text-white">
            <v-icon class="!text-white">mdi-home</v-icon>
            Home
          </v-btn> </v-list-item
        ><v-list-item class="bg-black mr-[2px]" style="border: 1px solid white">
          <v-btn @click="navigateTo({ name: '005', params: { id: jwtData.id } })" class="!bg-black !px-[0px] px-[30px] !text-white">
            <v-icon class="!text-white">mdi-account</v-icon>
            Profile
          </v-btn>
        </v-list-item>
        <v-list-item class="bg-black mr-[2px]" style="border: 1px solid white">
          <v-btn @click="navigateTo({ name: '008' })" class="!bg-black !px-[0px] px-[30px] !text-white">
            <v-icon class="!text-white">mdi-frequently-asked-questions</v-icon>
            Guides
          </v-btn>
        </v-list-item>
        <v-list-item class="bg-black mr-[2px]" style="border: 1px solid white">
          <v-btn @click="navigateTo({ name: '011' })" class="!bg-black !px-[0px] px-[30px] !text-white">
            <v-icon class="!text-white">mdi-message-outline</v-icon>
            Chat
          </v-btn>
        </v-list-item>
        <v-list-item class="bg-black mr-[2px]" style="border: 1px solid white">
          <v-btn @click="navigateTo({ name: '007' })" class="!bg-black !px-[0px] px-[30px] !text-white">
            <v-icon class="!text-white">mdi-plus</v-icon>
            Post
          </v-btn>
        </v-list-item>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
const drawer = ref(false);
const jwtData = decode(localStorage.getItem('JWT_TOKEN') + '');
</script>
