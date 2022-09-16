import { dataBase } from ".";
import {
  getDatabase,
  ref,
  set,
  get,
  push,
  update,
  child,
} from "firebase/database";

async function saveData(params: { refKey: "creator" | "fan"; param: any }) {
  try {
    console.log("go?");
    console.log(params);
    console.log(dataBase);
    const { refKey, param } = params;
    const db = dataBase;
    const result = await push(ref(db, `${refKey}/`), {
      ...param,
    });
    if (result?.key) {
      alert("It's successfully saved!");
    }
  } catch (e) {
    console.log("firebase err");
    console.log(e);
    alert("Something went wrong");
  }
}

export default saveData;
