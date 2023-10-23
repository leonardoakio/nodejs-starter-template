import mongoose from "mongoose";

const carroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    preco: { type: Number }
}, { versionKey: false });

// Referenciou a coleção carros no database para o schema, as propriedades do carro
const carro = mongoose.model("carros", carroSchema);

export default carro;