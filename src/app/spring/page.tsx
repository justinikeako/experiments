export default function Page() {
  return (
    <main className="flex h-full items-center justify-center">
      <label
        className="group h-8 w-12 rounded-full bg-gray-300 ring-1 ring-black/10 transition-colors has-[:checked]:bg-green-500"
        htmlFor="switch"
      >
        <input type="checkbox" id="switch" className="peer hidden" />

        <div className="size-8 p-0.5 transition-transform ease-spring spring-standard group-has-[:checked]:translate-x-4">
          <div className="size-full rounded-full bg-white shadow-sm ring-1 ring-black/10"></div>
        </div>
      </label>
    </main>
  );
}
