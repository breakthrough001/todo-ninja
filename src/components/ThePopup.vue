<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="info" depressed v-bind="attrs" v-on="on"
        >Add new project</v-btn
      >
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-card-title>
          <div>Hello world!</div>
        </v-card-title>
        <v-card-actions class="justify-start">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {};
</script>
