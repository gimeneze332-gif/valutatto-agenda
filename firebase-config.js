// Configuración pública del proyecto independiente Valutatto.
// El acceso a los datos se controla con Authentication y firestore.rules.

const firebaseConfig = {
  apiKey: "AIzaSyBY0uh7zgIqO5E12_fOmxAMnfm0GSk0YsQ",
  authDomain: "valutatto-agenda.firebaseapp.com",
  projectId: "valutatto-agenda",
  storageBucket: "valutatto-agenda.firebasestorage.app",
  messagingSenderId: "1028151046048",
  appId: "1:1028151046048:web:8120c420b471ce5c8efec5"
};

firebase.initializeApp(firebaseConfig);
