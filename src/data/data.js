const fetch = require('node-fetch');

export default function fetchAllBeers() {
  const url = 'https://api.punkapi.com/v2/beers';

  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const beers = json.map(
        (beer) => ({
          id: beer.id,
          name: beer.name,
          tagline: beer.tagline,
        }),
      );
      // put the beers in alphabetical order
      beers.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        // eslint-disable-next-line no-nested-ternary
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      });

      return {
        beers,
      };
    });
}
