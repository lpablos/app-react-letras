import React, { Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Artista from './components/Artista'
import axios from 'axios'

const App = () => {
  const [busquedaLetra, setBusquedaLetra] = useState({})
  const [letra, setLetra] = useState('')
  const [artista, setArtista] = useState([])
  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return

    const consultarApiLetra = async() =>{  
      const {artista, cancion} = busquedaLetra      
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      // multiple peticiones sin inportar detener los timepos de ejecucion
      // const [letra, informacion] = await Promise.all([axios.get(url), axios.get(url2)])
      const [informacion] = await Promise.all([axios.get(url2)])
      setArtista(informacion.data.artists[0])
      setLetra("Por el momento el servicio no se encuentra disponible")
    }
    
    consultarApiLetra() 

  }, [busquedaLetra])
  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artista
              artista={artista}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default App
