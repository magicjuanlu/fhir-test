# Léeme

## Live example

https://magicjuanlu.github.io/fhir-test

## Organización proyecto

- Hay un devcontainer para que se pueda desarrollar en VSCode con docker de forma homogénea entre miembros del equipo.
- El código del frontend se encuentra dentro del directorio src/frontend-fhir, se lanza con 'npm start'.
- El módulo Patient se encuentra dentro del directorio src/app/patient y es donde se lleva a cabo la mayor parte del desarrollo de las funcionalidades solicitadas.
- Todo está desarrollado en la rama 'main'. La rama 'gh-pages' tiene una carpeta docs/ con la app desplegada.

## Dudas que han surgido durante el desarrollo

- ¿Hago un módulo específico para Patient que contenga todo lo relacionado con los pacientes? Sí, así queda todo aislado para cuando haya que meter más módulos. En caso de ser un microfrontend y publicar la funcionalidad de la lista y detalle de forma independiente no sería necesario.
- Nomenclatura del módulo Patient y modelo IPatient. Se considerand varios nombres posibles basic-patient vs patient vs patient-r4. Elijo patient tras darle bastantes vueltas. Patient es para el usuario, a nivel frontend, independientemente de cómo sea en FHIR.
- Tipado FHIR. Tras una búsqueda rápida de paquetes con los tipados del protocolo se encuentra @types/fhir, por lo que no es necesario definirlos (y menos al considerase una tarea de prueba).
- ¿Petición específica para los detalles de un paciente? Se podría haber utilizado la información del Bundle, pero se considera que es preferible, a pesar de tener que solicitar la información de nuevo, llevar a cabo una petición específica para facilitar el comportamiento con el enrutamiento, por ejemplo si un usuario avanzado pone el identificador del paciente directamente en la ruta.
- Mapeo de propiedades: Tanto para la dirección Address line1, line2, line\*, como para el nombre HumanName.given, ambos arrays. Por facilidad para la prueba se opta por obtener toda la información de una sola vez con el método Array.toString()
- Suscripción en los componentes vs Pipe async. En este caso puesto que tanto el listado con el detalle son a modo consulta parece la opción más directa, aportando limpieza al código.
- ¿Pipe async con tap (rxjs) para loading en vez de pipe async con else loading? En caso de estar esperando respuesta para resolver el pipe async y que ocurra un error, el componente quedaría todo el tiempo cargando, por lo que se opta por utilizar la función tap de rxjs para llevar a cabo estas acciones en parelelo
- Se aprovecha para meter un buscador de forma rápida en la tabla.
- Finalmente se tiene la duda de si dejar los campos vacíos o indicar de forma expresa que no tienen información, se opta por poner un guion "-".

Todas estas dudas, serían consultadas con los compañeros para tener diferentes opiniones y debatir de forma rápida sobre el tema.

## Próximos pasos a realizar o que hubieran sido posibles con más tiempo

- Skeleton para la tabla y para el detalle.
- En caso de haber más funcionalidades, usar sharedmodule que incluya módulos de primeng.
- Manejo errores más preciso.
- Traducciones, en caso de ser necesario.
- Optimización recursos bundles a la hora de hacer el build de la aplicación.
