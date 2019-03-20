firebase.initializeApp({
  apiKey: "AIzaSyCrSJfFWOnIwYG7cg2fV1ttf14GO9OQ42A",
  authDomain: "crud-b6d32.firebaseapp.com",
  projectId: "crud-b6d32"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


//Agregar Documentos

function guardar2() {

  var colaborador = document.getElementById('colaborador').value;
  var fechahoras = document.getElementById('fechahoras').value;
  var canthoras = document.getElementById('canthoras').value;

  db.collection("horas").add({
      colaborador: colaborador,
      fechahoras: fechahoras,
      canthoras: canthoras
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('colaborador').value = '';
      document.getElementById('fechahoras').value = '';
      document.getElementById('canthoras').value = '';
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  //test.firestore.js

}

//Leer Documentos
var tabla = document.getElementById('tabla');
db.collection("horas").onSnapshot((querySnapshot) => {
  tabla.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().colaborador}`);
    tabla.innerHTML += `
			 <tr>
              <th scope="row">${doc.id}</th>
              <td>${doc.data().colaborador}</td>
              <td>${doc.data().fechahoras}</td>
              <td>${doc.data().canthoras}</td>
              <td><button class="btn btn-warning" onclick="editar('${doc.id}')">Editar</button></td>
              <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
            </tr>
        `
  });
});
//test.firestore.js

//Borrar Datos
function eliminar(id) {
  db.collection("horas").doc(id).delete().then(function() {
    window.console("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
}

//test.firestore.js