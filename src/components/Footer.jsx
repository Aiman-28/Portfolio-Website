import { NAME } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {NAME} · Built with React
      </p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
