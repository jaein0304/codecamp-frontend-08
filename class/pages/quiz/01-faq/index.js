import { BsSearch } from "react-icons/bs"
import { IoMdPerson } from "react-icons/io"
import { BsHouseDoor } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { FiHeart } from "react-icons/fi"

import Profile from "../../../public/img/profile.png"

import {
    Wrapper, 
    Title, 
    TitleWrapper,
    MainWrapper,
    IconName,
    Main_Wrapper,
    MainName,
    PinkName,
   // MainKeyword,
    EventWrapper,
    EventDay,
    EventContent,
    EventButton,
    EventToggle,
    EventPadding,
    MainKeyword,
    IconWrapper,
    UnderWrapper,
    UnderName,
    SearchIcon,
    
} from '../../../styles/faq'

export default function MyPage() {
    // JavaScript 쓰는 곳 

    return (
        //HTML 쓰는 곳 
        <Wrapper>
              <EventPadding></EventPadding>
              <SearchIcon><BsSearch size="20"/></SearchIcon>
            <TitleWrapper>
                <Title>마이</Title>
               
                <IconName><img src={Profile} />     임정아</IconName>
            </TitleWrapper>
            <Main_Wrapper>
                <MainName>공지사항</MainName>
                <MainName>이벤트</MainName>
                <PinkName>FAQ</PinkName>
                <MainName>Q&A</MainName>
            </Main_Wrapper>
            <hr width="100%" color="#cacaca"></hr>
            
            <EventPadding></EventPadding>
            <EventDay>Q. 01</EventDay>
            <EventWrapper>
            <EventContent>리뷰 작성은 어떻게 하나요? </EventContent>
            <EventToggle>⋁</EventToggle>
            </EventWrapper>
            <EventPadding></EventPadding>
            <EventDay>Q. 02</EventDay>
            <EventWrapper>
            <EventContent>리뷰 수정/삭제는 어떻게 하나요?</EventContent>
            <EventToggle>⋁</EventToggle>
            </EventWrapper>
            <EventPadding></EventPadding>
            <EventDay>Q. 03</EventDay>
            <EventWrapper>
            <EventContent>아이디/비밀번호를 잊어버렸어요</EventContent>
            <EventToggle>⋁</EventToggle>
            </EventWrapper>
            <EventPadding></EventPadding>
            <EventDay>Q. 04</EventDay>
            <EventWrapper>
            <EventContent>회원탈퇴를 하고싶어요.</EventContent>
            <EventToggle>⋁</EventToggle>
            </EventWrapper>
            <EventPadding></EventPadding>
            <EventDay>Q. 05</EventDay>
            <EventWrapper>
            <EventContent>출발지 설정은 어떻게 하나요?</EventContent>
            <EventToggle>⋁</EventToggle>
            </EventWrapper>
            <EventPadding></EventPadding>
            <EventDay>Q. 06</EventDay>
            <EventWrapper>
            <EventContent>비밀번호를 변경하고 싶어요 </EventContent>
            <EventToggle>⋁</EventToggle>
            </EventWrapper>
            <EventPadding></EventPadding>
            <hr width="100%" color="#cacaca"></hr>

            <IconWrapper>
                <BsHouseDoor size="40"/>
                <IoMdPerson size="40"/> 
                <FiHeart size="40"/>
                <GoLocation size="40"/>
            </IconWrapper>
            
            <UnderWrapper>
                <UnderName>홈</UnderName>
                <UnderName>잇츠로드</UnderName>
                <UnderName>마이찜</UnderName>
                <UnderName>마이</UnderName>
            </UnderWrapper>
        </Wrapper>
    )
}