import type { Meta } from '@storybook/react'

import { CSSProperties, useMemo, useState } from 'react'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { IconButton, Table, TableHeader, Typography } from '@/components'

const meta = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta
// type Story = StoryObj<typeof meta>

const data = [
  {
    cardsCount: 100,
    createdBy: 'Putin',
    title: 'Card 1',
    updated: '2024-05-04',
  },
  {
    cardsCount: 5,
    createdBy: 'Obama',
    title: 'Card 2',
    updated: '2024-05-04',
  },
  {
    cardsCount: 180,
    createdBy: 'Van Damm',
    title: 'Card 3',
    updated: '2024-05-04',
  },
  {
    cardsCount: 800,
    createdBy: 'Mike Tyson',
    title: 'Card 4',
    updated: '2024-05-04',
  },
  {
    cardsCount: 12,
    createdBy: 'Sponge Bob',
    title: 'Card 5',
    updated: '2024-05-04',
  },
]

const columnsPrimitives: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'created',
    title: 'Created by',
  },
]

const columns: Column[] = [
  ...columnsPrimitives,
  {
    key: 'icons',
    title: '',
  },
]

const columnsSortable: Column[] = columns.map(column =>
  column.key !== 'icons' ? { ...column, sortable: true } : column
)

type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type Column = {
  key: string
  title: string
}

export const Sortable = () => {
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = useMemo(() => {
    if (!sort) {
      return null
    }

    return `${sort.key}-${sort.direction}`
  }, [sort])

  console.log(sortedString)

  const iconsCell: CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    gap: '1rem',
    height: '3.6rem',
  }

  return (
    <Table.Root>
      <TableHeader columns={columnsSortable} onSort={setSort} sort={sort} />
      <Table.Body>
        {data.map(item => (
          <Table.Row key={item.title}>
            <Table.Cell>
              <Typography variant={'body2'}>{item.title}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.cardsCount}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.updated}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.createdBy}</Typography>
            </Table.Cell>
            <Table.Cell style={iconsCell}>
              <IconButton icon={<PlayCircleIcon />} size={1.3} />
              <IconButton icon={<EditIcon />} size={1.3} />
              <IconButton icon={<DeleteIcon />} size={1.3} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
