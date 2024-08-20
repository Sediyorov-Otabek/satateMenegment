import React, { useReducer } from "react";
import { Value } from "sass";
// import { reduser, initialState } from "./Reduser";

const Footer = () => {
  // let [data, dispatch] = useReducer(reduser, initialState);
  // console.log(data.strr);
  return (
    <div className="w-full mt-12  bg-slate-200 p-5">
      <div className="container mx-auto flex items-center  ">
        <div className="footer__wrap w-full flex items-center justify-between gap-5  md:max-lg:flex-wrap   ">
          {/* <ul className="footer__collection flex md items-start justify-start flex-col w-96">
            <p>{data.strr}</p>{" "}
            <button
              className="border hover:bg-red-500 rounded-xl px-2 py-1"
              onClick={() => dispatch({ type: "NATION", laylo: "uzbek" })}
            >
              uzbek
            </button>
            <button
              className="border hover:bg-red-500 rounded-xl px-2 py-1"
              onClick={() => dispatch({ type: "NATION", laylo: "rus" })}
            >
              rus
            </button>
            <b>
              {" "}
              <i></i>
              {data.son}
            </b>
            <li className="footer__item">
              <button
                onClick={() => dispatch({ type: "INC", payload: 1 })}
                className="border hover:bg-red-500 rounded-xl px-2 py-1"
              >
                increment
              </button>
            </li>
            <li className="footer__item">
              <button
                disabled={data.son <= 0}
                onClick={() => dispatch({ type: "DEC" })}
                className="border hover:bg-red-500 rounded-xl px-2 py-1"
              >
                decrement
              </button>
            </li>
            <li className="footer__item">
              <button
                onClick={() => dispatch({ type: "INC", payload: 10 })}
                className="border hover:bg-red-500 rounded-xl px-2 py-1"
              >
                increment
              </button>
            </li>
          </ul> */}
          <ul className="footer__collection">
            <b>Меню</b>
            <li className="footer__item">
              <a href="">Главная | Каталог | Товары в наличии</a>
            </li>
            <li className="footer__item">
              <a href="">Скидки | Популярное | Вдохновение</a>
            </li>
            <li className="footer__item">
              <a href="">Доставка | Услуги | Условия</a>
            </li>
            <li className="footer__item">
              <a href="">Контакты | Вставить | Cписок покупок</a>
            </li>
            <li className="footer__item">
              <a href="">Корзина | Личный кабинет | Избранное</a>
            </li>
          </ul>
          <ul className="footer__collection">
            <b>Контакты</b>
            <li className="footer__item">г.Минск</li>
            <li className="footer__item">
              г.Минск Ул. Первомайская, Д. 1, Кв. 43 84
            </li>
            <li className="footer__item">+ 375 448 473 09 48</li>
            <li className="footer__item">ikeaekspress@gmail.com</li>
          </ul>
          <ul className="footer__collection">
            <b>Минск</b>
            <li className="footer__item">
              <a href="">Корзина </a>
            </li>
            <li className="footer__item">
              <a href=""> Личный кабинет </a>
            </li>
            <li className="footer__item">
              <a href=""> Избранное</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
