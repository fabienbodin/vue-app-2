<template>
  <div>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn @click="edit(null)" outlined small>Ajouter</v-btn>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="users"
          item-key="uuid"
          class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn icon small @click="edit(item)"><v-icon small>mdi-pencil</v-icon></v-btn>
          <v-btn icon small color="red darken-2" @click="remove(item)"><v-icon small>mdi-delete</v-icon></v-btn>
        </template>
      </v-data-table>
    </v-card>
    <CreateEditUser :is-show="dialogs.create_edit.show" :edit-data="dialogs.create_edit.user" @complete="completeAddEdit" />
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import CreateEditUser from "@/components/dialogs/CreateEditUser";

export default {
  name: "Users",
  components: {CreateEditUser},
  methods: {
    showCreateEdit() {
    },
    completeAddEdit(item) {
      if (item === false) {
        this.dialogs.create_edit.show = false;
        return;
      }
      console.log('todo: insert data');
    },
    edit(item) {
      this.dialogs.create_edit.user = item;
      this.dialogs.create_edit.show = !this.dialogs.create_edit.show;
    },
    remove(item) {
      console.log('todo: delete data', item);
    }
  },
  data: () => ({
    dialogs: {
      create_edit: {
        show: false,
        user: {}
      }
    },
    dialogCreateEdit: {
      show: false,
      user: {}
    },
    headers: [
      { text: 'UUID', value: 'uuid' },
      { text: 'Prénom', value: 'firstname' },
      { text: 'Nom', value: 'lastname' },
      { text: 'Adresse e-mail', value: 'email' },
      { text: 'Genre', value: 'gender' },
      { text: 'Actions', value: 'actions' }
    ],
    users: [
      { uuid: uuid.v4(), firstname: "John", lastname: "Doe", email: "john.doe@unknown.com", gender: "Homme" },
      { uuid: uuid.v4(), firstname: "Jane", lastname: "Doe", email: "jane.doe@unknown.com", gender: "Femme" },
      { uuid: uuid.v4(), firstname: "Javier", lastname: "Arnold", email: "javier.arnold@unknown.com", gender: "Homme" },
      { uuid: uuid.v4(), firstname: "Stella", lastname: "Larson", email: "stella.larson@unknown.com", gender: "Femme" },
      { uuid: uuid.v4(), firstname: "Amelia", lastname: "Owens", email: "amelia.owens@unknown.com", gender: "Femme" },
      { uuid: uuid.v4(), firstname: "Jessie", lastname: "Holmes", email: "jessie.holmes@unknown.com", gender: "Homme" },
      { uuid: uuid.v4(), firstname: "Jimmy", lastname: "Carroll", email: "jimmy.carroll@unknown.com", gender: "Homme" },
      { uuid: uuid.v4(), firstname: "Sarah", lastname: "Robinson", email: "sarah.robinson@unknown.com", gender: "Femme" },
    ]
  })
}
</script>

<style scoped>

</style>