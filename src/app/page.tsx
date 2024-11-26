import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const trabajos = [
  {
    nombre: "Juan Pérez",
    fecha: "2024-03-26",
    nroTrabajo: "T001",
  },
  {
    nombre: "María García",
    fecha: "2024-03-25",
    nroTrabajo: "T002",
  },
  {
    nombre: "Carlos López",
    fecha: "2024-03-24",
    nroTrabajo: "T003",
  },
  {
    nombre: "Ana Martínez",
    fecha: "2024-03-23",
    nroTrabajo: "T004",
  },
  {
    nombre: "Luis Rodríguez",
    fecha: "2024-03-22",
    nroTrabajo: "T005",
  },
]

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>Lista de los últimos trabajos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Nombre</TableHead>
          <TableHead className="w-[150px]">Fecha</TableHead>
          <TableHead className="text-right">Nro de Trabajo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trabajos.map((trabajo) => (
          <TableRow key={trabajo.nroTrabajo}>
            <TableCell className="font-medium">{trabajo.nombre}</TableCell>
            <TableCell>{trabajo.fecha}</TableCell>
            <TableCell className="text-right">{trabajo.nroTrabajo}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}