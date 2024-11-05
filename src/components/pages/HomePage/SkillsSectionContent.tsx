import { resume, ResumeDataTechnology } from '@/data';
import clsx from 'clsx';
import React, { ComponentProps, ReactNode } from 'react'

const columns: {
  id: string;
  label: string;
  render: (params: { row: ResumeDataTechnology; rowIndex: number }) => ReactNode;
  headCellClassName?: string;
  cellClassName?: string;
}[ ] = [
  {
    id: 'num',
    label: '#',
    headCellClassName: 'w-0',
    cellClassName: 'nowrap',
    render: ({ rowIndex }) => `${rowIndex + 1}`.padStart(2, '0'),
  },
  {
    id: 'name',
    label: 'name',
    cellClassName: 'nowrap',
    render: ({ row }) => <span className='text-primary'>{row.name}</span>,
  },
  {
    id: 'tags',
    label: 'tags',
    cellClassName: 'text-right',
    render: ({ row }) => {
      return row.tags.join(', ');
    }
  }
];

interface SkillsTableProps extends ComponentProps<'table'> {
  data:  ResumeDataTechnology[]
}

const SkillsTable = ({ data, className, ...props }: SkillsTableProps) => {
  const columnClassName = 'pr-5';

  return (
    <table className={clsx('font-mono font-medium text-tertiary w-full text-sm', className)} {...props}>
       <thead>
          <tr>
            {columns.map(({ id, label, cellClassName, headCellClassName }) => {
              return (
                <th className={clsx('text-left font-medium border-b border-secondary py-2', columnClassName, cellClassName, headCellClassName)} key={id}>{label}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            return (
              <tr key={row.id}>
                {columns.map((column) => {
                  return (
                    <td
                      key={column.id}
                      className={clsx(
                        columnClassName,
                        column.cellClassName,
                        "border-b border-border-primary py-1 h-14"
                      )}
                    >
                      {column.render({ row, rowIndex })}
                    </td>
                  );
                })}
              </tr>
            )
          })}
        </tbody>
    </table>
  )
}

interface SkillsListProps extends ComponentProps<'ul'> {
  data:  ResumeDataTechnology[]
}

const SkillsList = ({ data, className, ...props }: SkillsListProps) => {
  return (
    <ul className={clsx('font-mono text-sm font-medium flex flex-col', className)} {...props}>
      {data.map((item, i) => {
        return (
          <li className='flex gap-2.5 py-2 min-h-10 border-b border-border-primary' key={item.id}>
            <span className='text-text-quaternary'>
              {`${i + 1}`.padStart(2, '0')}
            </span>

            <div className='flex flex-1 max-sm:flex-col sm:justify-between gap-1 sm:gap-2'>
              <p className='text-text-primary whitespace-nowrap'>
                {item.name}
              </p>
              <p className='text-text-tertiary max-sm:text-xs sm:text-right'>
                {item.tags.join(', ')}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const SkillsSectionContent = () => {
  return (
    <>
      {/* <SkillsTable data={resume.technologies} /> */}
      <SkillsList data={resume.technologies}/>
    </>
  )
}


export default SkillsSectionContent