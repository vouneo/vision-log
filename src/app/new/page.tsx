"use client"

import { useState } from 'react'

interface FormData {
  nombre: string
  email: string
  telefono: string
  fecha: string
  observaciones: string
  odEsfera: string
  odCilindro: string
  odEje: string
  oiEsfera: string 
  oiCilindro: string
  oiEje: string
  distanciaPupilar: string
  especialista: string  
}

const initialData: FormData = {
  nombre: '',
  email: '',
  telefono: '',
  fecha: new Date().toISOString().split('T')[0],
  observaciones: '',
  odEsfera: '',
  odCilindro: '',
  odEje: '',
  oiEsfera: '',
  oiCilindro: '',
  oiEje: '',
  distanciaPupilar: '',
  especialista: ''
}

export default function ClientForm() {
  const [formData, setFormData] = useState<FormData>(initialData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg transition-colors">
        <div className="px-6 py-4 border-b dark:border-slate-800 border-slate-200">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Nuevo Registro</h1>
            {/* <div className="text-slate-600 dark:text-slate-300 font-mono">
              Nro. Trabajo: <span className="text-slate-900 dark:text-white">#0001</span>
            </div> */}
          </div>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Datos del cliente */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">Fecha</label>
                <input
                  type="date"
                  name="fecha" 
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                />
              </div>
              
            </div>

            {/* Receta con campos compactos */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white border-b border-slate-500 dark:border-slate-700 pb-2">Receta</h2>
              
              <div className="grid grid-cols-2 gap-8">
                {/* Ojo Derecho */}
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Ojo Derecho</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
                        Esfera <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.25"
                        name="odEsfera"
                        value={formData.odEsfera}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-1 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
                        Cil <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.25"
                        name="odCilindro"
                        value={formData.odCilindro}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-1 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
                        Eje <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="odEje"
                        value={formData.odEje}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-1 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Ojo Izquierdo */}
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Ojo Izquierdo</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
                        Esfera <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.25"
                        name="oiEsfera"
                        value={formData.oiEsfera}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-1 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
                        Cil <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.25"
                        name="oiCilindro"
                        value={formData.oiCilindro}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-1 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
                        Eje <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="oiEje"
                        value={formData.oiEje}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-1 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
  <div>
    <div className="flex items-center gap-4">
      <div className="w-1/3">
        <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
          DP <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="distanciaPupilar"
          value={formData.distanciaPupilar}
          onChange={handleChange}
          required
          className="w-full px-2 py-1 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
        />
      </div>
    </div>
  </div>
  <div>
    <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
      Nombre del Especialista
    </label>
    <input
      type="text"
      name="especialista"
      value={formData.especialista}
      onChange={handleChange}
      className="w-full px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
    />
  </div>
</div>
              
            </div>

            

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">
                Observaciones
              </label>
              <textarea
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-700 rounded-md text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 transition-colors"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}