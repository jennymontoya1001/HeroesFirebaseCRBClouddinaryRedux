import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import {upFile,registroHeroes,listarEstudiante} from '../../actions/action';
import { useSelector } from 'react-redux'


export const AddHeroe = () => {

    const dispatch = useDispatch();

    const {url} = useSelector(store => store.heroe);
    console.log(url);


    const [formValues, handleInputChange, reset] = useForm({
        id: '',
        superhero: '',
        publisher: '',
        alter_ego: '',
        first_appearance: '',
        characters: '',

    });

    const { id, superhero, publisher, alter_ego, first_appearance, characters} = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log(id, superhero, publisher, alter_ego, first_appearance, characters,url);
        dispatch(registroHeroes(id, superhero, publisher, alter_ego, first_appearance, characters,url));
        reset();
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
          const file = e.target.files[0];
         try{
            if(file){
                dispatch(upFile(file));
            }
         }catch (error){
             throw error;
         }
    }

    return (
        <div>
            <h1>Add Heroes</h1>
            <Form onSubmit={handleRegistro}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        value={id}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSuperhero">
                    <Form.Label>Superhero</Form.Label>
                    <Form.Control
                        type="text"
                        name="superhero"
                        value={superhero}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control
                        type="text"
                        name="publisher"
                        value={publisher}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAlterEgo">
                    <Form.Label>Alter Ego</Form.Label>
                    <Form.Control
                        type="text"
                        name="alter_ego"
                        value={alter_ego}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFirstAppearance">
                    <Form.Label>First Appearance</Form.Label>
                    <Form.Control
                        type="text"
                        name="first_appearance"
                        value={first_appearance}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCharacters">
                    <Form.Label>Characters</Form.Label>
                    <Form.Control
                        type="text"
                        name="characters"
                        value={characters}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPicture">
                    <Form.Control
                        id="fileSelector"
                        type="file"
                        name="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />


                    <Button className="btn"
                       
                        onClick={handlePictureClick}>
                        Picture
                    </Button>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>

        </div>
    )
}
