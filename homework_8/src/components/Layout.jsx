import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
          <li><Link to="/products">Продукты</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;