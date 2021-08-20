import React from 'react'


import styled, { css } from 'styled-components';
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
// import Carousel from 'react-material-ui-carousel'


const HomeCarousel = () => {

    const width = '100%', height = '400px';
    const Container = styled.div`
    //   border: 1px solid red;
      position: relative;
      overflow: hidden;
      width: ${width};
    `;
    const Children = styled.div`
      width: ${width};
      position: relative;
      height: ${height};
    `;
    const Arrow = styled.div`
      text-shadow: 1px 1px 1px #fff;
      z-index: 100;
      line-height: ${height};
      text-align: center;
      position: absolute;
      top: 0;
      width: 10%;
      font-size: 3em;
      cursor: pointer;
      user-select: none;
      ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
    `;
    const Dot = styled.span`
      font-size: 1.5em;
      cursor: pointer;
      text-shadow: 1px 1px 1px #fff;
      user-select: none;
    //   justify: 'flex-center';
    `;
    const Dots = styled.span`
      text-align: center;
      width: ${width};
      z-index: 100;
    //   justify: 'flexCenter';
    `;
    
    
    const CarouselUI = ({ position, total, handleClick, children }) => (
        <Container>
            <Children>
                {children}
                <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>

                <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
            </Children>
            <Dots>
                {Array(...Array(total)).map((val, index) =>
                    <Dot key={index} onClick={handleClick} data-position={index}>
                        {index === position ? '● ' : '○ '}
                    </Dot>
                )}
            </Dots>
        </Container>
    );
    const Carousel = makeCarousel(CarouselUI);





    return (
        <div>

            <Carousel>
                <Slide right>
                    <div>
                        {/* <h1>Slide 1</h1>
                        <p>Slide Description</p> */}
                        <img src="/profile/img.jpg" alt="img"/>
                    </div>
                </Slide>
                <Slide right>
                    <div>
                        <h1>Slide 2</h1>
                        <p>Slide Description</p>
                    </div>
                </Slide>
                <Slide right>
                    <div>
                        <h1>Slide 3</h1>
                        <p>Slide Description</p>
                    </div>
                </Slide>
            </Carousel>



        </div>
    )
}

export default HomeCarousel
