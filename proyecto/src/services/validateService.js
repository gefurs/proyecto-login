const expressions = {
    username: /^[a-zA-Z0-9_-]{4,16}$/,
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/
}

const validation = (username, password) => {
    if(username.length === 0 || password.length === 0) {
        alert("Por favor, ingrese un usuario y una contraseña.");
    } else if(!expressions.username.test(username)) {
        alert("Por favor ingrese un usuario válido.")
    } else if(!expressions.password.test(password)) {
        alert("Por favor ingrese una contraseña válida.");
    } else {
        console.log("datos validados");
        return true;
    }
}

export default validation;