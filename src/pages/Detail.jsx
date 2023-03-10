import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//상세 페이지에서 특정 Todo만 조회하는 action creator
import { getTodoByID } from "../redux/modules/todos.js";

const Detail = () => {
  // 접근
  const todo = useSelector((state) => state.todos.todo);

  // 디스패치 불러오기
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  //안 쓰인거 , useEffect , getTodoByID , id porps , dispatch
  //컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>{`id: ${todo.id}`}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.desc}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
