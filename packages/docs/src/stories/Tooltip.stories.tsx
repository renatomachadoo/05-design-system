import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: '26 de Outubro - Disponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
