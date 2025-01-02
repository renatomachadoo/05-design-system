import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Utils/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    open: true,
    setOpen: () => {},
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
