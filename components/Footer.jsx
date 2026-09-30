export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-7 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <p className="text-sm text-center text-slate-500 dark:text-slate-400">
        &copy; {year} Pustaka Alvin
      </p>
    </footer>
  );
}