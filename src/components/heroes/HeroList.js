import { HeroCard } from './HeroCard';
import { useSelector } from 'react-redux';


export const HeroList = ({ publisher }) => {

    
    const {heroe} = useSelector(store => store.heroe);
    console.log(heroe);
    console.log(publisher);

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    let heroes = [];
    if(heroe){
        heroes = heroe.filter( hero => hero.publisher === publisher );
    }
     
    console.log('heroes de HeroList',heroes);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
             {
               (heroes)?
               (
                heroes.map( hero => (
                    <HeroCard 
                         key={ hero.id }
                         { ...hero }
                     />
                    
                ))
               ):
               <p>No hay datos</p>
           } 
        </div>
    )
}
