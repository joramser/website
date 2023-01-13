export const Footer: React.FC = () => {
  return (
    <footer className="mt-4 block py-4 text-center md:mt-auto">
      <span className="block mb-2 md:inline md:m-0 text-indigo-400">Work in Progress 🔧 </span>
      <span className="hidden md:inline md:mx-1">-</span>
      <span>Handmade with ❤️</span>
      <span> © {new Date().getFullYear()}</span>
    </footer>
  );
};
