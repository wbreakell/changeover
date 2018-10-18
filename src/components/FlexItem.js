import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/media';

const FlexItem = styled.div`
  ${props =>
    props.alignSelfXS && `align-self: ${props.alignSelfXS};`} ${props =>
  props.flexBasisXS && `flex-basis: ${props.flexBasisXS};`} ${props =>
  props.flexGrowXS && `flex-grow: ${props.flexGrowXS};`} ${props =>
  props.flexShrinkXS && `flex-shrink: ${props.flexShrinkXS};`} ${props =>
  props.orderXS && `order: ${props.orderXS};`} ${media.sm`
    ${props => props.alignSelfSM && `align-self: ${props.alignSelfSM};`}
    ${props => props.flexBasisSM && `flex-basis: ${props.flexBasisSM};`}
    ${props => props.flexGrowSM && `flex-grow: ${props.flexGrowSM};`}
    ${props => props.flexShrinkSM && `flex-shrink: ${props.flexShrinkSM};`}
    ${props => props.orderSM && `order: ${props.orderSM};`}
  `} ${media.md`
    ${props => props.alignSelfMD && `align-self: ${props.alignSelfMD};`}
    ${props => props.flexBasisMD && `flex-basis: ${props.flexBasisMD};`}
    ${props => props.flexGrowMD && `flex-grow: ${props.flexGrowMD};`}
    ${props => props.flexShrinkMD && `flex-shrink: ${props.flexShrinkMD};`}
    ${props => props.orderMD && `order: ${props.orderMD};`}
  `} ${media.lg`
    ${props => props.alignSelfLG && `align-self: ${props.alignSelfLG};`}
    ${props => props.flexBasisLG && `flex-basis: ${props.flexBasisLG};`}
    ${props => props.flexGrowLG && `flex-grow: ${props.flexGrowLG};`}
    ${props => props.flexShrinkLG && `flex-shrink: ${props.flexShrinkLG};`}
    ${props => props.orderLG && `order: ${props.orderLG};`}
  `} ${media.xl`
    ${props => props.alignSelfXL && `align-self: ${props.alignSelfXL};`}
    ${props => props.flexBasisXL && `flex-basis: ${props.flexBasisXL};`}
    ${props => props.flexGrowXL && `flex-grow: ${props.flexGrowXL};`}
    ${props => props.flexShrinkXL && `flex-shrink: ${props.flexShrinkXL};`}
    ${props => props.orderXL && `order: ${props.orderXL};`}
  `};
`;

export default FlexItem;
