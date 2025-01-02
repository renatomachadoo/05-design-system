import * as RadixToast from '@radix-ui/react-toast'
import {
  ActionButton,
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  description: string
  open?: boolean
  setOpen: (open: boolean) => void
}

export function Toast({
  title,
  description,
  open = false,
  setOpen,
}: ToastProps) {
  return (
    <RadixToast.ToastProvider>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastAction asChild altText="Close toast">
          <ActionButton onClick={() => setOpen(false)}>
            <X />
          </ActionButton>
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </RadixToast.ToastProvider>
  )
}
