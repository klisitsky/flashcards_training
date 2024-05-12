import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDownIcon, ArrowUpIcon } from '@/assets'
import { Typography } from '@/components'
import { clsx } from 'clsx'

import s from './table-header.module.scss'

import { Table } from '../table'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

type Props = Omit<
  ComponentPropsWithoutRef<typeof Table.Head> & {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>

export const TableHeader = forwardRef<ElementRef<typeof Table.Head>, Props>(
  ({ columns, onSort, sort, ...restProps }, ref) => {
    const handleSort = (key: string, sortable?: boolean) => () => {
      if (!onSort || !sortable) {
        return
      }

      if (sort?.key !== key) {
        return onSort({ direction: 'asc', key })
      }

      if (sort.direction === 'desc') {
        return onSort(null)
      }

      return onSort({
        direction: sort?.direction === 'asc' ? 'desc' : 'asc',
        key,
      })
    }

    return (
      <Table.Head ref={ref} {...restProps}>
        <Table.Row>
          {columns.map(({ key, sortable, title }) => {
            const headCellClasses = clsx(sortable && s.activeHeadCell)

            return (
              <Table.HeadCell
                className={headCellClasses}
                key={key}
                onClick={handleSort(key, sortable)}
              >
                <Typography as={'span'} className={s.sortCell} variant={'subtitle2'}>
                  {title}
                  {sort && sort.key === key && (
                    <>
                      {sort.direction === 'asc' && <ArrowUpIcon className={s.sortIcon} />}
                      {sort.direction !== 'asc' && <ArrowDownIcon className={s.sortIcon} />}
                    </>
                  )}
                </Typography>
              </Table.HeadCell>
            )
          })}
        </Table.Row>
      </Table.Head>
    )
  }
)
