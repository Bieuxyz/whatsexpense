import { AvatarImageProps } from "@radix-ui/react-avatar"
import { FC } from "react"
import {
  Avatar as AvatarProvider,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx"

interface AvatarProps extends AvatarImageProps {
  delayMs?: number
}

export const Avatar: FC<AvatarProps> = ({ delayMs, className, ...props }) => {
  return (
    <AvatarProvider className={className}>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={delayMs} className="uppercase">
        {props.alt?.slice(0, 2)}
      </AvatarFallback>
    </AvatarProvider>
  )
}
