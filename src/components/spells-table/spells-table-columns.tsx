import type { SpellsTableRow } from "@components/spells-table/spells-table.types.ts"
import type { ColumnDef } from "@tanstack/react-table"
import { TableTextCell } from "@shared/ui/table-cells"

export const spellsTableColumns: ColumnDef<SpellsTableRow>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <TableTextCell>{row.original.name}</TableTextCell>
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <TableTextCell>{row.original.description}</TableTextCell>
  }
]
