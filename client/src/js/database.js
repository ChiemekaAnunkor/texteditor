import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database

// PUT method
export const putDb = async (id, value) => {
  const jateDb = await openDB("jate", 1);
  const response = jateDb
    .transaction("jate", "readwrite")
    .objectStore("jate")
    .put({ id: id, value: value });
  const dbvalue = await response;
  return dbvalue;
};
// TODO: Add logic for a method that gets all the content from the database
// GET method
export const getDb = async (value) => {
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite").objectStore("jate").getAll();
  // retrive all the items in the object store
  const response = await objStore;
  return response;
};

initdb();
