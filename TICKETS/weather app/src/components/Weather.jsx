import { useState, useEffect } from "react";

export default function Weather() {
  const [city, setCity] = useState("Abuja");
  const [query, setQuery] = useState("Abuja");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch weather (runs on city change + auto refresh)
  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://wttr.in/${city}?format=j1`);
        if (!res.ok) throw new Error("Failed to fetch weather");

        const data = await res.json();

        if (isMounted) {
          const current = data.current_condition[0];
          setWeather({
            temp: current.temp_C,
            condition: current.weatherDesc[0].value,
            humidity: current.humidity,
            wind: current.windspeedKmph,
          });
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchWeather();

    // ⏱ Auto refresh every 60 seconds
    const interval = setInterval(fetchWeather, 60000);

    // cleanup
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [city]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setCity(query.trim());
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Weather Dashboard</h2>

      {/* Search */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "8px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "8px" }}>
          Search
        </button>
      </form>

      {/* States */}
      {loading && <p>Loading weather...</p>}
      {error && <p>Error: {error}</p>}

      {/* Weather display */}
      {weather && !loading && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h3>{city}</h3>
          <p>🌡 Temperature: {weather.temp}°C</p>
          <p>☁ Condition: {weather.condition}</p>
          <p>💧 Humidity: {weather.humidity}%</p>
          <p>💨 Wind: {weather.wind} km/h</p>
        </div>
      )}
    </div>
  );
}