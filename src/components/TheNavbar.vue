<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="normal" text v-bind="attrs" v-on="on"
            ><span>Menu</span>
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-icon left>{{ link.icon }}</v-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <span class="mdi mdi-exit-to-app"></span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="deep-purple accent-2">
      <v-row class="text-center"
        ><v-col class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1">Yoshi</p>
        </v-col></v-row
      >
      <v-row
        ><v-col align="center" class="mb-6"> <ThePopup /> </v-col
      ></v-row>

      <v-list-item
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
      >
        <v-list-item-action>
          <v-icon class="white--text">{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="white--text">{{
            link.text
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import ThePopup from "./ThePopup.vue";
export default {
  components: { ThePopup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>
