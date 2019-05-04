<template>
<v-container>
  <v-card>
    <v-card-title>
      Carros
      <v-spacer />
      <add-car />
      <v-spacer />
      <v-text-field v-model="search" append-icon="search" label="Busca" solo hide-details />
    </v-card-title>
    <cars-table :search="search" />
  </v-card>
</v-container>
</template>

<script>
import AddCar from '@/components/AddCar.vue'
import CarsTable from '@/components/CarsTable.vue'

export default {
  components: {
    AddCar,
    CarsTable
  },
  data: () => ({
    search: null
  })
}
</script>
