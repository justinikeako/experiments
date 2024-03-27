import { ScrollyElement } from "./scrolly";

export default function Page() {
  return (
    <main>
      <section className="h-screen overflow-hidden">
        <ScrollyElement scrollyId="box2">
          <div className="absolute h-32 w-64 origin-top-left bg-green-800" />
        </ScrollyElement>
        <ScrollyElement scrollyId="box">
          <div className="absolute size-full origin-top-left bg-pink-200" />
        </ScrollyElement>
      </section>
      <section className="relative h-screen">
        <div
          className="grid h-full w-1/2 place-items-center bg-green-800"
          data-scrolly-id="box2"
        >
          <div className="size-32 bg-pink-200" data-scrolly-id="box"></div>
        </div>
      </section>
      <section className="relative grid h-screen place-items-center">
        <div
          className="absolute right-0 size-32 bg-green-800"
          data-scrolly-id="box2"
        />
        <div
          className="absolute h-16 w-full bg-pink-200"
          data-scrolly-id="box"
        />
      </section>
    </main>
  );
}
