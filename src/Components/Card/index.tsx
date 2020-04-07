import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring/web.cjs';

type Props = {};

const Container = styled(animated.div)`
    width: 400px;
    height: 400px;
    background-color: pink;
    border: 1px solid red;
    border-radius: 15px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
`;

const AnimatedCard: React.FC<Props> = () => {
    const calc = (x, y) => [
        -(y - window.innerHeight / 2) / 20,
        (x - window.innerWidth / 2) / 20,
        1.1
    ];
    const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));
    return (
        <Container
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        />
    );
};

export default AnimatedCard;
