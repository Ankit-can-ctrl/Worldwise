import styles from "../components/CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
// import PropTypes from "prop-types";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(cities.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, emoji) => (
        <CountryItem country={country} emoji={emoji} key={country} />
      ))}
    </ul>
  );
}

export default CountryList;
