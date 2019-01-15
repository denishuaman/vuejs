<template>
  <div class="container">
      <v-client-table 
          :data="tableData"
          :columns="columns" 
          :options="options">
      </v-client-table>
  </div>
</template>

<script>

export default {
    data() {
        return {
            columns: ['id', 'name', 'album'],
            tableData: [],
            options: {
                headings: {
                    id: 'ID',
                    name: 'Song Name',
                    album: 'Album'
                },
                sortable: ['name', 'album'],
                filterable: ['name', 'album'],
                footerHeadings: ['id', 'name', 'album'],
                highlightMatches: true
            }
        }
    },
    mounted() {
        this.axios.get('http://localhost:4000/songs').then(res => {
            this.tableData = res.data
        })
    }
}
</script>

<style>
#app {
  width: 95%;
  margin-top: 50px; 
}

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}

</style>