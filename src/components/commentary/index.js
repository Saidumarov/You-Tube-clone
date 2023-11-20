// import React, { useEffect, useState } from "react";
// import "./index.scss";
// import { Apiservice } from "../../service/api.service";
// import axios from "axios";

// function Commentary() {
//   //   const [commit, setCommit] = useState();
//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       try {
//   //         const response = await Apiservice.fetching(`playlistItems`);
//   //         setCommit(response?.data?.items);
//   //         console.log(response);
//   //       } catch (error) {
//   //         console.error(error);
//   //       }
//   //     };

//   //     fetchData();
//   //   }, []);
//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: "GET",
//         url: "https://youtube-v31.p.rapidapi.com/playlistItems",
//         params: {
//           playlistId: "RDZiQo7nAkQHU",
//           part: "snippet",
//           maxResults: "50",
//         },
//         headers: {
//           "X-RapidAPI-Key":
//             "9d761d3068msh3bb30d13f85fab7p13a4e2jsn85bad2ea3862",
//           "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         console.log(response.data);
//         // Handle the response data or update component state here
//       } catch (error) {
//         console.error(error);
//         // Handle errors here
//       }
//     };

//     fetchData(); // Call the async function
//   }, []); // Empty dependency array means it will only run once when the component mounts

//   return (
//     <div style={{ color: "white" }}>
//       {/* {commit && commit?.map((item) => <div>{item?.snippet?.textDisplay}</div>)} */}
//     </div>
//   );
// }

// export default Commentary;
