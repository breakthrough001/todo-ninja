<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card class="text-center rounded-lg">
            <v-responsive class="pt-4"
              ><v-avatar size="100"> <img :src="person.avatar" /> </v-avatar
            ></v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="pb-4 ps-4">
              <v-btn text color="normal">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col></v-row
      >
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      team: [
        { name: "Yoshi", role: "Web Developer", avatar: "/avatar-1.png" },
        { name: "Mario", role: "Marketing", avatar: "/avatar-2.png" },
        { name: "Luigi", role: "UX Designer", avatar: "/avatar-3.png" },
        {
          name: "Donkey Kong",
          role: "Front End Engineer",
          avatar: "/avatar-4.png",
        },
        { name: "Peach", role: "Back End Engineer", avatar: "/avatar-5.png" },
      ],
    };
  },
};
</script>
