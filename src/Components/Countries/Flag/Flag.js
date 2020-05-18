import React from 'react'
import emojiFlags from 'emoji-flags'
import style from 'styled-components'

const StyledFlag = style.div`
    margin: 2rem 0;
    font-size: 4rem;
    text-align: center;

    @media (max-width: 680px){
        font-size: 3rem;
        margin: 0;
    }
`;

const Flag = ({country}) => {
    return (
        <StyledFlag>
            {emojiFlags.countryCode(country).emoji}
        </StyledFlag>
    );
} 

export default Flag;