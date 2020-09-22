import { useDispatch } from 'react-redux'
import React from 'react';
import { ToggleOverlay } from '../../redux/actions/toggleOverlay'
import * as styled from './CardStyling'
import Link from 'next/link'

export const Card = (props) => {
  const dispatch = useDispatch();
  const { char } = props

  const toggleOverlay = (id) => {
    dispatch(ToggleOverlay({overlay: true, char: char.id, loading:true}))
  }

  return (
    <Link href={`/character/?charid=${char.id}`} params={char.id} onClick={() => toggleOverlay(char.id)}>
      <styled.CardStyle>
        <styled.Image src={char.image} alt={char.name}></styled.Image>
        <styled.Content>
          <styled.Name>
            <styled.Status className={char.status}></styled.Status>
            {char.name}
          </styled.Name>
          <styled.Fame>Played in: {char.fame} episodes</styled.Fame>
        </styled.Content>
      </styled.CardStyle>
    </Link>
    )
}