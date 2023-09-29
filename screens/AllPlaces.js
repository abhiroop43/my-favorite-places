import PlacesList from "../components/Places/PlacesList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      async function loadPlaces() {
        const places = await fetchPlaces();
        setLoadedPlaces(places);
      }

      loadPlaces();

      // setLoadedPlaces((currentPlaces) => [
      //   ...currentPlaces,
      //   route.params.place,
      // ]);
    }
  }, [isFocused]);
  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
