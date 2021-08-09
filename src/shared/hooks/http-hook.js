import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const activeHttpRequest = useRef([]);

  const sendRequest = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequest.current.push(httpAbortCtrl);

    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
        signal: httpAbortCtrl.signal,
      });

      const responseData = await response.json();

      activeHttpRequest.current = activeHttpRequest.current.filter(
        (reqCtrl) => reqCtrl !== httpAbortCtrl
      ); // behoud elke ctrl behalve de ctrl dat verantwoordelijk is voor dit request

      if (!response.ok) throw new Error(responseData.message);
      setIsLoading(false);

      return responseData;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  }, []);

  const clearError = () => {
    setError(null);
  };

  // Use effect clean up functie die afvuurt als een component dismount. Zodat we niet iets proberen te laden als de client naar een andere pagina wilt.
  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
    clearError,
  };
};
