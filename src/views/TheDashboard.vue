<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                small
                text
                case="none"
                color="#757575"
                @click="sortBy('title')"
              >
                <v-icon left small>mdi-folder</v-icon>
                <span class="caption">By project name</span>
              </v-btn></template
            >
            <span>Sort project by project name</span></v-tooltip
          >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                small
                text
                color="#757575"
                @click="sortBy('person')"
              >
                <v-icon left small>mdi-account</v-icon>
                <span class="caption">By project name</span>
              </v-btn></template
            ><span>Sort project by person</span></v-tooltip
          >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-on="on"
                v-bind="attrs"
                small
                text
                color="#757575"
                @click="sortBy('status')"
              >
                <v-icon left small>mdi-list-status</v-icon>
                <span class="caption">By status</span>
              </v-btn>
            </template>
            <span>Sort project by status</span></v-tooltip
          >
        </v-col>
      </v-row>

      <v-card
        v-for="project in projects"
        :key="project.title"
        :class="`pa-3 project ${project.status.toLowerCase()}`"
      >
        <v-row>
          <v-col cols="12" xs="6" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="12" xs="2" sm="4" md="2">
            <div class="text-right">
              <v-chip
                id="chip-container"
                small
                :class="`white--text caption my-2 ${project.status.toLowerCase()} `"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      projects: [
        {
          title: "Design new website",
          person: "David Choe",
          due: "Jan 5th, 2025",
          status: "Overdue",
          content: "Creating wireframes and mockups",
        },
        {
          title: "Develop new feature",
          person: "Karen Smith",
          due: "Mar 15th, 2025",
          status: "Complete",
          content: "Researching technology options",
        },
        {
          title: "Write marketing copy",
          person: "John Doe",
          due: "Feb 28th, 2025",
          status: "Ongoing",
          content: "Drafting product descriptions and taglines",
        },
        {
          title: "Plan social media campaign",
          person: "Jane Smith",
          due: "Apr 20th, 2025",
          status: "Ongoing",
          content: "Developing content calendar and ad targeting",
        },
        {
          title: "Create product roadmap",
          person: "Sarah Lee",
          due: "May 10th, 2025",
          status: "Complete",
          content: "Gathering input from stakeholders and market research",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.v-btn__content {
  text-transform: capitalize;
}

.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

#chip-container.complete {
  background: #3cd1c2;
}
#chip-container.ongoing {
  background: orange;
}
#chip-container.overdue {
  background: tomato;
}
</style>
