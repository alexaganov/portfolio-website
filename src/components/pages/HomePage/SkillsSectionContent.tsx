import { resume, ResumeDataTechnology } from '@/data';
import clsx from 'clsx';
import React, { ComponentProps, ReactNode } from 'react'

const columns: {
  id: string;
  label: string;
  render: (params: { row: ResumeDataTechnology; rowIndex: number }) => ReactNode;
  headCellClassName?: string;
}[ ] = [
  {
    id: 'num',
    label: '#',
    render: ({ rowIndex }) => `${rowIndex + 1}`.padStart(2, '0'),
  },
  {
    id: 'name',
    label: 'name',
    render: ({ row }) => <span className='text-primary'>{row.name}</span>,
  },
  {
    id: 'tags',
    label: 'tags',
    render: ({ row }) => {
      return row.tags.join(', ');
    }
  }
];

interface SkillsTableProps extends ComponentProps<'table'> {
  data:  ResumeDataTechnology[]
}

const SkillsTable = ({ data, className, ...props }: SkillsTableProps) => {
  const columnClassName = 'h-8 pr-5';

  return (
    <table className={clsx('font-mono font-medium text-tertiary w-full text-sm', className)} {...props}>
       <thead>
          <tr>
            {columns.map(({ id, label, headCellClassName }) => {
              return (
                <th className={clsx('text-left font-medium border-b border-secondary', columnClassName, headCellClassName)} key={id}>{label}</th>
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
                    <td key={column.id} className={clsx(columnClassName, 'border-b border-border-primary py-1')}>{column.render({ row, rowIndex })}</td>
                  )
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
          <li className='flex gap-2.5 py-1.5 border-b border-border-primary' key={item.id}>
            <span className='text-text-quaternary'>
              {`${i + 1}`.padStart(2, '0')}
            </span>

            <div className='flex flex-col gap-0.5'>
              <p className='text-text-primary'>
                {item.name}
              </p>
              <p className='text-text-tertiary'>
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
      <SkillsTable className='max-lg:hidden' data={resume.technologies} />
      <SkillsList className='lg:hidden' data={resume.technologies}/>
    </>
  )
}


export default SkillsSectionContent