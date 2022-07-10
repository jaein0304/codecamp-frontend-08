import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import {Wrapper,
    AddressBox,
    AddressBoxPolygon,
    AddressWrapper, 
    AddressContent,
    TopWrapper,
    TopIcon,
    ProfileWrapper,
    ProfileName,
    ProfileDetail,
    Title,
    MainImage,
    Contents,
    Youtube,
    ThumbWrapper,
    Thumb,
    ThumbUpText,
    ThumbDownText,

    UnderWrapper,
    ButtonWrapper,
    Button,
    ButtonPadding,
    Division,

} from '../../../styles/emotion-board-detail'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            createdAt #createAt으로 오타났었움!
        }  
    }
`

export default function StaticRoutedPage(){
    const router = useRouter() 

    const { data } = useQuery(FETCH_BOARD, { 
        variables: { boardId: router.query.DetailId }  //[Id]
    })

    console.log(data)

    return (
        <>
        <Wrapper>
        <AddressWrapper>
             <AddressBox>
                 <AddressContent>서울특별시 영등포구 양산로 200 <br/>
                             (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
                 </AddressContent>
             </AddressBox>
             <AddressBoxPolygon></AddressBoxPolygon>
         </AddressWrapper>

         <TopWrapper>
                 <img src="/img-board-detail/ic_profile-56px.png"/>
                 <ProfileWrapper>
                     <ProfileName>{data?.fetchBoard?.title}</ProfileName><br/>
                     <ProfileDetail>{data?.fetchBoard?.createdAt}</ProfileDetail>
                 </ProfileWrapper>
                 <TopIcon>
                     <img src="/img-board-detail/ic_link-32px.png"/>
                     <img src="/img-board-detail/ic_location_on-32px.png"/>
                 </TopIcon>
         </TopWrapper>

         <hr/><br/><br/>
         <Title>{data?.fetchBoard?.title}</Title>
         <MainImage>
         <img src="/img-board-detail/image.png"/>
         </MainImage>
         <Contents>{data?.fetchBoard?.contents}</Contents>
         <Youtube>
         <img src="/img-board-detail/video.png"/>
         </Youtube>
         <ThumbWrapper>
             <Thumb>
                 <img src="/img-board-detail/ic_thumb_up_off_alt-24px.png"/>
                 <ThumbUpText>1920</ThumbUpText>
             </Thumb>
             <Thumb>
                 <img src="/img-board-detail/ic_thumb_down-24px.png"/>
                 <ThumbDownText>1920</ThumbDownText>
             </Thumb>
         </ThumbWrapper>
     </Wrapper>

     <UnderWrapper>
     <ButtonWrapper>    
         <Button>목록으로</Button> <ButtonPadding></ButtonPadding>
         <Button>수정하기</Button> <ButtonPadding></ButtonPadding>
         <Button>삭제하기</Button>
     </ButtonWrapper>
     <Division></Division>
     </UnderWrapper>
     </>
    )
}