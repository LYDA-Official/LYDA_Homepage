import { dataBase } from ".";
import { ref, onValue } from "firebase/database";

async function fetchData() {
  try {
    const dbRef = ref(dataBase);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  } catch (e) {
    console.log(e);
  }
}

export default fetchData;
