import styled from 'styled-components';

import Nav from './Nav';

const StyledNav = styled(Nav)`
display: inline-flex;
border: 1px solid purple;
margin: .5em;
a {
    padding: .5em .75em;
    text-decoration: none;
    :hover {
        background-color: pink;
    }
    ${'' /* margin-right: 1em; */}
    ${'' /* &:last-child {
        margin: 0;
    } */}
}
`;

export default StyledNav;