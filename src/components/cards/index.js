import React from 'react';
import { useSelector } from 'react-redux'
import Card from "../card"
import Character from "../../pages/character"
import * as styled from "./CardsStyling"

const Cards = () => {
  const chars = useSelector(state => state.dataReducer.chars)
  const overlay = useSelector(state => state.UIReducer.overlayCard)
  const loading = useSelector(state => state.UIReducer.loading)

  return ( 
    <styled.Cards>
      <styled.CardList>
        {chars.map((char, index) => {
          return (
            <styled.CardItem key={index}>
              <Card char={char}></Card>
            </styled.CardItem>
          )
        })}
      </styled.CardList>
    {
      overlay && 
        loading && 
        <styled.Loading>
          <styled.GetSchwify></styled.GetSchwify>
        </styled.Loading>
    }
    { !loading &&  <Character></Character> }
      
    </styled.Cards>
    )
  
}
 
export default Cards;