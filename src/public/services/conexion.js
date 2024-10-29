import pg from 'pg';
const { Client }= pg;

const config={
    user: 'cv_bd_user',
    host: 'dpg-csg5nq08fa8c73fra020-a',
    database: 'cv_bd',
    password: 'C2crgQPpNEvE26INOlvqwD5ttLIBCLnA',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de Datos")
    }catch(error){
        console.log(error)
    }
}
