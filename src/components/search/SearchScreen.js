import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroesCard } from '../heroes/HeroesCard';

export const SearchScreen = () => {
  
    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);    
    
    const [{searchText}, handleInputChange ] = useForm({
        searchText: q
    });

    const heroesFilter = useMemo( () => getHeroByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }
    
    return (
        <>
            <h1>Search Hero by Name</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Search</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search Hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                            />
                        <button 
                            className='btn btn-outline-primary mt-3 d-grid gap-2'
                            type='submit' >
                            Search
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        (q==='') ?
                            <div className='alert alert-info'>Search a Hero</div>
                            : (heroesFilter.length === 0)
                                && <div className='alert alert-danger'>Hero <i>{q}</i> not found</div>
                    }

                    {
                        heroesFilter.map(hero => (
                            <HeroesCard 
                                key={hero.id}
                                {...hero}
                                
                            />
                        ))
                    }

                </div>

            </div>
        </>
    )
}
