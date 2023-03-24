import { ComponentWraper, DivBlur } from "./style";
import Layout from "../../components/layout";

function Home() {
  return (
    <Layout>
      <ComponentWraper>
        <DivBlur>
          <p>
            *Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            fugit facere amet. Deleniti, fugit maxime fuga aliquid quidem
            placeat temporibus corporis, quam est quis repellat quos possimus
            facere reiciendis repellendus?
          </p>
          <a href="/Dashboard"><button >Ir para a loja</button></a>
          
        </DivBlur>
      </ComponentWraper>
    </Layout>
  );
}
export default Home;
