import react from "react"
import styled from "styled-components"
import {AiOutlineMenu} from "react-icons/ai"
import {BsSun} from "react-icons/bs"
import {CiStar} from "react-icons/ci"
import {BsCalendar3} from "react-icons/bs"
import {BsPerson} from "react-icons/bs"
import {PiHouseLight} from "react-icons/pi"

const Sidebar = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Icon>
                    <AiOutlineMenu/>
                    </Icon>
                    <First>
                        <Icon1>
                            <BsSun/>
                        </Icon1>
                        My Day
                    </First>
                    <Second>
                        <Icon1>
                            <CiStar/>
                        </Icon1>
                        Importance
                    </Second>
                    <Second>
                        <Icon1>
                            <BsCalendar3/>
                        </Icon1>
                        Planned
                    </Second>
                    <Second>
                        <Icon1>
                            <BsPerson/>
                        </Icon1>
                        Assign to me
                    </Second>
                    <Second>
                        <Icon1>
                            <PiHouseLight/>
                        </Icon1>
                        Tasks
                    </Second>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Sidebar;
const Icon1 = styled.div`
   
   margin-right: 30px;
   /* margin-top: 3px; */
   font-size: 25px;
`

const Second = styled.div`
display: flex;
font-size: 18px;
padding:0px 0px 25px 30px; 
`

const First = styled.div`
display: flex;
font-size: 18px;
font-weight: bold;
padding:0px 0px 25px 30px; 
`

const Icon = styled.div`
color: black;
font-size: 25px;
margin-top: 50px;
padding:0px 0px 25px 30px;

`

const Wrapper = styled.div`
    /* height: 100%;
    width: 70%; */
    /* background-color: blue; */
`

const Container = styled.div`
    width:360px;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #fff;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* padding-top: 30px; */
    
`