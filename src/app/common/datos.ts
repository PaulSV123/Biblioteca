export interface Libros {
    id: Number;
    Titulo: String;
    Autor: String;
    Fecha: String;
};
export interface Proyectos {
    id: Number;
    Nombre: String;
    Duracion: String;
}
export interface Nuevos {
    id: Number;
    Cantidad: Number;
}
export interface Estanteria {
    id: Number;
    titulo: String;
    autor: String;
    tipo: String;
    fechaPublicacion: Number;
}