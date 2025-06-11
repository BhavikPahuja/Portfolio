export default function Toast({ message, show }) {
  return (
    <div
      className={`fixed top-6 right-8 z-50 transition-transform duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      } bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg`}
    >
      {message}
    </div>
  );
}