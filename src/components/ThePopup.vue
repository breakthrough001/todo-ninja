<template>
  <v-dialog
    transition="dialog-top-transition"
    max-width="600"
    v-model="dialog"
    @click:outside="resetForm"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="info" depressed v-bind="attrs" v-on="on"
        >Add new project</v-btn
      >
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-card-title>
          <h2>Add a new project</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="pt-6" ref="form">
            <v-text-field
              outlined
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="[(v) => !!v || 'Enter title']"
            ></v-text-field>
            <v-textarea
              outlined
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
              :rules="[(v) => !!v || 'Enter description']"
            ></v-textarea>
            <v-menu max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  outlined
                  :value="computedDateFormattedDatefns"
                  label="Due date"
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  :rules="[(v) => !!v || 'Choose date']"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date"></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-start">
          <v-btn
            depressed
            color="primary"
            class="mb-2"
            @click="submit"
            :loading="loading"
            >Add project</v-btn
          >
          <v-btn
            outlined
            color="primary"
            class="mb-2"
            @click="dialog.value = false"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { format, parseISO } from "date-fns";
import { collection, addDoc } from "firebase/firestore";
import db from "@/firebaseConfig";

export default {
  data() {
    return {
      title: "",
      content: "",
      date: "",
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      inputDate: [(v) => v.length >= 3 || "Select date"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
     resetForm() {
      this.$refs.form.reset()
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        addDoc(collection(db, "projects"), {
          title: this.title,
          content: this.content,
          date: this.date
            ? format(parseISO(this.date), "EEEE, MMMM do yyyy")
            : "",
          person: "Donkey Kong",
          status: "Ongoing",
        });
        this.$refs.form.reset();
        this.loading = false;
        this.dialog = false;
        this.$emit("projectAdded");
      }
    },
  },
  computed: {
    computedDateFormattedDatefns() {
      return this.date ? format(parseISO(this.date), "EEEE, MMMM do yyyy") : "";
    },
  },
};
</script>
