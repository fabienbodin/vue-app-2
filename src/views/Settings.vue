<template>
  <div>
    <v-alert
        prominent
        type="info"
        dense
    >
      Toutes les modifications sont sauvegardées sur votre disque local.
    </v-alert>
    <v-row>
      <v-col cols="6">
        <v-sheet outlined color="grey lighten-1" rounded>
          <v-card outlined>
            <v-card-title class="headline">
              Utilisateurs
            </v-card-title>
            <v-card-subtitle>Vous pouvez remettre à zéro la liste des utilisateurs ou bien la vider entièrement.</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined @click="reinitializeUsers()">Réinitialiser</v-btn>
              <v-btn outlined color="red darken-3" @click="clear()">Vider</v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet outlined color="grey lighten-1" rounded>
          <v-card outlined>
            <v-card-title class="headline">
              Genres
            </v-card-title>
            <v-card-subtitle>Personnalisez la liste des genres disponibles.</v-card-subtitle>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left">
                    Genre
                  </th>
                  <th class="text-left">
                    Actions
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="gender in genders"
                    :key="gender"
                >
                  <td>{{ gender }}</td>
                  <td>
                    <v-btn icon small color="red darken-2" outlined @click="removeGender(gender)"><v-icon small>mdi-delete</v-icon></v-btn>
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field v-model="newGender" label="Nouveau genre.." clearable></v-text-field>
                  </td>
                  <td>
                    <v-btn icon small color="green darken-2" outlined @click="addGender()"><v-icon small>mdi-plus</v-icon></v-btn>
                  </td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>

            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined @click="reinitializeGenders()">Réinitialiser</v-btn>
              <v-btn outlined color="green" @click="saveGenders()">Sauvegarder</v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <Notification :is-show="notification.show" :content="notification.message" @hide="hideNotification" />
  </div>
</template>

<script>
import UsersMixin from "@/components/mixins/UsersMixin.js";
import GendersMixin from "@/components/mixins/GendersMixin";
import NotificationMixin from "@/components/mixins/NotificationMixin";
import Notification from "@/components/Notification";

export default {
  name: "Settings",
  components: {Notification},
  mixins: [UsersMixin, GendersMixin, NotificationMixin],
  data: () => ({
    newGender: null
  }),
  methods: {
    reinitializeUsers() {
      this.setDefaultUsers();
      this.showNotification('Liste des utilisateurs réinitialisés')
    },
    clear() {
      this.users = [];
      this.saveUsers();
      this.showNotification('Utilisateurs vidés');
    },
    addGender() {
      if (this.newGender !== null)
        this.genders.push(this.newGender);
      this.newGender = null;
      this.showNotification('Genre ajouté');
    },
    removeGender(gender) {
      this.genders = this.genders.filter(x => x !== gender);
      this.showNotification('Genre supprimé');
    },
    reinitializeGenders () {
      this.setDefaultGenders();
      this.showNotification('Liste des genres réinitialisés');
    },
    /**
     * La fonction init est appelée lorsque le composant est mounted.
     */
    init() {
      this.loadUsers();
      this.loadGenders();
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>

</style>