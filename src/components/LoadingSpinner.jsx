export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      <p className="mt-4 text-gray-600">Analyzing document...</p>
      <p className="text-sm text-gray-500 mt-2">This may take a few moments depending on document length</p>
    </div>
  );
}
