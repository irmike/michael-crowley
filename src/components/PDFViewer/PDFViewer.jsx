'use client';

import {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './PDFViewer.css';

// Configure worker with unpkg.com CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({url, className = '', style = {}}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div className={`pdf-viewer-container ${className}`} style={style}>
            <Document
                file={url}
                onLoadSuccess={({numPages}) => setNumPages(numPages)}
                loading={<div>Loading PDF...</div>}
            >
                <Page pageNumber={pageNumber}/>
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
