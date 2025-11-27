type Props = {
  label: string
  value?: string | number | null
}

export const DetailRow = ({ label, value }: Props) => {
  return (
    <>
      <dt className="font-medium text-muted-foreground">{label}</dt>
      <dd className="font-semibold">{value || "N/A"}</dd>
    </>
  )
}
