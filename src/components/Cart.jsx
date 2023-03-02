import { useSelector } from "react-redux";
import { removeItem, increaseItem, decreaseItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  const handleIncreaseItem = (item) => {
    dispatch(increaseItem(item));
  };
  const handleDecreaseItem = (item) => {
    dispatch(decreaseItem(item));
  };

  const cartItems = useSelector((store) => store.cart.items);
  const cartTotal = useSelector((store) => store.cart.total);

  return (
    <div className="flex flex-col w-4/6 p-2 border-2 rounded-2xl border-neutral-200">
      <div className="pb-5 text-center">
        <div className="text-3xl font-semibold">Cart</div>
        <div>{cartItems.length} Items</div>
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center">Cart is Empty</div>
      ) : (
        <div>
          {cartItems.map((items) => {
            return (
              <div className="w-full border-b-2 border-neutral-200">
                <div className="flex py-4 justify-between w-full ">
                  <div className="flex flex-col h-full w-1/4 text-sm">
                    {items?.isVeg === 1 ? (
                      <img
                        className="h-4 w-4"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACbCAMAAABCvxm+AAAAZlBMVEX///8AgAB/v3+v16+Hw4fH48c3mzcWixbP58+327f7/fun06eXy5fp9Olfr18+nz5Pp0+/37/v9+8qlSqfz5/i8OKPx48hkCEPhw/b7dtns2c4nDiRyJF3u3cejx7U6dRYrFhxuHF76C9RAAADxElEQVR4nO3bi3aiMBAG4IwoIirUC4j2Yvv+L1mt66lbd5KZyQzSs/lfgO+EJCRh4mC4cY8GeJJssgzf5oaWZJMl2WRJNlmSTZZkkyXZZEk2WZJNlmSTJdlk+W9sy0k2X7SjdjGfTZbDsRVtlXdwm+65ejk+3NZs36fw70yrbfM4W9PWiOua+kXIi7Mdx3kAdkk+3vdsKxc7kuyc3aLs05bRZV+6rDdbEepm96mLXmzLA1t2zmFtb5thc0Yo05mxrXwVys55pY8JgW3J72m3qclfM75t/xZFA3ijTsVs217a1W5wxImYayviaacRQcMxbUXneyYdR5rpeLZGo9W+cJQ+x7KtN0o0gA1hFubY1rRFBy15eJ7j2CpFGkCladuq0gC2erajzhD9ThfaTZBtpd44uGYT6HJk20idBjDSsTUGNAD/LEe1PZnYnjRsMxMagHepSbTpD4RL8nhbZkQD8G2+aDarZvM3HMlm12zehiPZ7JrN23AU296QBoCvgSk2i0/Cd/CPA8XGO/fgZhNjW5nSANC9A8Fm+0o9L5Vgi9vGh1PLbaUxDQBbxoVt1t0NYCW2WXc3vMOFbTYrt9tgq7iwLfbYKBxshgva7IcCOhiCNpuNwt9Btg1B26QH20Ros9op3AbZNQRt8x5sc6Ft0YNtIbSNe7C1QlvMvwRqxgNuN6ltyP1tyOPUcm96jXR+G/J3Yd2DDTnPD9qc9jHvfTrkyWGb5YHDJdixQ9hmv+7F/jSEba25DflkEWz2AxXb2Idt5otybCgMYV+PHpYTbNYbVORLT7IVxraYcyTjGS7q/M34paKv9Nef9zrNf+E/E3lObrq+RNaVZFtpdxq98/zfJdkMNw2+n/Y0W6lVs/IzU99vcZrNrOG8tQ5EW2kzVL2/T8n/xG1WSv6SKapNuajmkoP/kWTbWn8eeQvUS5FtBm8V2ZYKbOqf/EDlCq+OS3cBjP7GEtkUS/NIxXkcm2v0xsOOUOXLsmkU0F5CqlTl2bSK4IKlbxJbfFX0OcTiY67NNfEDYkMs2mbb4qtVa+olBr7NlbJ7FdccyJcEBDbnMvmI6Bi3ZkQ210jfa865qiWzubKVNF3Xsi5CCW3OLd/ZtIp5f1FsOy2aeN/+OrQk0rQ5t6J3uxwrArGynUYsbSbOOVeftGzOFR+h7//0Q3JRUcN2SnbAW29zYF8DVLWdUq7a6vnu3m674l+e1LddspzM/tx3ziasm3892JSTbLIkmyzJJkuyyZJssiSbLMkmS7LJkmyyJJssv8Q2zCSbLMkmyycYVz02m2n0fAAAAABJRU5ErkJggg=="
                      ></img>
                    ) : (
                      <img
                        className="h-4 w-4"
                        src="https://freesvg.org/img/1531813245.png"
                      ></img>
                    )}
                    <div>{items?.name}</div>
                  </div>
                  <div className="flex w-4/12 h-8 rounded-md border-2 border-neutral-300 pb-1 justify-between">
                  <button
                    className=" w-1/6 font-extrabold"
                    onClick={() => handleDecreaseItem(items)}
                  >
                    -
                  </button>
                  <div>{items?.quantity}</div>
                  <button
                    className=" w-1/6 font-extrabold"
                    onClick={() => handleIncreaseItem(items)}
                  >
                    +
                  </button>
                </div>
                  <div className="text-sm">{items?.price / 100}</div>
                </div>
              </div>
            );
          })}
          <div className="flex font-extrabold justify-between">
            Subtotal: <div>{cartTotal / 100}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
