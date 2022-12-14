import "../styles/Carousel.css";

export default function Carousel({ data }) {
  //State
  //Comportements

  //Render
  return (
    <div className="media_scroller">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <div className="box-image">
            <img
              className="image"
              src={`http://image.tmdb.org/t/p/w200/${item.poster_path}`}
              alt="poster_path"
            />
          </div>
          <p className="name">
            {item.title}
            {item.name}
            <span style={{ color: "#7E7E7E", paddingLeft: "5px" }}>
              (
              {item.release_date
                ? item.release_date.split("-")[0]
                : item.first_air_date.split("-")[0]}
              )
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
