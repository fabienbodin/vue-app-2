<template>
  <v-app-bar color="deep-purple accent-4" dark app>
    <v-toolbar-title>Gestion des utilisateurs</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tabs right>
      <v-tab to="/">Utilisateurs</v-tab>
      <v-tab to="/settings">Paramètres</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>