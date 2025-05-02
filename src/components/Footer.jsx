export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Terms of Service Analyzer. All rights reserved.</p>
          <p className="mt-2">This tool provides analysis for informational purposes only and is not legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
