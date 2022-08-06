// import Link from 'next/link';
// import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-sm text-gray-500 hover:text-gray-600 transition-all"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  // let currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center mb-8">
      {/* <div className="flex space-x-4 mb-4">
      </div> */}
      <div className="space-x-3 text-gray-500 flex flex-col justify-center">
        {/* <p className="text-center">Copyright &copy; {currentYear} Will Kim</p> */}
        <p className="text-center">Invely's</p>
      </div>
    </footer>
  );
}
