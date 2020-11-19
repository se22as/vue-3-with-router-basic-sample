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
import { useStore } from 'vuex';
import { computed } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
// import fetchAllBeers from '../data/data';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },

  // Vue 3 uses the composition API which makes it possible to organize
  // all our components logic inside a setup() function that returns the
  // piece of data required in the template. This particular feature makes
  // organizing components by logical concerns possible. That is because we
  // can have lifecycle methods, computed properties, state data, etc.
  // all within the setup() function.
  setup() {
    const store = useStore();

    // Vue3 computed() method === Vue2 computed component property
    const beers = computed(() => store.state.homePageData);

    const fetchData = () => store.dispatch('fetchHomePageData');

    // const fetchData = () => {
    //   console.log('fetching ...');
    //   return fetchAllBeers()
    //     .then((data) => {
    //       store.commit('setHomePageData', data.beers);
    //     });
    //   };

    if (!beers.value.length > 0) {
      fetchData();
    }

    return {
      beers,
      fetchData,
    };
  },
};
</script>
