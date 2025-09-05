import { cn } from "#/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { createFileRoute } from "@tanstack/react-router";
import { RemoveScroll } from "react-remove-scroll";

export const Route = createFileRoute("/menu")({
  component: Page,
});

function Page() {
  return (
    <>
      <Dialog.Root>
        <header className="sticky top-0 bg-white">
          <div className="flex h-16 items-center 2xl:container">
            <div className="w-1/5 pl-16 text-xl">Logo</div>
            <div className="flex flex-1 items-center gap-8 px-4">
              <Dialog.Trigger
                id="open-menu"
                className="group relative flex size-12 items-center justify-center rounded-full hover:bg-gray-100"
              >
                <span className="sr-only">Open Menu</span>
                <div className="absolute h-px w-8 -translate-y-1 bg-current transition-transform group-data-[state=open]:translate-y-0 group-data-[state=open]:rotate-45" />
                <div className="absolute h-px w-8 translate-y-1 bg-current transition-transform group-data-[state=open]:translate-y-0 group-data-[state=open]:-rotate-45" />
              </Dialog.Trigger>
              <label htmlFor="open-menu" aria-hidden>
                Menu
              </label>
            </div>
            <div className="pr-16">Seach</div>
          </div>
        </header>

        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content
            className={cn(
              RemoveScroll.classNames.fullWidth,
              "group data-[state=closed]:motion-opacity-out-100 motion-ease-spring-smooth fixed inset-0 z-50 grid grid-cols-5 grid-rows-[4rem_1fr] text-white",
            )}
          >
            <div className="motion-scale-y-in-0 group-data-[state=closed]:motion-scale-y-out-0 motion-ease-spring-smooth absolute -z-10 h-full w-1/5 origin-top bg-amber-600" />
            <div className="motion-scale-y-in-0 group-data-[state=closed]:motion-scale-y-out-0 motion-ease-spring-smooth absolute right-0 -z-10 h-full w-4/5 origin-bottom bg-amber-500" />

            <div className="col-span-5">
              <div className="flex h-full items-center 2xl:container">
                <div className="motion-opacity-in group-data-[state=closed]:motion-opacity-out motion-duration-500 group-data-[state=closed]:motion-delay-300 w-1/5 pl-16 text-xl">
                  Logo
                </div>
                <div className="flex flex-1 items-center gap-8 px-4">
                  <Dialog.Close
                    id="close-menu"
                    className="group motion-opacity-in group-data-[state=closed]:motion-opacity-out motion-duration-500 relative flex size-12 items-center justify-center rounded-full transition-colors hover:bg-amber-600"
                  >
                    <span className="sr-only">close</span>
                    <div className="absolute h-px w-8 -translate-y-1 bg-current transition-transform group-data-[state=open]:translate-y-0 group-data-[state=open]:rotate-45" />
                    <div className="absolute h-px w-8 translate-y-1 bg-current transition-transform group-data-[state=open]:translate-y-0 group-data-[state=open]:-rotate-45" />
                  </Dialog.Close>
                  <label
                    htmlFor="close-menu"
                    aria-hidden
                    className="motion-opacity-in group-data-[state=closed]:motion-opacity-out group-data-[state=open]:motion-delay-300"
                  >
                    Menu
                  </label>
                </div>
                <div className="pr-16">
                  <div className="motion-opacity-in group-data-[state=closed]:motion-opacity-out group-data-[state=open]:motion-delay-500 motion-duration-300 flex h-10 items-center rounded-full bg-white px-4 font-medium text-amber-950">
                    Hematogenix Portals
                  </div>
                </div>
              </div>
            </div>

            <div className="group-data-[state=closed]:motion-opacity-out motion-duration-100 col-span-1 flex items-end p-16">
              <p className="motion-opacity-in motion-delay-200 motion-duration-500 text-amber-300">
                Demo by NP
              </p>
            </div>
            <div className="group-data-[state=closed]:motion-opacity-out motion-duration-250 col-span-4 flex flex-1 items-end justify-between pr-16 pb-16 pl-24">
              <ul className="motion-opacity-in motion-delay-200 motion-duration-500 space-y-2">
                <li className="text-7xl tracking-tighter">Home</li>
                <li className="text-7xl tracking-tighter">Expertise</li>
                <li className="text-7xl tracking-tighter">Services</li>
                <li className="text-7xl tracking-tighter">Clinical Trials</li>
                <li className="text-7xl tracking-tighter">Technologies</li>
                <li className="text-7xl tracking-tighter">Company</li>
              </ul>

              <div className="space-y-8">
                <ul className="motion-opacity-in motion-delay-300 motion-duration-500">
                  <li className="text-4xl">Careers</li>
                  <li className="text-4xl">Resources</li>
                  <li className="text-4xl">Contacts</li>
                </ul>
                <ul className="motion-opacity-in motion-delay-400 motion-duration-500">
                  <li className="">Terms of use</li>
                  <li className="">Privacy Policy & Cookies</li>
                  <li className="">HIPAA Notice</li>
                </ul>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <main className="pb-16">
        <section className="flex 2xl:container">
          <div className="w-1/5 pt-48 pl-16">
            <ul className="space-y-2 border-l border-gray-200">
              <li className="-ml-px border-l-2 border-transparent px-4">
                Intro
              </li>
              <li className="-ml-px border-l-2 border-transparent px-4">
                Expertise
              </li>
              <li className="-ml-px border-l-2 border-transparent px-4">
                Technologies
              </li>
              <li className="-ml-px border-l-2 border-amber-500 px-4">
                Clinical Trials
              </li>
              <li className="-ml-px border-l-2 border-transparent px-4">
                Services
              </li>
            </ul>
          </div>

          <div className="w-4/5 space-y-16 pr-16">
            <h1 className="text-9xl tracking-tighter">Clinical Trials</h1>
            <hr />
            <div className="flex justify-between">
              <p className="w-5/12 text-3xl font-medium">
                Hematogenix&apos;s mission is to help pharma companies bring
                novel treatments to bedside.
              </p>
              <p className="w-5/12 text-xl">
                Our use of cutting-edge technologies, highly sensitive assays,
                and interpetation from expert pathologists provides a level of
                quality that is amber to accentuate the efficacy of a novel
                therapeutic.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="aspect-4/5 min-w-0 flex-1 bg-gray-200 p-12"></div>
              <div className="aspect-4/5 min-w-0 flex-1 bg-amber-200 p-12">
                <p className="min-w-0 text-5xl font-semibold tracking-tight text-green-900">
                  At a Glance
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
