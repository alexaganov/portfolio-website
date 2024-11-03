import { resume, ResumeDataTechnology } from '@/data';
import clsx from 'clsx';
import React, { ReactNode } from 'react'

const SkillsSectionContent = () => {
  const columns: {
    id: string;
    label: string;
    render: (params: { row: ResumeDataTechnology; rowIndex: number }) => ReactNode;
    headCellClassName?: string;
  }[ ] = [
    {
      id: 'num',
      label: '##',
      render: ({ rowIndex }) => `${rowIndex + 1}`.padStart(2, '0'),
    },
    {
      id: 'name',
      label: 'name',
      render: ({ row }) => <span className='text-primary'>{row.name}</span>,
      // headCellClassName: 'w-full'
    },
    {
      id: 'description',
      label: 'description',
      render: ({ row }) => <>{row.description}</>
    }
  ];

  const columnClassName = 'h-8 pr-5';

  return (
    <table className='font-mono font-medium text-tertiary w-full text-sm'>
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
          {resume.technologies.map((row, rowIndex) => {
            return (
              <tr key={row.id}>
                {columns.map((column) => {
                  return (
                    <td key={column.id} className={clsx(columnClassName, 'border-b border-primary py-1')}>{column.render({ row, rowIndex })}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
    </table>
  )
}


export default SkillsSectionContent