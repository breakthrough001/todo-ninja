<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container>
      <v-row class="center my-5">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="project in myProjects" :key="project.title">
            <v-expansion-panel-header>{{
              project.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content class="grey--text">
              <div class="font-weight-bold">{{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row></v-container
    >
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
          person: "Yoshi",
          due: "Jan 5th, 2025",
          status: "Overdue",
          content: "Creating wireframes and mockups",
        },
        {
          title: "Develop new feature",
          person: "Mario",
          due: "Mar 15th, 2025",
          status: "Complete",
          content: "Researching technology options",
        },
        {
          title: "Write marketing copy",
          person: "Luigi",
          due: "Feb 28th, 2025",
          status: "Ongoing",
          content: "Drafting product descriptions and taglines",
        },
        {
          title: "Plan social media campaign",
          person: "Donkey Kong",
          due: "Apr 20th, 2025",
          status: "Ongoing",
          content: "Developing content calendar and ad targeting",
        },
        {
          title: "Create product roadmap",
          person: "Peach",
          due: "May 10th, 2025",
          status: "Complete",
          content: "Gathering input from stakeholders and market research",
        },
        {
          title: "User Testing",
          person: "Yoshi",
          due: "Jan 12th, 2025",
          status: "Overdue",
          content: "Interview current partners for feedback",
        },
        {
          title: "Design new portal features",
          person: "Yoshi",
          due: "Jan 20th, 2025",
          status: "Ongoing",
          content: "Work with PM to mockup new features for portal",
        },
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Yoshi";
      });
    },
  },
};
</script>
