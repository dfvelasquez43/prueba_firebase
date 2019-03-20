firebase.initializeApp({
  apiKey: "AIzaSyCrSJfFWOnIwYG7cg2fV1ttf14GO9OQ42A",
  authDomain: "crud-b6d32.firebaseapp.com",
  projectId: "crud-b6d32"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


//Agregar Documentos

function guardar(){

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var fecha = document.getElementById('fecha').value;

	db.collection("users").add({
    first: nombre,
    last: apellido,
    born: fecha
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('nombre').value = '';
	document.getElementById('apellido').value = '';
	document.getElementById('fecha').value = '';
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
//test.firestore.js

}

//Leer Documentos
var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
			 <tr>
              <th scope="row">${doc.id}</th>
              <td>${doc.data().first}</td>
              <td>${doc.data().last}</td>
              <td>${doc.data().born}</td>
              <td><button class="btn btn-warning" onclick="editar('${doc.id}')">Editar</button></td>
              <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
            </tr>
        `
    });
});
//test.firestore.js

//Borrar Datos
function eliminar(id)
{
	db.collection("users").doc(id).delete().then(function() {
    window.console("Document successfully deleted!");
		}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

//test.firestore.js