import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DCScreen } from '../components/dc/DCScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';


export const DashboardRoutes = () => {
  
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DCScreen />} />
                    <Route path="heroes/:heroId" element={<HeroeScreen />} />
                    <Route path="search" element={<SearchScreen />} />     
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>

    )
}
