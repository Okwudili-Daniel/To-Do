import styled from "styled-components";
import react, {useState} from "react"
import {CgMenuGridO} from "react-icons/cg"
import {LiaSearchSolid} from "react-icons/lia"
import {CiSettings} from "react-icons/ci"
import {AiOutlineQuestion} from "react-icons/ai"
import {VscMegaphone} from "react-icons/vsc"
import {LiaTimesSolid} from "react-icons/lia"
import Settings from "../../pages/settingDrop";

const Dashboardhead = () =>{

const [count, setCount] = useState(false)

const Drop = () =>{
    setCount(!count);
}

const [question, setQuestion] = useState(false)

const Ques = () =>{
    setQuestion(!question);
}

const [mic, setMic] = useState(false)

const Cop = () =>{
    setMic(!mic);
}


    return(
        <div>
            <Container>
                <Wrapper>
                    <Holder>
                    <Menu>
                    <CgMenuGridO />
                    </Menu>
                    <h3>To Do</h3>
                    </Holder>

                    <Inputhold>
                        <Searchhold>
                            <LiaSearchSolid/>
                        </Searchhold>
                        <Input type="text"/>
                    </Inputhold>
                    <Iconhold>
                        <One onClick = {Drop}><CiSettings/></One>
                        <Two onClick = {Ques}><AiOutlineQuestion/></Two>
                        <Three onClick = {Cop}><VscMegaphone/></Three>
                        <Circle>
                            OG
                        </Circle>
                    </Iconhold>
                    {count? (
                            <SettingDrop>
                                <Settings/>
                            </SettingDrop>
                        ): null}

                    {question? (
                            <QuestionDrop>
                                <QuesWrapper>
                                    <Top>
                                        <h1>Help</h1>
                                        <One>
                                            <LiaTimesSolid/>
                                        </One>
                                    </Top>
                                    <p>Get support</p>
                                    <Text>
                                        <Sync>
                                            Sync
                                        </Sync>
                                        Up to date
                                    </Text>
                                </QuesWrapper>
                            </QuestionDrop>
                        ): null}

                    {mic? (
                            <Micropho></Micropho>
                        ): null}
                </Wrapper>
            </Container>
        </div>
    )
}

export default Dashboardhead;
const Sync = styled.div`
    width: 80px;
    height: 50px;
    border-radius: 5px;
    background-color: blue;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:15px;
`

const Text = styled.div`
    display: flex;
    align-items: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-weight: 400;
    }
`

const QuesWrapper = styled.div`
width: 90%;
height: 100%;

p{
    color: blue;
    font-weight: 100;
    margin-bottom: 50px;
}
`

const Micropho = styled.div`
width: 500px;
height: 100%;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
position: absolute;
top:60px;
right:0px;
`

const QuestionDrop = styled.div`
width: 500px;
height: 92vh;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
position: absolute;
top:60px;
right:0px;
display: flex;
align-items: center;
justify-content: center;
`

const SettingDrop = styled.div`
width: 500px;
height: 100%;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
position: absolute;
top:60px;
right:0px;
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    margin-left: 30px;
`

const Three = styled.div`
font-size: 20px;
margin-left: 30px;
cursor: pointer;
`
const Two = styled.div`
font-size: 20px;
margin-left: 30px;
cursor: pointer;
`

const One = styled.div`
font-size: 20px;
margin-left: 30px;
cursor: pointer;
`

const Iconhold = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    
`
const Input = styled.input`
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 12px;
`

const Searchhold = styled.div`
width: 80px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: 2564CF;

`

const Inputhold = styled.div`
display: flex;
height: 50px;
width: 380px;
background-color: #fff;
border-radius: 5px;
overflow: hidden;

`

const Holder = styled.div`
    display: flex;
    align-items: center;
    h3{
        color: #fff;
        margin-left: 40px;
    }
`

const Menu = styled.div`
color: #fff;
font-size: 28px;
`

const Wrapper = styled.div`
width: 99%;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;

`

const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    /* position: fixed; */
    justify-content: center;
    background-color: #2564CF;
`