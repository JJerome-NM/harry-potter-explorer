import { Avatar, AvatarFallback, AvatarImage } from "@ui-kit/avatar.tsx"

type Props = {
  src: string
  alt: string
}

export const CharacterImage = ({ src, alt }: Props) => {
  return (
    <Avatar className="relative aspect-square rounded-none h-full w-full select-none md:block">
      <AvatarImage
        className="absolute inset-0 h-full w-full object-cover select-none"
        src={src}
      />
      <AvatarFallback className="rounded-none font-bold">{alt}</AvatarFallback>
    </Avatar>
  )
}
