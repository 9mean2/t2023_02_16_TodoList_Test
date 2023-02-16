### [과제] 숙련주차 과제 답


![다운로드](https://user-images.githubusercontent.com/122663756/219272397-9130a1b0-c509-4051-92b7-21c1239703e3.jpeg)
![crying-man-sad](https://user-images.githubusercontent.com/122663756/219272447-73b45d33-66dd-4107-8452-855289807520.gif)
![dog-about-to-cry-meme-75e3a6f259f774d94d68cabccaeee01c](https://user-images.githubusercontent.com/122663756/219272462-2f153ea3-f5bf-4222-aeb9-c93eaea2948a.jpg)
![crying-cat1](https://user-images.githubusercontent.com/122663756/219272492-26ca2e5c-a0d3-4af4-aebe-84a3dcfaeef9.jpg)



## 1. 추가 

######  // dispatch 가져오기 , 만든 액션 객체를 리듀서로 보내주는 역할을 하는 훅
``` JSX
const dispatch = useDispatch();
  
  // dispatch 안에 addTodo 넣음
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;

    //리듀서
    dispatch(
      addTodo({
        id: id,
        title: todo.title,
        body: todo.body,
        isDone: false,
      })
    );
  };
```


## 2. 추가하기 누르면 아이템 사라지는거

###### //...을 사용해 state.todos에 있는 아이템들을 다 가져오고 , 액션 페이로드 추가
``` JSX
 case ADD_TODO:
      return {
        //배열 ... state에 todos 를 다 가져오고 , 뒤에 추가
        ...state,
        todos: [...state.todos, action.payload],
      };
  
```


## 3. 삭제가 동작을 안한다

###### // dlelete case 추가 , filter를 사용해 state 아이디랑 페이로드가 일치하지 않게
```JSX
case DELETE_TODO:
	  return {
	  ...state,
	   todos: state.todos.filter((item) => item.id !== action.payload),
};
```


## 4. 상세 페이지에 진입 하였을 때 데이터가 업데이트 되지 않음

###### //안 쓰인거 , useEffect , getTodoByID , id porps , dispatch
###### //컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
###### //디펜더시 어레이 안 쓰니까 로드 안되길래 넣었더니 로드가 됐음

``` JSX
useEffect(() => {
dispatch(getTodoByID(id));
},[dispatch])
```

## 5. 완료된 카드의 상세 페이지에 진입 하였을 때 올바른 데이터를 불러오지 못함

###### // 얘 혼자만 index.id 였어서 그냥 todo.id로 바꾸니까 작동이 됐다. (제출 하기 전에 이거 안했어서 급하게 호다닥 수정함)
``` JSX
<StTodoContainer key={todo.id}>
```


## 6 취소 버튼 클릭시 기능이 작동하지 않음

###### //뒤에 인자값? 쓰면 온클릭은 ()를 붙여줘야한다
``` JSX
onClick={() => onToggleStatusTodo(todo.id)}
```

