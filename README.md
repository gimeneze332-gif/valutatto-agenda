# Valutatto — Agenda de turnos

App de agenda para el estudio, independiente de Claude, instalable en el
celular y la tablet, con el logo de Valutatto. Guarda los turnos en una
base de datos gratuita de Google (Firestore) que se sincroniza sola entre
todos los dispositivos.

No hace falta saber programar para dejarla funcionando — son pasos de
"click, copiar y pegar". Calculá una hora tranquila la primera vez.

---

## Parte 1 — Crear el proyecto en Firebase (la base de datos)

1. Andá a **https://console.firebase.google.com** e iniciá sesión con
   una cuenta de Google (puede ser cualquiera, personal o del estudio).
2. Hacé clic en **"Agregar proyecto"** (o "Crear proyecto").
   - Nombre: por ejemplo `valutatto-agenda`.
   - Podés desactivar Google Analytics (no lo necesitamos). Seguí los
     pasos hasta que se cree el proyecto.
3. Dentro del proyecto, en el menú de la izquierda, buscá
   **"Compilación" (Build) → Firestore Database**.
   - Hacé clic en **"Crear base de datos"**.
   - Elegí **"Iniciar en modo de producción"**.
   - Elegí la ubicación más cercana (por ejemplo `southamerica-east1`)
     y confirmá.
4. Ahora andá a **Compilación → Authentication**.
   - Hacé clic en **"Comenzar"**.
   - En la pestaña **"Sign-in method"**, elegí **"Correo
     electrónico/contraseña"** y activalo (el primer interruptor).
     Guardá.
   - Andá a la pestaña **"Users"** (Usuarios) → **"Add user"**
     (Agregar usuario).
     - Cargá tu email y una contraseña. Este va a ser tu login.
     - Repetí el paso para crear un segundo usuario, con el email de
       la otra persona que va a usar la app en su iPhone.
   - Guardá esos dos emails y contraseñas en un lugar seguro (son los
     que van a usar para entrar a la app).

## Parte 2 — Conseguir la configuración del proyecto

1. En Firebase, hacé clic en el ícono de **engranaje** (arriba a la
   izquierda) → **"Configuración del proyecto"**.
2. Bajá hasta **"Tus apps"** y hacé clic en el ícono `</>` (Web) para
   agregar una app web.
   - Ponele un apodo, por ejemplo `valutatto-web`. No hace falta tildar
     "Firebase Hosting".
   - Te va a mostrar un bloque de código con algo así:
     ```js
     const firebaseConfig = {
       apiKey: "AIzaSy...",
       authDomain: "valutatto-agenda.firebaseapp.com",
       projectId: "valutatto-agenda",
       storageBucket: "valutatto-agenda.appspot.com",
       messagingSenderId: "123456789",
       appId: "1:123456789:web:abcabc"
     };
     ```
3. Abrí el archivo **`firebase-config.js`** de esta carpeta y
   reemplazá los valores de ejemplo por los que te mostró Firebase
   (dejá la línea `firebase.initializeApp(firebaseConfig);` al final,
   tal cual está).

## Parte 3 — Configurar las reglas de seguridad

1. Volvé a **Firestore Database → pestaña "Reglas" (Rules)**.
2. Borrá lo que hay y pegá el contenido del archivo
   **`firestore.rules`** de esta carpeta.
3. Hacé clic en **"Publicar"**.

Esto asegura que solo las personas que vos diste de alta en
Authentication puedan ver y cargar turnos — nadie más va a poder
entrar aunque encuentre el link.

## Parte 4 — Agregar el logo de Valutatto como ícono de la app

1. Conseguí el logo de Valutatto en formato cuadrado (idealmente sin
   fondo o con fondo sólido), en dos tamaños:
   - `icon-192.png` → 192x192 píxeles
   - `icon-512.png` → 512x512 píxeles
   - Si solo tenés una imagen grande, cualquier editor de fotos online
     (por ejemplo `iloveimg.com/resize-image`) te deja recortarla y
     cambiarle el tamaño gratis.
2. Poné esos dos archivos dentro de la carpeta **`icons/`**, con esos
   nombres exactos, reemplazando los que están de ejemplo.

## Parte 5 — Subir todo a GitHub

1. Creá un repositorio nuevo en GitHub (puede ser público o privado,
   ambos funcionan con GitHub Pages). Por ejemplo:
   `valutatto-agenda`.
2. Subí **todos los archivos de esta carpeta** al repositorio
   (`index.html`, `manifest.json`, `sw.js`, `firebase-config.js`,
   `firestore.rules`, `README.md`, y la carpeta `icons/` con tus dos
   íconos). Podés arrastrarlos directo desde la web de GitHub con
   "Add file → Upload files", o con GitHub Desktop si preferís.
3. Andá a **Settings (Configuración) del repositorio → Pages**.
   - En "Source", elegí la rama `main` y la carpeta `/ (root)`.
   - Guardá. GitHub te va a dar un link parecido a:
     `https://tuusuario.github.io/valutatto-agenda/`
   - Puede tardar 1-2 minutos en estar activo la primera vez.

## Parte 6 — Instalarla en el celular y la tablet

1. Abrí ese link (`https://tuusuario.github.io/valutatto-agenda/`)
   desde el navegador del celular o la tablet.
2. Iniciá sesión con el email y la contraseña que creaste en la
   Parte 1.
3. Instalala en la pantalla de inicio:
   - **iPhone/iPad (Safari)**: ícono de compartir → "Agregar a
     pantalla de inicio".
   - **Android (Chrome)**: menú ⋮ → "Agregar a pantalla de inicio" o
     "Instalar aplicación".
4. Ahora el ícono va a tener el logo de Valutatto y el nombre
   "Valutatto", y al abrirlo va a entrar directo a la agenda (te va a
   pedir el login una sola vez por dispositivo).

Repetí el paso 1 a 3 en el otro iPhone, iniciando sesión con el
segundo usuario que creaste.

---

## Preguntas frecuentes

**¿Tiene algún costo?** No. El plan gratuito de Firebase ("Spark")
alcanza de sobra para la cantidad de turnos de un estudio, y GitHub
Pages es gratis siempre.

**¿Puedo agregar más usuarios después?** Sí, volvés a
Authentication → Users → Add user, las veces que quieras.

**Se me cerró la sesión, ¿pierdo los turnos?** No. Los turnos viven en
Firestore, no en el celular. Iniciás sesión de nuevo y volvés a verlos
todos.

**¿Puedo pedirle a Claude que le siga agregando funciones?** Sí —
pasale el archivo `index.html` actualizado y contale qué querés sumar;
las reglas y la configuración de Firebase no hace falta tocarlas de
nuevo salvo que cambies de proyecto.
