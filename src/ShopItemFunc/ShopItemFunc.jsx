import style from './shopItemFunc.module.css';

const ShopItemFunc = ({ item }) => {
  return (
    <div className={style['main-content']}>
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className={style['description']}>{item.descriptionFull}</div>
      <div className={style['highlight-window mobile']}>
        <div className={style['highlight-overlay']}></div>
      </div>
      <div className={style['divider']}></div>
      <div className={style['purchase-info']}>
        <div className={style['price']}>
          {item.currency}
          {parseFloat(item.price)}
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ShopItemFunc;
