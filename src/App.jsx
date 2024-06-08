import React, { useState, useEffect } from 'react';
import { getProperties } from './api/properties';

import AnimatedRoutes from './animatedRoutes';
import { Nav } from './components/nav';
import Loading from './components/loading';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  //const location = useLocation()
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getSectionsProperties() {
    const houses = getProperties(6, 'houses');
    const apartments = getProperties(6, 'apartments');
    const farms = getProperties(6, 'farms');

    return Promise.all([houses, apartments, farms]);
  }

  useEffect(() => {
    (async () => {
      setProperties(await getSectionsProperties());
    })();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Loading isLoading={loading} />
      {loading ||
        <Router>
          <div>
            <Nav />
          </div>
          <AnimatedRoutes properties={properties} />
        </Router>
      }
    </>
  );
}

export default App;