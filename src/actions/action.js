import {types} from '../types/types';
import {fileUpload} from '../helpers/fileUpload';
import {db} from '../firebase/firebaseConfig';

export const upFile = (file) =>{
    return async(dispacth) => {

        const fileUrl = await fileUpload(file);
        dispacth(uf(fileUrl));
        console.log(fileUrl);

    }
}

export const uf = (file) =>{
    return{
        type: types.cargaImg,
        payload: {
            file
        }
    }
 }

export const registroHeroes = (id, superhero, publisher, alter_ego, first_appearance, characters,picture) =>{


    return async(dispatch) =>{

       const nuevoHeroe = {
            id:id,
            superhero:superhero,
            publisher:publisher,
            alter_ego:alter_ego,
            first_appearance:first_appearance,
            characters:characters,
            picture:picture
       }
       
       await db.collection(`/Heroes`).add(nuevoHeroe);

        console.log(id, superhero, publisher, alter_ego, first_appearance, characters,picture);
        dispatch(registro(id, superhero, publisher, alter_ego, first_appearance, characters,picture));
    }
}


export const registro = (id, superhero, publisher, alter_ego, first_appearance, characters,picture) =>{
  return{
      type: types.Registrar,
      payload: {
          id,
          superhero,
          publisher,
          alter_ego,
          first_appearance,
          characters,
          picture
      }
  }
}

export const listarHeroe = () => {

    return async(dispatch) => {
        const data = await db.collection(`/Heroes`).get();
        const superheroe = [];
    
        data.forEach(hero=>{
            superheroe.push({
                uid: hero.id,
            ...hero.data()
           })
        })
        console.log(superheroe)
        dispatch(listar(superheroe));

    }
}

export const listar = (heroes) => {
    return {
        type: types.Listar,
        payload: heroes
    }
}

//Buscador
export const listaSearch = (searchText) => {

    return async(dispatch) => {
        const data = await db.collection(`/Heroes`).where('superhero','==',searchText).get();
        const superheroe = [];
    
        data.forEach(hero=>{
            superheroe.push({
                uid: hero.id,
            ...hero.data()
           })
        })
        console.log(superheroe)
        dispatch(listarSe(superheroe));

    }
}

export const listarSe = (heroes) => {
    return {
        type: types.ListarBusqueda,
        payload: heroes
    }
}