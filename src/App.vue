<template>
  <v-app :style="{ background: '#ECF0F4' }">
    <TheNavbar />
    <v-main class="mx-4 mt-4 mb-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";

export default {
  name: "App",

  components: { TheNavbar },
  data: () => ({
    //
  }),
};
</script>
