<template>
  <v-snackbar v-model="show"
              right
              color="primary"
              text absolute>
    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-icon v-bind="attrs" color="primary">mdi-check-all</v-icon>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Notification",
  props: {
    isShow: Boolean,
    content: String
  },
  computed: {
    show: {
      get() { return this.isShow; },
      set(v) { this.$emit('hide', v); }
    },
    message: {
      get() { return this.content; }
    }
  }
}
</script>

<style scoped>

</style>