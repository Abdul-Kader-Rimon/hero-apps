import React from 'react';
import AppsList from './AppsList';
import Bannar from './Bannar';
import useApps from '../Hooks/useApps';
import LoadingPage from '../Components/LoadingPage';

const Home = () => {
    const { loading } = useApps()
    if(loading) return <LoadingPage/>
    return (
        <div>
            <Bannar/>
            <AppsList/>
        </div>
    );
};

export default Home;