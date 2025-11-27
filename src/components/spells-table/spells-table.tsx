import { getCoreRowModel, getFacetedUniqueValues, useReactTable } from "@tanstack/react-table"
import { DefaultTableRenderer } from "@shared/ui/table"
import { useSpellsGetAll } from "../../api/spells/queries/use-spells-get-all.tsx"
import { spellsTableColumns } from "@components/spells-table/spells-table-columns.tsx"

export const SpellsTable = () => {
  const { spells } = useSpellsGetAll()

  const columns = spellsTableColumns
  const table = useReactTable({
    data: spells ?? [],
    columns,
    state: {},
    getRowId: row => row.id,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  })

  return (
    <div>
      <DefaultTableRenderer
        table={table}
        columnsCount={columns.length}
      />
    </div>
  )
}
