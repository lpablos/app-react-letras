import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({setBusquedaLetra}) => {
    const [busqueda, setBusqueda] = useState({
        artista: 'Coldplay',
        cancion: 'Adventure of a Lifetime'
    })
    const [error, setError] = useState(false)
    // funcion para cada input para leer su contenido
    const actualizarState = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    // Los values para los inputs
    const {artista, cancion} = busqueda 
    // Consultar las apis
    const buscarInformacion = e =>{
        e.preventDefault()
        if( artista.trim() === '' || cancion.trim() === ''){
            setError(true)
            return
        }
        setError(false)
        setBusquedaLetra(busqueda)
        // Si todo correcto parar al state princial

    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form 
                        action="" 
                        method="post"
                        className="col card text-white bg-transparent mb-5 mt-5 pb-2" 
                        onSubmit={buscarInformacion}
                        >
                            <fieldset>
                                <legend className="text-center">Buscador de letras de canciones</legend>
                                <div className="row">
                                    { error ? <Error texto="Todos los campos son obligatorios"/> : null }
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="artista">Artista</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Nombre Artista"
                                                onChange={actualizarState}
                                                value={ artista }
                                                name="artista"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="artista">Canción</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Nombre Canción"
                                                onChange={actualizarState}
                                                value={ cancion }
                                                name="cancion"/>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    type="submit"
                                    className="btn btn-primary float-right"
                                    >
                                    Buscar
                                </button>
                            </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    setBusquedaLetra : PropTypes.func.isRequired
}

export default Formulario
