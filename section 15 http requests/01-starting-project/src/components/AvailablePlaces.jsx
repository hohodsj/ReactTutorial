import Places from './Places.jsx';
import { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage.jsx';
import { sortPlacesByDistance } from '../loc.js';
import fetchAvailablePlaces from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false); // We setIsFetching because callback is async
        });
      } catch (error) {
        setError({message: error.message || 'Could not fetch places, please try again later.'});
        setIsFetching(false);
      }
      
    }
    fetchPlaces();
  }, [])
  if (error) {
    return (
      <ErrorMessage
        title="Error fetching places"
        message={error.message}
        onConfirm={() => setError(null)}
      />
    )
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={availablePlaces.length === 0}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
