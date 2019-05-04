<template>
<v-dialog v-model="dialog">
  <v-btn slot="activator">
    add car
  </v-btn>
  <v-card>
    <v-card-title>Adicionar carro</v-card-title>
    <v-card-text>
      <v-text-field v-model="formObject.name" clearable label="Carro" />
      <v-text-field v-model="formObject.plate" clearable label="Placa" />
      <v-text-field @keyup.enter="submit" v-model="formObject.house" clearable label="Casa" />
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="submit">Confirmar</v-btn>
      <v-btn @click="resetAndClose">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
import { db } from '../plugins/firebase';

export default {
  data: () => ({
    dialog: false,
    formObject: {
      name: null,
      plate: null,
      house: null
    }
  }),
  methods: {
    submit() {
      db.collection('cars').add(this.formObject)
      this.resetAndClose()
    },
    resetAndClose() {
      this.dialog = false
      this.formObject = {
        name: null,
        plate: null,
        house: null
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
