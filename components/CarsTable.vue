<template>
<v-data-table :headers="headers" :items="cars" :search="search" hide-actions>
  <template slot="items" slot-scope="props">
    <td>{{ props.item.name }}</td>
    <td>
      {{ props.item.plate }}
    </td>
    <td>
      {{ props.item.house }}
    </td>
    <td>
      <v-btn @click="deleteCar(props.item.id)" icon>
        <v-icon>clear</v-icon>
      </v-btn>
    </td>
  </template>
  <template slot="no-results">
    <v-alert class="ma-5" :value="true" color="error" icon="warning">
      Não encontramos nada com "{{ search }}".
    </v-alert>
  </template>
</v-data-table>
</template>

<script>
import { db } from '../plugins/firebase'

export default {
  data: () => ({
    cars: [],
    headers: [
      { text: 'Carro', value: 'name' },
      { text: 'Placa', value: 'plate' },
      { text: 'Casa', value: 'house' },
      { text: 'Deletar', sortable: false }
    ]
  }),
  props: {
    search: String
  },
  methods: {
    getCars() {
      db.collection('cars').onSnapshot(querySnapshot => {
        this.cars = []
        querySnapshot.forEach(doc => {
          this.cars.push({ ...doc.data(), id: doc.id })
        })
      })
    },
    deleteCar(id) {
      db.collection('cars').doc(id).delete()
    }
  },
  mounted() {
    this.getCars()
  }
}
</script>

<style lang="css" scoped>
</style>
