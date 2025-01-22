export default function Page() {
    return (
        <div className="max-w-xl mx-auto">
            <div className="form-wrapper">

                <p>
                    Escríbenos a nuestro email en el siguiente formulario. <br />
                        Las casillas marcadas con <span className="required">*</span> son obligatorias.
                </p>

                <form
                    action="/contacto/gracias/"
                    method="POST"
                    name="contact"
                    netlify-honeypot="bot-field"
                    // netlify
                >
                    <ul className="small">
                        <li>
                            <label htmlFor="nombre">Nombre<span className="required">*</span></label>
                            <input type="text" id="nombre" name="nombre" required />
                        </li>

                        <li>
                            <label htmlFor="apellido">Apellido<span className="required">*</span></label>
                            <input type="text" id="apellido" name="apellido" required />
                        </li>

                        <li>
                            <label htmlFor="email">Email<span className="required">*</span></label>
                            <input type="text" id="email" name="email" required />
                        </li>

                        <li>
                            <label htmlFor="company">Compañía</label>
                            <input type="text" id="company" name="company" />
                        </li>

                        <li>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" id="telefono" name="telefono" />
                        </li>

                        <li className="hidden">
                            <label htmlFor="">Si eres humano, no escribas en este recuadro</label>
                            <input name="bot-field" />
                        </li>
                    </ul>

                    <ul className="wide">
                        <li>
                            <label htmlFor="mensaje" aria-required="true">Escribe tu mensaje <span className="required">*</span></label>
                            <textarea name="mensaje" id="mensaje" cols={30} rows={10}></textarea>
                        </li>

                        <li>
                            <button type="submit" className="button-inline">Enviar <img className="icon" src="/assets/img/icons/message-text.svg" alt="Ícono de mensaje" /></button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}