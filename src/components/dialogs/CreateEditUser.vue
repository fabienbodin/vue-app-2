<template>
  <v-dialog v-model="show" max-width="450">
    <v-card>
      <v-card-title class="headline" style="word-break: unset">{{ page_title }}</v-card-title>
      <v-form ref="addForm">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                  v-model="user.firstname"
                  :counter="32"
                  label="Prénom" outlined
                  required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                  v-model="user.lastname"
                  :counter="32"
                  label="Nom" outlined
                  required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <v-text-field
                  v-model="user.email"
                  label="Adresse e-mail" outlined
                  required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <v-select label="Genre" outlined v-model="user.gender" :items="genders"></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" color="darken-1" outlined @click="cancel()">Annuler</v-btn>
        <v-btn class="ma-2" color="indigo darken-1" outlined @click="complete()">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import GendersMixin from "@/components/mixins/GendersMixin";

export default {
  name: "CreateEditUser",
  mixins: [GendersMixin],
  props: {
    isShow: Boolean,
    editData: Object
  },
  mounted() {
    this.loadGenders();
  },
  data: () => ({
    user: {
      uuid: null,
      firstname: null,
      lastname: null,
      email: null,
      gender: null,
    },
    page_title: 'Nouvel utilisateur'
  }),
  methods: {
    complete() {
      this.$emit('complete', this.user);
    },
    cancel() {
      this.$emit('complete', false);
    }
  },
  computed: {
    show: {
      get() { return this.isShow; },
      set(v) { this.$emit('complete', v) }
    }
  },
  watch: {
    editData: function (nv) {
      if (nv !== null) {
        this.user.uuid = nv.uuid;
        this.user.firstname = nv.firstname;
        this.user.lastname = nv.lastname;
        this.user.email = nv.email;
        this.user.gender = nv.gender;
        this.page_title = 'Modifier l\'utilisateur';
      } else {
        this.user.uuid = null;
        this.user.firstname = null;
        this.user.lastname = null;
        this.user.email = null;
        this.user.gender = null;
        this.page_title = 'Nouvel utilisateur';
      }
    }
  }
}
</script>

<style scoped>

</style>