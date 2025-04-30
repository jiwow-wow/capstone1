// components/ImageSend.tsx
import React, { useState } from "react";
import axios from "axios";

const ImageSend: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setUploading(true);
      const response = await axios.post("/your-backend-endpoint", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload success:", response.data);
      // 업로드 성공 후 추가 처리
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">이미지 업로드</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewUrl && (
        <div className="mt-4">
          <img src={previewUrl} alt="미리보기" className="w-full rounded-lg" />
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {uploading ? "업로드 중..." : "업로드"}
      </button>
    </div>
  );
};

export default ImageSend;
