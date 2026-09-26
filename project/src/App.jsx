import { useState } from 'react'
import ApodCard from './components/ApodCard'
import './App.css'

function App() {
  // State to hold the NASA APOD data
  const [apod, setApod] = useState(null)
  // Loading state while the API request is in progress
  const [loading, setLoading] = useState(false)
  // Error message if the API call fails
  const [error, setError] = useState(null)

  // Function that calls the NASA APOD API.
  // We use NASA's DEMO_KEY so the project works immediately.
  // You can replace DEMO_KEY with your own free key from https://api.nasa.gov
  const getTodayPicture = async () => {
    setLoading(true)
    setError(null)
    setApod(null)

    try {
      const response = await fetch(
        'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
      )
      if (!response.ok) {
        throw new Error('Could not fetch the picture. Please try again.')
      }
      const data = await response.json()
      setApod(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      {/* Decorative animated star background */}
      <div className="stars" aria-hidden="true" />

      <main className="content">
        <h1 className="heading">NASA Explorer 🚀</h1>
        <p className="subtitle">
          Explore NASA&apos;s Astronomy Picture of the Day
        </p>

        <button className="get-button" onClick={getTodayPicture}>
          Get Today&apos;s Picture
        </button>

        {/* Loading message shown while fetching */}
        {loading && <p className="status">Loading… please wait.</p>}

        {/* Error message shown if the API fails */}
        {error && <p className="error">{error}</p>}

        {/* The picture card once we have data */}
        {apod && <ApodCard data={apod} />}
      </main>
    </div>
  )
}

export default App
