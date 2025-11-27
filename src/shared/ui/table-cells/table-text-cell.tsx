import type { PropsWithChildren } from "react"

export const TableTextCell = ({ children }: PropsWithChildren) => {
  return <span className="font-medium text-wrap">{children}</span>
}
