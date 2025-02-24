import { useState, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  // функция для обновления значений формы
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[A-Za-z]*$/.test(value)) return; // Только латинские буквы
    if (["quantity", "price", "discount"].includes(name) && value < 0) return; // Неотрицательные числа
    if (["quantity", "price", "discount"].includes(name) && !/^\d*$/.test(value)) return; // Только числа

    switch (name) {
      case "name":
        setName(value);
        break;
      case "quantity":
        setQuantity(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "discount":
        setDiscount(value);
        break;
      default:
        break;
    }
  }, []);

  // вычисление общей стоимости с useMemo
  const totalCost = useMemo(() => {
    const q = Number(quantity);
    const p = Number(price);
    const d = Number(discount);

    if (q && p) {
      const discountAmount = (q * p * d) / 100;
      return q * p - discountAmount;
    }
    return 0;
  }, [quantity, price, discount]);

  // кнопка "Очистить" для сброса формы
  const handleReset = () => {
    setName("");
    setQuantity("");
    setPrice("");
    setDiscount("");
  };

  return (
    <div className="container">
      <h2>Форма заказа</h2>
      <form>
        <label>Наименование товара:</label>
        <input type="text" name="name" value={name} onChange={handleChange} required />

        <label>Количество:</label>
        <input type="number" name="quantity" value={quantity} onChange={handleChange} required />

        <label>Цена за единицу:</label>
        <input type="number" name="price" value={price} onChange={handleChange} required />

        <label>Скидка (%):</label>
        <input type="number" name="discount" value={discount} onChange={handleChange} required />

        <h3 className={`total ${totalCost ? "updated" : ""}`}>Итоговая сумма: ${totalCost.toFixed(2)}</h3>  
        {/* для плавной аннимации */}

        <button type="button" onClick={handleReset}>Очистить</button>
      </form>
    </div>
  );
}

export default App;