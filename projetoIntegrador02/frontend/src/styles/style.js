import styled from "styled-components";

//Footer
export const FooterMain = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`

export const Div01 = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #D9D9D9;
    color: #0A1626;
    box-sizing: border-box;
    font-size: 14px;
`

export const Div02 = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0A1626;
    box-sizing: border-box;
`
//Body
export const ButtonVoltar = styled.button`
border: none;
color: black;
text-decoration: none;
font-size: 18px;
background-color: #FFFFFF;
margin-left: 30px;
margin-top: 30px;
cursor: pointer;
&:hover{
    color: #ADD9BD;
}
`

export const Divtitulo = styled.div`
display: flex;
justify-content: center;
`

export const TituloRelatorio = styled.h2`
font-family: 'Lucida Sans Regular';
font-weight: 400;
`
export const DivFiltro = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
`

export const SelectFiltro = styled.select``

export const DivButton = styled.div`
display: flex;
justify-content: center;
`

export const ButtonFiltro = styled.button`
margin-left: 10px;
background-color: #ADD9BD ;
border: none;
border-radius: 5px;
padding: 3px 7px 3px 7px;
cursor: pointer;
&:hover{
    background-color: #0A1626;
    color: #FFFFFF;
}
`

export const DivTreinamento = styled.div` 
margin-top: 100px;
`

export const DivSemTreinamento = styled.div`
margin-top: 300px;
`

export const Subtitulo = styled.h3`
font-size: x-large;
font-weight: 300;
margin-left: 300px;
`

export const Th = styled.th`
border-color: inherit;
border-width: 1px;
border-right-style: solid;
padding-right: 200px;
`