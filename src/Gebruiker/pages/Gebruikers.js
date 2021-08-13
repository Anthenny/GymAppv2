import React, { Fragment, useEffect, useState } from "react";

import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import GebruikersLijst from "../components/GebruikersLijst";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Gebruikers = () => {
  const { isLoading, sendRequest } = useHttpClient();
  const [loadedGebruikers, setLoadedGebruikers] = useState();

  useEffect(() => {
    const fetchGebruikers = async () => {
      try {
        const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gebruikers`);

        setLoadedGebruikers(responseData.gebruikers);
      } catch (err) {}
    };
    fetchGebruikers();
  }, [sendRequest]);

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {!isLoading && loadedGebruikers && <GebruikersLijst items={loadedGebruikers} />}
    </Fragment>
  );
};

export default Gebruikers;
