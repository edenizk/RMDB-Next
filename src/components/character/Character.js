import { useDispatch, useSelector } from 'react-redux'
// import React from 'react';
import { ToggleOverlay } from '../../redux/actions/toggleOverlay'
import * as styled from './CharacterStyling'
import { useRouter } from 'next/router'
import { GetSingleCharacter } from '../../redux/actions/getSingleCharacter'
import Link from 'next/link'
import { useEffect } from 'react';

export const Character = () => {
  const router = useRouter()
  const { charid } = router.query
  const dispatch = useDispatch();
  let char;
  let episodes;
  useEffect(() => {
    console.log('called once')
    if (charid)
      dispatch(GetSingleCharacter(charid))
  });

  const overlay = useSelector(state => state.UIReducer.overlayCard)
  const loading = useSelector(state => state.UIReducer.loading)

  if (char === undefined)
    char = useSelector(state => state.dataReducer.character).character
  if (episodes === undefined)
    episodes = useSelector(state => state.dataReducer.episodes)
  // console.log("char", char)

  const toggleOverlay = () => {
    // dispatch(ToggleOverlay({overlay: false}))
  }
  // console.log("episodes", episodes)
  return ( 
    char === undefined ?           
    <styled.Loading>
      <styled.GetSchwify></styled.GetSchwify>
    </styled.Loading> :
    <styled.Container className="test_container">
      <Link href="/"><styled.Button>X</styled.Button></Link>
      <styled.Image src={char.image} alt={char.name}></styled.Image>
      <styled.Content>
        <styled.Name>
          <styled.Status className={char.status}></styled.Status>
          {char.name}
        </styled.Name>
        <styled.Fame>Played in: {episodes ? episodes.length : '...' } episodes</styled.Fame>
        <styled.EpisodeTitle>EPISODE LIST</styled.EpisodeTitle>
        <styled.EpisodeList>
          {
            episodes ?     
            episodes.map((ep, index) => {
              return (
                <styled.Episode key={index}>
                  <styled.EpisodeNumber>- {ep.data.episode}</styled.EpisodeNumber>
                  <styled.EpisodeName>{ep.data.name}</styled.EpisodeName>
                </styled.Episode>
              )
            }) : null
          }
        </styled.EpisodeList>
      </styled.Content>
    </styled.Container>
  )
}

// Character.getInitialProps = async () => {


//   return { char, episodes }
// }