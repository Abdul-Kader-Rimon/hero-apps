import React from 'react';
import useApps from '../Hooks/useApps';

const AppsList = () => {
    const { apps, loading, error } = useApps()
    console.log(apps)
    return (
      <div>
        <h1 className='text-center text-2xl font-bold'>Trending Apps</h1>
        <p className='text-center text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
      </div>
    );
};

export default AppsList;