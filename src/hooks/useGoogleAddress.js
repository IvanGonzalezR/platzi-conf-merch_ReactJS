import React from 'react'
import axios from 'axios'

const useGoogleAddress = (address) => {

  const [ map, setMap ] = React.useState({});
  const ACCESS_KEY = '9f8c7012ba70dbec14cfe33a67c4dae2';

  // const API = `http://api.positionstack.com/v1/forward
  // ?access_key=${ACCESS_KEY}
  // &query=C.21a #412 Fracc. Los Alamos Mexico`;

  const API = 'http://api.positionstack.com/v1/forward?access_key=9f8c7012ba70dbec14cfe33a67c4dae2&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC';

  React.useEffect(() => {
    (async function fetchData() {
      try {
        const response = await axios.get(API);
        console.log('map');
        console.log(response.data.data[ 0 ]);
        setMap(response.data.data[ 0 ]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  return (map);
}

export { useGoogleAddress };