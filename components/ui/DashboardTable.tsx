'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'

type problemInfo = {
  id: number
  title: string
  difficulty: string
  url: string
}
import React from 'react'

type DashboardTableProps = {
  problemInfo: problemInfo[]
}

export default function DashboardTable(props: DashboardTableProps) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20%]">Id</TableHead>
            <TableHead className="w-[60%]">Problem</TableHead>
            <TableHead className="text-right">Difficulty</TableHead>
          </TableRow>
          {props.problemInfo.map((problem: problemInfo) => {
            return (
              <TableRow key={problem.id}>
                <TableCell className="font-medium">{problem.id}</TableCell>
                <TableCell>
                  <Link href={`/problems/${problem.id}`}>{problem.title}</Link>
                </TableCell>
                <TableCell className="text-right">
                  {problem.difficulty}
                </TableCell>
              </TableRow>
            )
          })}
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </>
  )
}
