<template>
<v-container class="pa-0">
  <v-card>
    <v-card-title>
      Carros cadastrados
      <v-spacer />
      <add-car />
    </v-card-title>
    <v-text-field v-model="search" append-icon="search" label="Busca" box hide-details />
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
