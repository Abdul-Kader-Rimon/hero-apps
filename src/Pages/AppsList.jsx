import React from 'react';
import useApps from '../Hooks/useApps';

const AppsList = () => {
    const { apps, loading, error } = useApps()
    console.log(apps)
    return (
        <div>
            <h3>this is AppList</h3>
        </div>
    );
};

export default AppsList;