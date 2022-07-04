export default function searchByQuery(query) {
  return fetch(`https://omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${query}`)
    .then((res) => res.json())
    .then((data) => data?.Search || [])
    .catch((err) => {
      console.log(err, ': error');
    });
}
