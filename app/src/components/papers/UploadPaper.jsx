import { useDropzone } from "react-dropzone";

function UploadPaper({ setFile }) {

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [] },
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    }
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-greyBlue p-8 rounded-lg text-center cursor-pointer hover:bg-bgSoft"
    >
      <input {...getInputProps()} />

      <p className="text-textSecondary">
        Drag & Drop PDF here or click to upload
      </p>

    </div>
  );
}

export default UploadPaper;