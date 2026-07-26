import { dbPromise } from "./db";

export const getCepDB = async (nome) => {
    const db = await dbPromise;
    return db.get("Ceps", nome);
};

export const saveCepDB = async (dados) => {
    const db = await dbPromise;
    return db.put("Ceps", dados);
  };
