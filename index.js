//1.-carga de la base de datos desde la carpeta models.
//carga por defecto el index de la carpeta models
const db=require("./models");
const chalk=require("chalk");

//2.1- probar que sequelize funcione y se conecte correctamente
async function conectar(){
    try {
        await db.sequelize.authenticate();    
        console.log(chalk.green.inverse("-------------Conexión establecida!---------------"));
    } catch (error) {
        console.log(chalk.red.inverse("Error en la conexion: "  + error.message));
    }
}
//2.2.- ejecutar la función
conectar();

//3.- sincronizar la base de datos
async function sincronizar(){
    try {
        await db.sequelize.sync({/*opcion*/});  //opcion: {force:true} para borrar la bd y crearla desde cero 
        console.log(chalk.green.inverse("-------------sincronización correcta!---------------"));    
    } catch (error) {
        console.log(chalk.red.inverse("Error al sincronizar: "  + error.message));
    }
}

sincronizar();

//4- crear unos usuarios
async function crearUsuario(nombre, apellido){
    try {
        await db.Usuario.create({
            nombre:nombre,
            apellido:apellido
        });
        console.log(chalk.green.inverse("datos guardados correctamente"));
    } catch (error) {
        console.log(chalk.red.inverse("Error en la creación: "  + error.message));
    }    
}
crearUsuario("matt","sorum");
crearUsuario("axel","roses");
crearUsuario("duff","mcaggan");
