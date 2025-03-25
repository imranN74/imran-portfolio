export function NavigationBar() {
  return (
    <nav className="fixed top-5 left-0 w-full z-50">
      <div className="flex justify-center">
        <ul className="hidden md:flex justify-center gap-20 text-white border p-3 rounded-xl px-10 bg-opacity-70 backdrop-blur-lg">
          <li className="cursor-pointer hover:underline">
            <a href="#profile">PROFILE</a>
          </li>

          <li className="cursor-pointer hover:underline text-red-500">
            <a href="#project">PROJECTS</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="cursor-pointer hover:underline text-red-500">
            <a href="#exp">EXPERIENCE</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="#contact">CONTACT ME</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
