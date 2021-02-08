<template>
  <v-dialog v-model="show" max-width="450">
    <v-card>
      <v-card-title class="headline" style="word-break: unset">Voulez-vous vraiment supprimer {{ multiple ? 'ces utilisateurs' : 'cet utilisateur' }}?</v-card-title>
      <v-card-text>Cette action est irréversible.</v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" color="darken-1" outlined @click="cancel()">Annuler</v-btn>
        <v-btn class="ma-2" color="red darken-1" outlined @click="confirm()">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "DeleteUser",
  props: {
    isShow: Boolean,
    multipleDelete: Boolean
  },
  methods: {
    cancel() {
      this.$emit('complete', false);
    },
    confirm() {
      this.$emit('complete', true)
    }
  },
  computed: {
    show: {
      get() { return this.isShow; },
      set(v) { this.$emit('complete', v); }
    },
    multiple: {
      get() { return this.multipleDelete; }
    }
  }
}
</script>

<style scoped>

</style>