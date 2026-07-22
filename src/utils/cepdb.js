import { dbPromise } from "./db";

export const getCepDB = async (nome) => {
    const db = await dbPromise;
    return db.get("Nome", nome);
};