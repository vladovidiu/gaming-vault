import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-fuchsia-800 to-fuchsia-500 py-2">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-white text-lg font-semibold">
          <Link to="/">Gaming Vault</Link>
        </h1>
      </div>
    </header>
  );
}
