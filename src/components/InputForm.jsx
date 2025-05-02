import { useState } from 'react';

export default function InputForm({ onSubmit }) {
  const [text, setText] = useState('');
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        setText(event.target.result);
        setIsFileUploaded(true);
      };
      
      reader.readAsText(file);
    } catch (error) {
      console.error('Error reading file:', error);
      alert('Failed to read the file. Please try again.');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!text.trim()) {
      alert('Please enter or upload Terms of Service text to analyze.');
      return;
    }
    
    onSubmit(text);
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <label htmlFor="tos-text" className="block text-sm font-medium text-gray-700 mb-2">
          Paste Terms of Service Text
        </label>
        <textarea
          id="tos-text"
          rows={12}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste the Terms of Service text here..."
          value={text}
          onChange={handleTextChange}
        />
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">Or upload a text file:</p>
        <input
          type="file"
          accept=".txt,.md,.html,.pdf"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {isFileUploaded && (
          <p className="mt-2 text-sm text-green-600">File uploaded successfully!</p>
        )}
      </div>
      
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Analyze Terms of Service
        </button>
      </div>
    </form>
  );
}
