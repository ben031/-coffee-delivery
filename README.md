# ☕Coffee-Order Web application

리액트로 처음 만들어본 커피 주문 웹 어플리게이션 입니다🙂

## 사용한 기술

- Context API를 사용한 상태 관리
- react-router-dom을 활용한 SPA 어플리케이션
- styled-components
- fontawesome

<br />

## 코드 설명

```javascript
const allMenu = [
  {
    id: 1,
    name: "아메리카노",
    price: "3500",
    photo: americano,
    size: ["large", "medium"],
    quantity: 1,
    modal: false,
  },
  {
    id: 2,
    name: "카페라떼",
    price: "4000",
    photo: latte,
    size: ["large", "medium"],
    quantity: 0,
    modal: false,
  },
  {
    id: 3,
    name: "카페모카",
    price: "4000",
    photo: mocha,
    size: ["large", "medium"],
    quantity: 0,
    modal: false,
  },
];
```

```javascript
// allMenu 배열을 useState 함수 사용해 상태 관리를 한다.
const [menu, setMenu] = useState(allMenu);

// 장바구니에 들어가는 물건 관리 with useState
const [ordered, setOrdered] = useState([]);

// 아이탬 클릭 시 모달 창 구현
const changeModalState = (id) => {
  setMenu(
    menu.map((each) => (each.id === id ? { ...each, modal: true } : each))
  );
};

// 모달 창에서 다시 아이템 화면으로 복귀
const changeModalStateFalse = (id) => {
  setMenu(
    menu.map((each) => (each.id === id ? { ...each, modal: false } : each))
  );
};

// 카트에 아이템 집어넣기
const addCart = (id, price, photo, name, num) => {
  // 클릭시 모달 창 구현
  changeModalStateFalse(id);

  // 장바구니에 등록이 되어있는지 안되어있는지 확인
  const findItem = ordered.find((item) => item.id === id);

  const orderedCoffee = {
    id,
    name,
    photo,
    price,
    quantity: num,
  };

  // 만약 커피의 수량이 0이라면 장바구니에 집어넣지 않고 함수 종료
  // 아니라면 장바구니에 있는지 없는 지 확인 후 수량 재조정 혹은 장바구니에 추가
  if (orderedCoffee.quantity === 0) {
    return;
  } else {
    if (!findItem) {
      setOrdered(ordered.concat(orderedCoffee));
    } else {
      setOrdered(
        ordered.map((orderedOne) =>
          orderedOne.id === id
            ? { ...orderedOne, quantity: orderedOne.quantity + num }
            : orderedOne
        )
      );
    }
  }
};

const addComma = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// 장바구니에서 아이템 삭제
const removeItem = (id) => {
  setOrdered(ordered.filter((each) => each.id !== id));
};

return (
  // Context API를 이용한 상태 관리
  // React-router-dom을 이용해 SPA 구현
  <CoffeeContextProvider
    value={{
      menu,
      ordered,
      changeModalState,
      changeModalStateFalse,
      addCart,
      setOrdered,
      addComma,
      removeItem,
    }}
  >
    <Title />
    <Route path="/" component={MenuList} exact={true} />
    <Route path="/cart" component={CartList} />
    <Route path="/pay" component={Pay} />
    <Route path="/complete" component={CompletePay} />
    <Route path="/default" component={Default} />
  </CoffeeContextProvider>
);
```
