import React, { useMemo, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import '../css/dragndrop.css';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#fff',
    borderStyle: 'dashed',
    backgroundColor: 'rgba(92,88,88,0.22)',
    transition: 'border .24s ease-in-out',
    minHeight: 300,
    minWidth: 550,

};

const activeStyle = {
    backgroundColor: 'rgba(158,152,152,0.39)'
};



interface UploadFile {
    files: File[],
    onDrop: (acceptedFiles: File[]) => void
}

export const Dragndrop: React.FC<UploadFile> = ({ files, onDrop}) => {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        accept: 'image/*, text/csv, application/json, .xlsx, .xls',
        onDrop: onDrop
    });

    const style: any = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
    }), [
        isDragActive,
    ]);

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <div className="container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
        </div>
    );
}