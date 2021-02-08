<template>
  <div>
    <v-card>
      <v-card-title>
        Utilisateurs
        <v-spacer></v-spacer>
        <v-btn @click="remove(selected)" outlined small v-if="selected.length > 0" color="red darken-2" style="margin-right: 5px;">Supprimer</v-btn>
        <v-btn @click="edit(null)" outlined small>Ajouter</v-btn>
      </v-card-title>
      <v-data-table
          v-model="selected"
          :headers="headers"
          :items="users"
          item-key="uuid"
          show-select
          class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn icon small @click="edit(item)" outlined style="margin-right: 5px;"><v-icon small>mdi-pencil</v-icon></v-btn>
          <v-btn icon small color="red darken-2" @click="remove([item])" outlined><v-icon small>mdi-delete</v-icon></v-btn>
        </template>
      </v-data-table>
    </v-card>
    <CreateEditUser :is-show="dialogs.create_edit.show" :edit-data="dialogs.create_edit.user" @complete="completeAddEdit" />
    <DeleteUser :is-show="dialogs.remove.show" :multiple-delete="dialogs.remove.items > 1" @complete="completeRemove" />
    <Notification :is-show="notification.show" :content="notification.message" @hide="hideNotification" />
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import CreateEditUser from "@/components/dialogs/CreateEditUser";
import UsersMixin from "@/components/mixins/UsersMixin.js";
import DeleteUser from "@/components/dialogs/DeleteUser";
import Notification from "@/components/Notification";
import NotificationMixin from "@/components/mixins/NotificationMixin";

export default {
  name: "Users",
  components: {Notification, DeleteUser, CreateEditUser},
  mixins: [UsersMixin, NotificationMixin],
  methods: {
    completeAddEdit(item) {
      if (item === false) {
        this.dialogs.create_edit.show = false;
        return;
      }
      if (item.uuid) {
        const searchUser = this.users.filter(x => x.uuid === item.uuid)[0];
        if (searchUser !== undefined) {
          searchUser.firstname = item.firstname;
          searchUser.lastname = item.lastname;
          searchUser.email = item.email;
          searchUser.gender = item.gender;
        }
        this.showNotification('Utilisateur modifié');
      } else {
        item.uuid = uuid.v4();
        this.users.push(item);
        this.showNotification('Utilisateur ajouté');
      }
      this.dialogs.create_edit.show = false;
      this.saveUsers();
    },
    edit(item) {
      this.dialogs.create_edit.user = item;
      this.dialogs.create_edit.show = true;
    },
    remove(item) {
      this.dialogs.remove.items = item;
      this.dialogs.remove.show = true;
    },
    completeRemove(rm) {
      if (rm) {
        this.users = this.users.filter(x => !this.dialogs.remove.items.includes(x));
      }
      this.dialogs.remove.show = false;
      if (this.dialogs.remove.items.length > 1)
        this.showNotification('Utilisateurs supprimés');
      else
        this.showNotification('Utilisateur supprimé')
      this.saveUsers();
    },
    /**
     * La fonction init est appelée lorsque le composant est mounted.
     */
    init() {
      this.loadUsers();
    }
  },
  data: () => ({
    dialogs: {
      create_edit: {
        show: false,
        user: {}
      },
      remove: {
        show: false,
        items: []
      }
    },
    headers: [
      { text: 'UUID', value: 'uuid' },
      { text: 'Prénom', value: 'firstname' },
      { text: 'Nom', value: 'lastname' },
      { text: 'Adresse e-mail', value: 'email' },
      { text: 'Genre', value: 'gender' },
      { text: 'Actions', value: 'actions' }
    ],
    selected: []
  }),
  mounted() {
    this.init();
  }
}
</script>

<style scoped>

</style>