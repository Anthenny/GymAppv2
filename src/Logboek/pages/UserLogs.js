// import React, { Fragment, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// import UserLogsLijst from "../components/UserLogsLijst/UserLogsLijst";

// import "../components/UserLogs.css";
// import Gebruikers from "../../Gebruiker/pages/Gebruikers";

// const DUMMYWORKOUTLOGS = [
//   {
//     id: "l1",
//     owner: "Anthenny",
//     ownerId: "u1",
//     titel: "Borst",
//     datum: "1-8-2021",
//   },
//   {
//     id: "l1",
//     owner: "Olaf",
//     ownerId: "u2",
//     titel: "Benen",
//     datum: "1-8-2021",
//   },
// ];

// const UserLogs = () => {
//   const userId = useParams().userId;
//   const loadedLogs = DUMMYWORKOUTLOGS.filter((log) => log.ownerId === userId);

//   return (
//     <Fragment>
//       <div className="BG__FADE" />
//       <Gebruikers />
//       <div className="userLogs__modal">
//         <h2>{`${loadedLogs[0].owner}'s workouts`}</h2>
//         <div className="userLogs__header">
//           <h3>Titel</h3>
//           <h3>Datum</h3>
//         </div>
//         <UserLogsLijst items={loadedLogs} />
//         <Link to="/gebruikers">
//           <button>Ga terug</button>
//         </Link>
//       </div>
//     </Fragment>
//   );
// };

// export default UserLogs;
