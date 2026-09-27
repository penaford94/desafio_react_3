import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <main>
      <Header />

      <section className="container my-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={[
                "mozzarella",
                "tomates",
                "jamón",
                "orégano",
              ]}
              img="https://easyways.cl/storage/20210208143331pizza-napolitana.jpg"
            />
          </div>

          <div className="col-12 col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              img="https://tofuu.getjusto.com/orioneat-local/resized2/TGhYH6bntbvs3sj7G-2400-x.webp"
            />
          </div>

          <div className="col-12 col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wNXYsGcGr2WS6JqsFSgkzM1rzR2PaF-THsAxq0xmnky54_30Eizz68Y&s=10"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;