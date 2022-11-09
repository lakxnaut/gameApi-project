import React from "react";
import "./AllGames.css";
import { useSelector } from "react-redux/es/exports";

const AllGames = () => {
  const data = useSelector((state) => state.Data.AllData);
  console.log(data);

  function getdate(mydate) {
    let date = new Date(mydate);
    let year = date.toLocaleString("default", { year: "numeric" });
    let month = date.toLocaleString("default", { month: "2-digit" });
    let day = date.toLocaleString("default", { day: "2-digit" });

    // Generate yyyy-mm-dd date string
    let formattedDate = day + "-" + month + "-" + year;

    return formattedDate;
  }
  return (
    <div className="Allgames-Container">
      {data.length === 0 && <div className="Nodata">No data found</div>}
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div className="AllGames" key={item.id}>
              <div className="AllGames-image-container"></div>
              <div className="games-details">
                <div>
                  <h3>{item.name}</h3>
                </div>
                <div>
                  <h4>Release Date: {getdate(item.first_release_date)}</h4>
                </div>
                <div>
                  <p>{item.summary.substring(0, 200)} ...</p>
                </div>
              </div>
              <div className="number-container">
                {Math.trunc(item.rating / 10)}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllGames;
