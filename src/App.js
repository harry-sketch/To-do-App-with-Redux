import React from 'react'

// styles
import styled from 'styled-components'

// Components
import { Header, Todo } from './components/index'

function App() {
    return (
        <MainWrapper>
            <Header title="What's the Plan for Today ?" />
            <Todo />
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
    background: #060822;
    height: 100%;
    width: 500px;
    max-width: 100%;
    border-radius: 1rem;
    padding: 1rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export default App
