import React from 'react'

const Formulario = () => {
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form 
                        action="" 
                        method="post"
                        className="col card text-white bg-transparent mb-5 mt-5 pb-2" 
                        >
                            <fieldset>
                                <legend className="text-center">Buscador de letras de canciones</legend>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="artista">Artista</label>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Nombre Artista"
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

export default Formulario
