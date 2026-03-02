'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './PDFViewer.css';

// Dynamically import react-pdf components to avoid DOMMatrix error during build
const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), {
  ssr: false,
  loading: () => <div>Loading PDF...</div>
});

const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), {
  ssr: false
});

export default function PDFViewer({ url, className = '', style = {} }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfjs, setPdfjs] = useState(null);

    useEffect(() => {
        // Configure worker only on the client side
        import('react-pdf').then(module => {
            module.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${module.pdfjs.version}/build/pdf.worker.min.mjs`;
            setPdfjs(module.pdfjs);
        });
    }, []);

    // Dynamically import CSS on client side
    useEffect(() => {
        import('react-pdf/dist/Page/AnnotationLayer.css');
        import('react-pdf/dist/Page/TextLayer.css');
    }, []);

    if (!pdfjs) {
        return <div>Initializing PDF viewer...</div>;
    }

    return (
        <div className={`pdf-viewer-container ${className}`} style={style}>
            <Document
                file={url}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={<div>Loading PDF...</div>}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            {numPages && (
                <div className="pdf-viewer-controls">
                    <span className="pdf-viewer-page-label">Page {pageNumber} of {numPages}</span>
                    <button
                        onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                        disabled={pageNumber <= 1}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                        disabled={pageNumber >= numPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
