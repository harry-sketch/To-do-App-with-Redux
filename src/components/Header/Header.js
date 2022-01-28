import React from 'react'

//Styles
import styled from 'styled-components'

const Header = () => {
    return <HeaderWrap>What's the plan for Today?</HeaderWrap>
}

const HeaderWrap = styled.header`
    margin-bottom: 1rem;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
`
export default Header
