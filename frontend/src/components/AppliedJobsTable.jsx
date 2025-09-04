import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobsTable = () => {
  return (
    <div>
        <Table className='mt-2  rounded-full'>
            <TableCaption className='font-bold'>List of your applied Jobs</TableCaption>
            <TableHeader>
                <TableRow className=' bg-gray-300'>
                    <TableHead className='font-bold text-lg'>S No.</TableHead>
                    <TableHead className='font-bold text-lg'>Date</TableHead>
                    <TableHead className='font-bold text-lg'>Job Role</TableHead>
                    <TableHead className='font-bold text-lg'>Company</TableHead>
                    <TableHead className='font-bold text-lg'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1,2,3,4].map((item, index)=>(
                        <TableRow key={index} className='hover:bg-gray-200'>
                            <TableCell>1</TableCell>
                            <TableCell>28.2.2025</TableCell>
                            <TableCell>Web Developer</TableCell>
                            <TableCell>Pinterest</TableCell>
                            <TableCell><Badge variant='ghost' className={"text-green-500 font-bold"}>Selected</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobsTable