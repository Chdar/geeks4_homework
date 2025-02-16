import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, image: "https://stockmann.ru/pi/pp/70/5234070/5234070-1.jpg@jpg", title: "Pinko", description: "Кожаная сумка кросс-боди Love Mini" },
  { id: 2, image: "https://media.symbol.ua/aio-images/b7/19/b71995cf3e894fa4a7b2c0b0b778008d/33d962ec-517a-40d0-926c-c1f8f4118206.jpg", title: "Saint Laurent", description: "Кожаная сумка-багет" },
  { id: 3, image: "https://cdn.zenden.cloud/F_juEqpitsYTRLMeXbxpqKbeAhdWE2ctpfXU7vyAOrI/resize:fill:627:815:false:false:ce:0:0/aHR0cHM6Ly9tYXNjb3R0ZS5ydS91cGxvYWQvaWJsb2NrL2Y1Mi9yYmRheHdvMmkwNWx4aG9oMG9zcjRkYzA2M28xeHg3eC5qcGc.jpg", title: "Mascotte", description: "Коричневая замшевая женская сумка" },
  { id: 4, image: "https://cdn.optipic.io/site-104263/image/catalog/i/jo/hg/862ba4e16681257375d920577e84a3b3.jpg", title: "Coach", description: "Кожаная сумка кросс-боди" },
];

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default App;