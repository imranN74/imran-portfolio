export function Resume() {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex justify-center items-center gap-1 border border-red-500 px-5 py-2 rounded-xl text-white cursor-pointer">
        <a
          href="https://docs.google.com/document/d/1TSIa-N8_wurcAQjaQh5LYbzevyHyZPQ6ljiyAC15P4Q/edit?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Resume
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </div>
    </div>
  );
}
