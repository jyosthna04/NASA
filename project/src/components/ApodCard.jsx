// ApodCard displays the NASA Astronomy Picture of the Day
// It receives a single "data" object with the APOD response

function ApodCard({ data }) {
  return (
    <div className="card">
      {/* The main image from NASA */}
      <img
        src={data.url}
        alt={data.title}
        className="apod-image"
        loading="lazy"
      />

      {/* Title and date */}
      <h2 className="apod-title">{data.title}</h2>
      <p className="apod-date">{data.date}</p>

      {/* Explanation from NASA */}
      <p className="apod-explanation">{data.explanation}</p>
    </div>
  )
}

export default ApodCard
