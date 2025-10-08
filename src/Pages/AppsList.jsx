import React from 'react';
import useApps from '../Hooks/useApps';

const AppsList = () => {
    const { apps, loading, error } = useApps()
    console.log(apps)
    return (
      <div>
        <h1>Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
    );
};

export default AppsList;