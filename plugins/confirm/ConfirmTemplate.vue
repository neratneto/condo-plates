<template>
<v-dialog v-model="open" class="confirm-dialog" transition="slide-y-reverse-transition" persistent>
  <v-card>
    <v-card-text>
      <p class="confirm-text">{{ message }}</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn :color="cancelColor" @click.stop="onCancel()">{{ cancelText }}</v-btn>
      <v-btn :color="confirmColor" @click.stop="onConfirm()">{{ confirmText }}</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
<style>
.confirm-text {
  font-size: 16px;
}
</style>
