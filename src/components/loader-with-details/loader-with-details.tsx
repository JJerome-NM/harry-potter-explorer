import { Empty, EmptyDescription, EmptyMedia, EmptyTitle } from "@ui-kit/empty.tsx"
import { Spinner } from "@ui-kit/spinner.tsx"

type Props = {
  title?: string
  description?: string
}

export const LoaderWithDetails = ({ title, description }: Props) => {
  return (
    <Empty className="w-full">
      <EmptyMedia variant="icon">
        <Spinner />
      </EmptyMedia>
      <EmptyTitle>{title || "Loading..."}</EmptyTitle>
      <EmptyDescription>{description}</EmptyDescription>
    </Empty>
  )
}
