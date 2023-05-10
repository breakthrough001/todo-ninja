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
import { ref } from "vue";
import db from "@/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
let projects = ref([]);

export default {
  components: {},
  setup() {
    onSnapshot(collection(db, "projects"), (querySnapshot) => {
      const firebaseProjects = [];

      querySnapshot.forEach((doc) => {
        const project = {
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          person: doc.data().person,
          due: doc.data().due,
          status: doc.data().status,
        };
        firebaseProjects.push(project);
      });
      projects.value = firebaseProjects;
    });
  },
  data() {
    return {
      projects: projects,
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
