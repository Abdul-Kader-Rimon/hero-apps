import React from 'react';
import useApps from '../Hooks/useApps';

const AppsList = () => {
    const { apps, loading, error } = useApps()
    console.log(apps)
    return (
        <div>
            
        </div>
    );
};

export default AppsList;