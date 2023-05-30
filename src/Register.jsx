import { Fragment } from "react";

export function Register() {

    return (

        <section className="Register">

            <>
                <h1> Registrate</h1>
                <h2> Rápido y fácil</h2>


                <form >


                    <input type="text"
                        placeholder="Nombre"
                    />



                    <input type="text"
                        placeholder="Apellido"
                    />



                    <input type="text"
                        placeholder="Número de teléfono o email"
                    />

                    <input type="text"
                        placeholder="Contraseña"
                    />

                    

                    <h1>Fecha de nacimiento</h1>
                    <input type="date" id="start" name="trip-start"
                        value="2018-07-22"
                        min="2018-01-01" max="2018-12-31"


                    />

                    <select>
                        <option value="select">Sexo</option>
                        <option value="A1">Hombre</option>
                        <option value="A2">Mujer</option>
                        <option value="B1">Otro</option>


                    </select>








                </form>
            </>


        </section>
    )

}