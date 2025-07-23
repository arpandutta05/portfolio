"use client"

import { useState } from "react"
import { Eye, Download, X, FileText, ImageIcon, File } from "lucide-react"
import { Button } from "./ui/Button"

const DocumentViewer = ({ documents, title }) => {
  const [selectedDoc, setSelectedDoc] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openDocument = (doc) => {
    setSelectedDoc(doc)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedDoc(null)
  }

  const getFileIcon = (type) => {
    if (type?.includes("image")) return ImageIcon
    if (type?.includes("pdf")) return FileText
    return File
  }

  const getFileTypeColor = (type) => {
    if (type?.includes("image")) return "from-green-500 to-emerald-500"
    if (type?.includes("pdf")) return "from-red-500 to-pink-500"
    return "from-blue-500 to-cyan-500"
  }

  if (!documents || documents.length === 0) return null

  return (
    <>
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-purple-400" />
          {title} Documents
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {documents.map((doc, index) => {
            const IconComponent = getFileIcon(doc.type)
            const colorClass = getFileTypeColor(doc.type)

            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-gray-300 mb-2 truncate" title={doc.name}>
                    {doc.name}
                  </p>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-xs text-gray-400 hover:text-white hover:bg-white/10"
                      onClick={() => openDocument(doc)}
                    >
                      <Eye className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-xs text-gray-400 hover:text-white hover:bg-white/10"
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = doc.url
                        link.download = doc.name
                        link.click()
                      }}
                    >
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {isModalOpen && selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] w-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <h3 className="text-lg font-semibold text-white truncate">{selectedDoc.name}</h3>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = selectedDoc.url
                    link.download = selectedDoc.name
                    link.click()
                  }}
                >
                  <Download className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white" onClick={closeModal}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="p-4 max-h-[calc(90vh-80px)] overflow-auto">
              {selectedDoc.type?.includes("image") ? (
                <img
                  src={selectedDoc.url || "/placeholder.svg"}
                  alt={selectedDoc.name}
                  className="w-full h-auto rounded-lg"
                />
              ) : selectedDoc.type?.includes("pdf") ? (
                <iframe src={selectedDoc.url} className="w-full h-[70vh] rounded-lg" title={selectedDoc.name} />
              ) : (
                <div className="text-center py-12">
                  <File className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-4">Preview not available for this file type</p>
                  <Button
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = selectedDoc.url
                      link.download = selectedDoc.name
                      link.click()
                    }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download File
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DocumentViewer
