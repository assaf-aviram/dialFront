import styled, {keyframes} from 'styled-components';
// import keyframes from 'styled-components/keyframes';
import Button from './Button';


const glow = keyframes`
0% {
    box-shadow: none;
}

25% {
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.20);
}

50% {
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.40);
}

75% {
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.60);
}

100% {
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}
`;

const StyledButton = styled(Button)`
/* Adapt the colours based on primary prop */
background: ${({ primary }) => primary ? 'palevioletred' : 'white'};
color: ${({ primary }) => primary ? 'white' : 'palevioletred'};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
&:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    animation: ${glow} 0.25s linear;
}
`;

export default StyledButton;