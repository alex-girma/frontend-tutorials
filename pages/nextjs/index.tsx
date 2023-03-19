import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
      );
      const data = await response.json();
      setPokemon(data);
    }
    getPokemon();
  }, []);
  return (
    <div>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
}
