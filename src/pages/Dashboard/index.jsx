import { useEffect } from "react";
import { getApi } from "../../services/service";

function Dashboard() {
//   useEffect(() => {
//     async (e) => {
//       await getApi().then((res) => {
//         console.log(res, "repsosta");
//       });
//     };
//   }, []);
  function getRestul(){

    getApi()
  }
  return (
    <div>
      <a href="/">
        <button>Voltar</button>
      </a>
      <button onClick={getRestul}>api</button>
      <h1>Estou no dashboard</h1>
    </div>
  );
}

export default Dashboard;
