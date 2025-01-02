import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  padding: '2rem',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastRoot = styled(Toast.Root, {
  background: '$gray800',
  borderRadius: 6,
  border: '1px solid $gray600',
  padding: '$3 $4',
  display: 'grid',
  gridTemplateAreas: `'title action' 'description action'`,
  gridTemplateColumns: 'auto max-content',
  alignItems: 'start',
  gap: '0.5rem',
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$xl',
  lineHeight: '$base',
  fontWeight: '$bold',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$xs',
  lineHeight: '$base',
  fontWeight: '$regular',
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

export const ActionButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  color: '$gray200',

  svg: {
    height: '$5',
    width: '$5',
  },
})
