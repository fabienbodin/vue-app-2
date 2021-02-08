<template>
  <v-app-bar dark app
             fade-img-on-scroll
             src="@/assets/images/image-1.jpg">
    <v-toolbar-title>Gestionnaire</v-toolbar-title>
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