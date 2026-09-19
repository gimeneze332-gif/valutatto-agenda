// Pegá acá la configuración de TU proyecto de Firebase.
// La encontrás en: Firebase Console > ícono de engranaje > "Configuración del proyecto"
// > pestaña "Tus apps" > app web > "Config" (o "SDK setup and configuration").
//
// Reemplazá los valores de ejemplo de abajo por los reales de tu proyecto.

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
