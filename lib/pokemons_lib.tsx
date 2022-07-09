export type PokemonListType = {
  name: string;
  url: string;
};

export async function getPokemonsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const json = await res.json();
  const data = await json.results;
  console.log("data a pokemons_lib");
  //console.log(data)
  return data;
}

export async function getPokemonsIds() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const json = await res.json();
  const data = await json.results;
  console.log("data a pokemons_lib");
  console.log(data);
  return data.map((pokemon: PokemonListType) => {
    return {
      params: {
        id: pokemon.name,
      },
    };
  });
}

export async function getPokemonData(id: any) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();
  console.log("data pokemon id");
  console.log(id);
  console.log(data);
  return {
    id,
    data,
  };
}
