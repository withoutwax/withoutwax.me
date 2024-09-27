// import Link from 'next/link';
// import NowPlaying from '@/components/NowPlaying';

// const ExternalLink = ({ href, children }) => (
//   <a
//     className="text-sm text-gray-500 transition-all hover:text-gray-600"
//     target="_blank"
//     rel="noopener noreferrer"
//     href={href}
//   >
//     {children}
//   </a>
// );

export default function Footer() {
  // let currentYear = new Date().getFullYear();
  return (
    <footer className="mb-8 flex flex-col items-center">
      {/* <div className="flex space-x-4 mb-4">
      </div> */}
      <div className="flex flex-col justify-center space-x-3 text-gray-500">
        {/* <p className="text-center">Copyright &copy; {currentYear} Will Kim</p> */}
        <p className="text-center">Invely's</p>
      </div>
    </footer>
  );
}
