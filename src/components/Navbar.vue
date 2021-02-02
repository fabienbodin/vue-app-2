<template>
  <v-app-bar color="deep-purple accent-4" dark app>
    <v-toolbar-title>Gestion des utilisateurs</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="openAddEdit()">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <!--<template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab>Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </template>-->
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>