import {openDB} from "idb";

export const dbPromise = openDB("cep-db", 2, {
    upgrade(db) {
        if (!db.objectStoreNames.contains("Ceps")) {
            db.createObjectStore("Ceps", { keyPath: "telefone"});

        }
    },
});