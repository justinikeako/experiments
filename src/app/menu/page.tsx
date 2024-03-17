"use client";

import { cn } from "#/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { RemoveScroll } from "react-remove-scroll";

export default function Page() {
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
              "group fixed inset-0 z-50 grid grid-cols-5 grid-rows-[4rem_1fr] text-white data-[state=closed]:[animation:doNothing_500ms]",
            )}
          >
            <div className="absolute -z-10 h-full w-1/5 origin-top bg-amber-600 [animation:scaleIn_500ms_ease-out] group-data-[state=closed]:[animation:scaleOut_500ms_ease-out]" />
            <div className="absolute right-0 -z-10 h-full w-4/5 origin-bottom bg-amber-500 [animation:scaleIn_500ms_ease-out] group-data-[state=closed]:[animation:scaleOut_500ms_ease-out]" />

            <div className="col-span-5">
              <div className="flex h-full items-center 2xl:container">
                <div className="w-1/5 pl-16 text-xl">Logo</div>
                <div className="flex flex-1 items-center gap-8 px-4">
                  <Dialog.Close
                    id="close-menu"
                    className="group relative flex size-12 items-center justify-center rounded-full transition-colors duration-500 animate-in fade-in fill-mode-forwards hover:bg-amber-600 group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out"
                  >
                    <span className="sr-only">close</span>
                    <div className="absolute h-px w-8 -translate-y-1 bg-current transition-transform group-data-[state=open]:translate-y-0 group-data-[state=open]:rotate-45" />
                    <div className="absolute h-px w-8 translate-y-1 bg-current transition-transform group-data-[state=open]:translate-y-0 group-data-[state=open]:-rotate-45" />
                  </Dialog.Close>
                  <label
                    htmlFor="close-menu"
                    aria-hidden
                    className="animate-in fade-in fill-mode-both group-data-[state=open]:delay-300 group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out"
                  >
                    Menu
                  </label>
                </div>
                <div className="pr-16">
                  <div className="flex h-10 items-center rounded-full bg-white px-4 font-medium text-amber-950 animate-in fade-in fill-mode-both group-data-[state=open]:delay-300 group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out">
                    Hematogenix Portals
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 flex items-end p-16 duration-100 fill-mode-both group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out">
              <p className="text-amber-300 delay-200 duration-500 animate-in fade-in fill-mode-both">
                Demo by NP
              </p>
            </div>
            <div className="col-span-4 flex flex-1 items-end justify-between pb-16 pl-24 pr-16 duration-100 fill-mode-both group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out">
              <ul className="space-y-2 delay-200 duration-500 animate-in fade-in fill-mode-both">
                <li className="text-7xl tracking-tighter">Home</li>
                <li className="text-7xl tracking-tighter">Expertise</li>
                <li className="text-7xl tracking-tighter">Services</li>
                <li className="text-7xl tracking-tighter">Clinical Trials</li>
                <li className="text-7xl tracking-tighter">Technologies</li>
                <li className="text-7xl tracking-tighter">Company</li>
              </ul>

              <div className="space-y-8">
                <ul className="delay-300 duration-500 animate-in fade-in fill-mode-both">
                  <li className="text-4xl">Careers</li>
                  <li className="text-4xl">Resources</li>
                  <li className="text-4xl">Contacts</li>
                </ul>
                <ul className="duration-500 animate-in fade-in fill-mode-both [animation-delay:400ms]">
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
          <div className="w-1/5 pl-16 pt-48">
            <ul className=" space-y-2 border-l border-gray-200">
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
              <div className="aspect-[4/5] min-w-0 flex-1 bg-gray-200 p-12"></div>
              <div className="aspect-[4/5] min-w-0 flex-1 bg-amber-200 p-12">
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
