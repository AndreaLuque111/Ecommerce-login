import { Fragment } from "react";
import { useState } from "react"


export function Form(setUser) {

    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (nombre === "" || contraseña === "") {
            setError(true)
            return
        }
        setError(false)


    }



    return (
        <section className=" form1">
            <>
                <h1 className="titulo1"> Inicio de sesión</h1>
                <form className="formulario" onSubmit={handleSubmit}>

                    <h1 className="usernm">Usuario</h1>

                    <input type="text"
                        placeholder="Por favor ingrese su usuario"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <h2 className="password1">Contraseña</h2>
                    <input type="password"
                        placeholder="Por favor ingrese su contraseña"

                        value={contraseña}
                        onChange={e => setContraseña(e.target.value)}
                    />

                    <button className="logn">Entrar</button>
                    
                    {error && <p>¡Todos los campos son requeridos!</p>}



                </form>

                <button className="account">Crear cuenta</button>

                
            </>
        </section>



    )
}
