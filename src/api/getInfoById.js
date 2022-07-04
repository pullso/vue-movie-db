export default function getInfoById(id) {
  return fetch(`https://omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&i=${id}&plot=full`)
    .then((res) => res.json())
    .then((data) => data || [])
    .catch((err) => {
      console.log(err, ': error');
    });
}
