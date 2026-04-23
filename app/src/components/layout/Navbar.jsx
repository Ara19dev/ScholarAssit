import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="bg-white border-b border-greyBlue px-10 py-4 flex justify-between items-center">

      <h1 className="text-xl font-semibold text-primary">
        Scholar Assist
      </h1>

      <div className="flex gap-6 items-center">

        <a className="text-textPrimary hover:text-accent cursor-pointer">
          Features
        </a>

        <a className="text-textPrimary hover:text-accent cursor-pointer">
          How it Works
        </a>

        <Button>Get Started</Button>

      </div>

    </nav>
  );
}

export default Navbar;