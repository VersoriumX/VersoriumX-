import * as React from "react";

const APIKEY = import.meta.env.VITE_GIPHY_API;

interface useFetchProps {
  keyword: string;
}

const useFetch: (keyword: useFetchProps) => string = ({keyword}) => {
  const [gifUrl, setGifUrl] = React.useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`)
      const {data} = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (e) {
      setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
  }

  React.useEffect(() => {
    if (keyword) fetchGifs().then(r => r);
  }, [keyword])

  return gifUrl;
}

export default useFetch;