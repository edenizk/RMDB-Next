import { useDispatch, useSelector } from 'react-redux'
// import React from 'react';
import { ToggleOverlay } from '../../redux/actions/toggleOverlay'
import * as styled from '../../styles/pages/EpisodeStyling'
import { useRouter } from 'next/router'
import { GetSingleCharacter } from '../../redux/actions/getSingleCharacter'
import Loading from '../../components/loading';

const Character = (props) => {
  const dispatch = useDispatch();
  const char = useSelector(state => state.dataReducer.character).character
  // const episodes = char.episode
  const router = useRouter()
  const { charid } = router.query
  dispatch(GetSingleCharacter(charid))

  const toggleOverlay = () => {
    dispatch(ToggleOverlay({overlay: false}))
  }
  console.log("episodes", char)

  return ( 
    char === undefined ? <Loading></Loading> :
    <styled.Container className="test_container">
      <styled.Button>X</styled.Button>
      <styled.Image src={char.image} alt={char.name}></styled.Image>
      <styled.Content>
        <styled.Name>
          <styled.Status className={char.status}></styled.Status>
          {char.name}
        </styled.Name>
        <styled.Fame>Played in: {char.episode ? char.episode.length : '...' } episodes</styled.Fame>
        <styled.EpisodeTitle>EPISODE LIST</styled.EpisodeTitle>
        <styled.EpisodeList>
        {
            char.episode ??     
            char.episode.map((ep, index) => {
              return (
                
                <Episode key={index}>
                  <EpisodeNumber>- {ep.data.episode}</EpisodeNumber>
                  <EpisodeName>{ep.data.name}</EpisodeName>
                </Episode>
              )
            })
          }
        </styled.EpisodeList>
      </styled.Content>
    </styled.Container>
  )
}

export default Character;