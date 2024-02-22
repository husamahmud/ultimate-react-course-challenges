import { useEffect, useState } from 'react';

function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);


  const handleGetPosition = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    );
  };

  return [position, isLoading, error, handleGetPosition];
}

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  const [position, isLoading, error, handleGetPosition] = useGeolocation();
  const { lat, lng } = position;

  function handleClick() {
    setCountClicks(count => count + 1);
    handleGetPosition();
  }

  return (
    <div>
      <button onClick={handleClick}
              disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
