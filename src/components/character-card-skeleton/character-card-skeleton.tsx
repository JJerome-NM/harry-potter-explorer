import { Skeleton } from "@ui-kit/skeleton.tsx"
import { Card, CardDescription, CardHeader } from "@ui-kit/card.tsx"

export const CharacterCardSkeleton = () => {
  return (
    <Card className="pt-0 overflow-hidden">
      <Skeleton className="w-full h-full aspect-square rounded-none" />
      <CardHeader>
        <Skeleton className="h-4 w-3/5" />
        <CardDescription className="flex flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
