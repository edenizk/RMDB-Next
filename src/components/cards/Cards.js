import React from 'react';
import { useSelector } from 'react-redux'
import { Card } from "../card"
import * as styled from "./CardsStyling"

export const Cards = () => {
  const chars = useSelector(state => state.dataReducer.chars)
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
    </styled.Cards>
    )
  
}