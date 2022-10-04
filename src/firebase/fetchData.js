const { dataBase } = require("./index");
const { ref, onValue, get, child } = require("firebase/database");
const { Module } = require("module");

async function fetchData() {
  try {
    if (!dataBase) return;
    const dbRef = ref(dataBase);

    const result = await get(child(ref(dataBase), "/")).then((snapshot) => {
      if (snapshot) {
        return snapshot.val();
      }
      return undefined;
    });

    return result;
  } catch (e) {
    console.log("**fetchData err**");
    console.log(e);
  }
}

exports.fetchData = fetchData;
