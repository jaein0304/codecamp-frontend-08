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

} from '../../styles/emotion-board-detail'

export default function BoardDetailPage() {

    

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
                        <ProfileName>노원두</ProfileName><br/>
                        <ProfileDetail>Date : 2021.02.18</ProfileDetail>
                    </ProfileWrapper>
                    <TopIcon>
                        <img src="/img-board-detail/ic_link-32px.png"/>
                        <img src="/img-board-detail/ic_location_on-32px.png"/>
                    </TopIcon>
            </TopWrapper>

            <hr/><br/><br/>
            <Title>게시글 제목입니다.</Title>
            <MainImage>
            <img src="/img-board-detail/image.png"/>
            </MainImage>
            <Contents>가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
            </Contents>
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