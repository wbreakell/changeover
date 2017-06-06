import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/utilities/media';

const FlexContainer = styled.div`
  display: flex;
  ${props => props.alignContentXS && `align-content: ${props.alignContentXS};`}
  ${props => props.alignItemsXS && `align-items: ${props.alignItemsXS};`}
  ${props =>
    props.flexDirectionXS && `flex-direction: ${props.flexDirectionXS};`}
  ${props => props.flexWrapXS && `flex-wrap: ${props.flexWrapXS};`}
  ${props =>
    props.justifyContentXS && `justify-content: ${props.justifyContentXS};`}

  ${media.sm`
    ${props =>
      props.alignContentSM && `align-content: ${props.alignContentSM};`}
    ${props => props.alignItemsSM && `align-items: ${props.alignItemsSM};`}
    ${props =>
      props.flexDirectionSM && `flex-direction: ${props.flexDirectionSM};`}
    ${props => props.flexWrapSM && `flex-wrap: ${props.flexWrapSM};`}
    ${props =>
      props.justifyContentSM && `justify-content: ${props.justifyContentSM};`}
  `}

  ${media.md`
    ${props =>
      props.alignContentMD && `align-content: ${props.alignContentMD};`}
    ${props => props.alignItemsMD && `align-items: ${props.alignItemsMD};`}
    ${props =>
      props.flexDirectionMD && `flex-direction: ${props.flexDirectionMD};`}
    ${props => props.flexWrapMD && `flex-wrap: ${props.flexWrapMD};`}
    ${props =>
      props.justifyContentMD && `justify-content: ${props.justifyContentMD};`}
  `}

  ${media.lg`
    ${props =>
      props.alignContentLG && `align-content: ${props.alignContentLG};`}
    ${props => props.alignItemsLG && `align-items: ${props.alignItemsLG};`}
    ${props =>
      props.flexDirectionLG && `flex-direction: ${props.flexDirectionLG};`}
    ${props => props.flexWrapLG && `flex-wrap: ${props.flexWrapLG};`}
    ${props =>
      props.justifyContentLG && `justify-content: ${props.justifyContentLG};`}
  `}

  ${media.xl`
    ${props =>
      props.alignContentXL && `align-content: ${props.alignContentXL};`}
    ${props => props.alignItemsXL && `align-items: ${props.alignItemsXL};`}
    ${props =>
      props.flexDirectionXL && `flex-direction: ${props.flexDirectionXL};`}
    ${props => props.flexWrapXL && `flex-wrap: ${props.flexWrapXL};`}
    ${props =>
      props.justifyContentXL && `justify-content: ${props.justifyContentXL};`}
  `}
`;

export default FlexContainer;
