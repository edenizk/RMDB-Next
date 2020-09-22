// import Head from 'next/head'
import styled from 'styled-components'
// import Card from '../components/card'
// import { myTheme } from '../styles/main'
import { useDispatch, useSelector } from 'react-redux'
import { InitData } from '../redux/actions/initData';
import { Loading } from '../components/loading';
import { useEffect } from 'react';
import { Cards } from '../components/cards';

const MyMain = styled.main` 
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #263238;
  width: 100%;
`;

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.dataReducer.loading)

  useEffect(() => {
    setTimeout(() => {
      dispatch(InitData())
    }, 6200);

  });

  return (
    <MyMain>
      {loading ? <Loading></Loading> : <Cards></Cards>}
    </MyMain>
  )
}
