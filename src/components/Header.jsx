export default function Header() {
  return (
    <header className="text-black p-3 flex items-center gap-3 justify-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),_0px_1px_2px_0px_rgba(0,0,0,0.06)]">
      <div className="w-[40px]">
        <img
          src="../assets/chef-claude-img-header.png"
          alt="Chef Claude image"
          className="block w-full"
        />
      </div>
      <h1 className="text-xl font-medium">Chef Claude</h1>
    </header>
  );
}
