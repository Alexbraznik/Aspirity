// export function ComponentName() {
//   const [countries, setCountries] = useState([]);

//   return <div></div>;
// }

// useEffect(() => {
//   async function fetchCounties() {
//     try {
//       const response = await fetch("https://restcountries.com/v3.1/all");
//       const data = await response.json();

//       const formattedCountries = data.map((country) => ({
//         label: country.name.common,
//         value: country.name.common,
//       }));
//       setCountries(formattedCountries);
//     } catch (error) {
//       console.error("Error fetch countries", error);
//     }
//   }
//   fetchCounties();
// }, []);
