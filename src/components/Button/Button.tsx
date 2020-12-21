import React, { ReactChild, ElementType } from 'react'
import styled from '@emotion/styled'

type SizeType = 'small' | 'medium' | 'large'

const FontSize = {
  small: 14,
  medium: 16,
  large: 24
}

type ButtonPropsType = {
  as?: ElementType<any>,
  size?: SizeType,
  children?: ReactChild
}

interface WrapperPropsType {
  size: SizeType
};

const Wrapper = styled.button<WrapperPropsType>(
  {
    padding: '14px 28px'
  },
  props => ({
    fontSize: `${FontSize[props.size]}px`,
  })
)

const WrapperBody = styled.span(({ theme }: any) => ({
  width: '100%',
  borderLeft: `2px solid ${theme.primary}`,
  borderTop: `2px solid ${theme.primary}`,
  borderRight: `2px solid ${theme.primary}`
}))

const WrapperFooter = styled.span(() => ({
  width: '100%',
  lineHeight: 0
}))

const WrapperFooterLeft = styled.span(({ theme }: any) => ({
  position: 'relative',
  borderTop: `10px solid ${theme.primary}`,
  borderLeft: '10px solid transparent',
}))

const WrapperFooterRigth = styled.span(({ theme }: any) => ({
  width: '100%',
  borderBottom: `2px solid ${theme.primary}`,
  borderRight: `2px solid ${theme.primary}`
}))

const Button = ({ as, size, children }: ButtonPropsType) => {
  return (
    <Wrapper as={as} size={size}>
      <WrapperBody>
        { children }
      </WrapperBody>

      <WrapperFooter>
        <WrapperFooterLeft />
        <WrapperFooterRigth />
      </WrapperFooter>
    </Wrapper>
  )
}

export { Button }