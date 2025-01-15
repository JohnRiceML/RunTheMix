import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function WeeklySchedule() {
  const schedule = [
    { time: '5:30 PM', event: 'Doors Open' },
    { time: '6:00 PM', event: 'Casual Play Begins' },
    { time: '6:45 PM', event: 'Brackets Start' },
    { time: '10:00 PM', event: 'Event Ends' },
  ]

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Weekly Schedule</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Time</TableHead>
            <TableHead>Event</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.time}</TableCell>
              <TableCell>{item.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

