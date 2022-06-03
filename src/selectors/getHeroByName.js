import { heroes } from '../data/heroes';

export const getHeroByName = (name = '') => {
    
    if(name === ''){
        return [];
    }

    console.log('blah blah');

    name = name.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name));
}