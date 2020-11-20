<template>
  <div class="home">
    <HelloWorld msg="This is the Home Page"/>

    <div>
      Number of Beers = {{ beers.length }}
    </div>

    <div v-if="beers.length > 0">
      There are beers
    </div>

    <ul v-if="beers.length > 0">
      <li>Beers:</li>
      <li v-for="beer in beers" :key="beer.id">
        {{ beer.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },

  computed: {
    beers() {
      return this.$store.state.homePageData;
    },
  },

  // Server-side only: called by server renderer automatically
  serverPrefetch() {
    return this.fetchData();
  },

  // Client-side only : get data if its not already been obtained
  mounted() {
    document.title = 'Home';
    if (!this.beers) {
      this.fetchData();
    }
  },

  methods: {
    fetchData() {
      // return the Promise from the action
      return this.$store.dispatch('fetchHomePageData');
    },
  },
};
</script>
