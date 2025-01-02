import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  border: 0,
  borderRadius: 5,
  padding: '$3 $4',
  lineHeight: '$shorter',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
