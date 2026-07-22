import {openDB} from "idb";

export const dbPromise = openDB("cep-db", 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains("CEPs")) {
            db.createObjectStore("Ceps", { keyPath: "nome"});

        }
    },
});