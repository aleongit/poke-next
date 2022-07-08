
export type PokemonType = {
  name: string,
  url: string,
}

export async function getPokemonsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
  const json = await res.json()
  const data = await json.results
  console.log('data a pokemons_lib')
  console.log(data)
  return data
}

/*
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        const data = await response.json()
        setPokemons(data.results)
        console.log('fetch data')
        setLoading(false)

        //paginate
        //limits
        const endOffset = itemOffset + ITEMS_PER_PAGE
        console.log(`Loading items from ${itemOffset} to ${endOffset}`)
        
        //nova array pokemons dels limits
        const slice = data.results.slice(itemOffset, endOffset)
        setCurrentPokemons(slice)

        //num pàgines
        setPageCount(Math.ceil(data.results.length / ITEMS_PER_PAGE))

      } catch(e) {
        setError("Alguna cosa ha anat malament :(");
        console.log('fetch error')
      }
    }
*/

/*
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      }
    })
  }

  export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    }


  }
*/
