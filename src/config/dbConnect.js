import mongoose from "mongoose";

const mongo = "mongodb://localhost:27017";

async function conectaNoDatabase() {
    mongoose.connect(mongo);
    return mongoose.connection
}

export default conectaNoDatabase;

// Para um arquivo inteiro com várias funções
//
// const exportObjeto = {
//     conectaNoDatabase,
//     outrasCoisas
//   };
  
//   export default exportObjeto;