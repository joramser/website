import Image from 'next/image';

import { BasicLink } from '@web/components/ui/BasicLink';
import { ButtonLink } from '@web/components/ui/ButtonLink';
import { Tooltip } from '@web/components/ui/Tooltip';

import { data } from '@web/data';

export default function HomePage() {
  return (
    <main className="mb-4 w-full md:pt-16 lg:pt-24">
      <section className="flex animate-slow-fade-in flex-col-reverse text-xl sm:flex-col md:flex-row md:text-2xl">
        <div className="md:w-3/5 md:pr-4 lg:pr-12">
          <div>
            <h1 className="text-title relative z-10 -mt-10 pt-4 text-center text-4xl font-bold text-white backdrop-blur-sm sm:mt-0 sm:pt-0 md:text-left md:backdrop-blur-none lg:text-5xl">
              <span>{data.fullName}</span>
            </h1>
            <p className="mt-2 text-center tracking-wide md:text-left">
              <b className="font-semibold text-indigo-400">Senior Software Engineer</b> transforming ideas into reality.
            </p>
          </div>
          <div className="mt-8 tracking-wide lg:mt-12">
            <p className="mt-4">
              I work at{' '}
              <BasicLink color="violet" href="https://readyplayer.me" className="font-semibold" external>
                ReadyPlayerMe
              </BasicLink>{' '}
              helping to build bridges between virtual worlds.
            </p>
            <p className="mt-4">
              Interested in topics going from <b className="font-semibold text-sky-400">Software architecture</b> and{' '}
              <b className="font-semibold text-sky-400">Modern web technologies</b> to{' '}
              <b className="font-semibold text-rose-400">guitar playing</b> and{' '}
              <b className="font-semibold text-amber-400">home-cooking</b>.
            </p>
            <div className="mt-4">
              <span className="inline-block">
                From{' '}
                <a href="https://www.youtube.com/watch?v=V12xrLlUGjI" title="Cartagena, Colombia">
                  🇨🇴
                </a>{' '}
                <span className="inline md:hidden">- Cartagena, Colombia</span>
              </span>
              <span className="hidden md:inline"> - </span>
              <div className="group inline-block">
                Based in
                <span className="ml-2 inline-block cursor-pointer" title="Tallinn, Estonia">
                  🇪🇪
                </span>
                <span className="md:hidden"> - Talinn, Estonia</span>
                <span className="ml-2 hidden md:inline-block -translate-x-4 opacity-0 transition duration-75 group-hover:translate-x-0 md:group-hover:opacity-100">
                  Yeah, <span className="text-gray-100">Estonia</span> ❤️
                </span>
              </div>
            </div>
          </div>
          {/* Tools */}
          <div className="mt-8 md:mt-12">
            <h3 className="font-semibold text-white">Some of the tools I like to work with:</h3>
            <div className="mt-4">
              <ul className="flex flex-wrap justify-center md:justify-start">
                {data.tools.map((tool) => (
                  <li key={tool.title} className="ml-4 opacity-70 transition first:ml-0 hover:opacity-100">
                    <Tooltip content={tool.title} className="text-lg">
                      <Image
                        className="block"
                        height={48}
                        width={48}
                        src={tool.icon}
                        alt={tool.title}
                        title={tool.title}
                      />
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Links */}
          <div className="mt-8 flex justify-center md:mt-14 md:justify-start">
            {data.links.map((link) => (
              <BasicLink key={link.title} href={link.src} className="ml-4 text-lg first:ml-0 md:text-xl" external>
                {link.title}
              </BasicLink>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col-reverse sm:flex-col">
          <div
            aria-describedby="Headshot"
            className={`h-60 w-full bg-[url('/images/portrait.jpg')] bg-cover bg-center sm:h-80 md:rounded-xl xl:h-[480px] 2xl:h-[600px]`}
          />
          <div className="items-center my-4 flex justify-end md:my-8 md:flex-wrap md:justify-evenly">
            <ButtonLink href="/about" className="mr-4 md:mr-0">
              About
            </ButtonLink>
            <Tooltip content="Coming soon! ⌛" className="text-lg">
              <ButtonLink href="#" disabled>
                Blog
              </ButtonLink>
            </Tooltip>
          </div>
        </div>
      </section>
    </main>
  );
}
