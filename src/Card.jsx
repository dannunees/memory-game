import React, { useState } from "react";
import styled from 'styled-components';

const Box = styled.div `
    background-color: #FFE3BD;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    width: calc((100% / 6) - 24px);
    cursor: pointer;
    position: relative;

    &.active {
        &:before {
            width: 0;
        }
    }

    &:before {
        content: "";
        border-radius: 12px;
        background: #8958FF;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        position: absolute;
        background-image: url('src/assets/images/buh.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transition: 0.3s all;
    }

    img {
        width: 90px;
    }
`;

const Card = ({ src, addLink }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
        addLink(src);
    };



    return (
        <Box onClick={handleClick} className={active ? "active" : ""}>
            <img src={src} alt="" />
        </Box>
    );
};

export default Card;
