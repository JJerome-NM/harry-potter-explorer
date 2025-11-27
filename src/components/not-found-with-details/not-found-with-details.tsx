import { Empty, EmptyDescription, EmptyMedia, EmptyTitle } from "@ui-kit/empty.tsx"
import { BadgeX } from "lucide-react"

type Props = {
  title?: string
  description?: string
}

export const NotFoundWithDetails = ({ title, description }: Props) => {
  return (
    <Empty>
      <EmptyMedia
        variant="icon"
        className="bg-red-500/20">
        <BadgeX className="stroke-red-500" />
      </EmptyMedia>
      <EmptyTitle>{title || "Not Found"}</EmptyTitle>
      <EmptyDescription>{description}</EmptyDescription>
    </Empty>
  )
}
