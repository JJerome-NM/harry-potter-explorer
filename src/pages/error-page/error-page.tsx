import { NotFoundWithDetails } from "@components"

type Props = {
  title?: string
  details?: string
}

export const ErrorPage = ({ title, details }: Props) => {
  return (
    <NotFoundWithDetails
      title={title}
      description={details}
    />
  )
}
