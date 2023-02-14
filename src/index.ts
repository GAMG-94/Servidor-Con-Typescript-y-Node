interface Alumno {
    nombre: string
    edad: number
    ciudad: string
    pais: string
}

const alumno: Alumno = {nombre: "Geovanny", edad: 28, ciudad: "Bogotá D.C.", pais: "Colombia"}

console.table(alumno);