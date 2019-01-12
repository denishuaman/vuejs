<template>
<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <input id="input-search" type="text" class="form-control" v-model="textSearch" placeholder='Search...'>
      <div id="list-countries" v-if="countriesFilter && countriesFilter.length">
        <div class="card" v-for="(country, index) in countriesFilter" :key="index">
          <div class="card-header">
            <div class="row">
                <img v-bind:src="country.flag" height="120px" class="card-img-top col-lg-4">
                <span class="col-lg-8">{{country.name}}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-3">Capital: <strong>{{country.capital}}</strong></div>
              <div class="col-lg-3">Region: <strong>{{country.region}}</strong></div>
              <div class="col-lg-3">Currency: <strong>{{country.currencies[0].name}} ({{country.currencies[0].symbol}})</strong></div>
              <div class="col-lg-3">Population: <strong >{{country.population}}</strong></div>
              <div class="col-lg-3">Nombre nativo: <strong>{{country.nativeName}}</strong></div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center" v-else>
        No results!
      </div>
    </div>
  </div>  
</div>
</template>
<script>
import axios from 'axios';

export default {
    name: "Searcher",
    data() {
        return {
            textSearch: "",
            countries: []
        }
    },
    methods: {
        getAllCountries() {
            var that=this;
            axios.get('https://restcountries.eu/rest/v2/all')
            .then(function (response) {
                that.countries = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    created() {
        this.getAllCountries()
    },
    computed: {
        countriesFilter: function() {
            var textSearch = this.textSearch;
            return this.countries.filter(function(el) {
                return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
            });
        }
    }
}
</script>
<style>
#input-search {
  margin: 10px 0;
}

#scrollUp {
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #555;
    color: #fff;
}
</style>
