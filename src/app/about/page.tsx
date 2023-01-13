import { BasicLink } from '@web/components/ui/BasicLink';
import { EmphasisText } from '@web/components/ui/EmphasisText';
import { Slideshow } from '@web/components/Slideshow';

export default function AboutPage() {
  return (
    <main className="lg:mt-8">
      <section className="flex flex-col lg:flex-row md:text-md animate-slow-fade-in">
        <div className="h-72 w-full md:h-[360px] md:w-[320px] md:mx-auto lg:h-[480px] lg:w-[540px]">
          <Slideshow
            images={[
              {
                src: '/images/christmas.jpg',
                alt: 'headshot',
                position: 'top',
                blurDataURL:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGP4/239y+XJZ7tiGP4f9TtUYTs71JxhmrXRxCgzXgYGhg1xVm0e6qE6kgCP1RADXdx7+wAAAABJRU5ErkJggg==',
              },
              {
                src: '/images/boston.jpg',
                alt: 'snow',
                position: 'bottom',
                blurDataURL:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AO73/9jf/N7k/wA7OUXU1eeXlaMACgALLy43SkdSANjf+YWKo/b8/9iMFlCqHOw+AAAAAElFTkSuQmCC',
              },
              {
                src: '/images/food.jpg',
                alt: 'food',
                position: 'top',
                blurDataURL:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AG1dOv/vu/XXlQAmAABfRiivk2UAimg5yqNuyZhRAG5LAJtwKP/rl2Z5Ec7kCP+VAAAAAElFTkSuQmCC',
              },
              {
                src: '/images/portrait-2.jpg',
                alt: 'headshot',
                blurDataURL:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AHnX/8fp/9r//wDt9fPyza3a19gA5b2fZUg9qZ+aAIOdvQAEF11ygzLiF/jNWTA0AAAAAElFTkSuQmCC',
              },
              {
                src: '/images/guitars.jpg',
                alt: 'guitars',
                blurDataURL:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AMqMbd3Cs8CyowD/yqPdr5T/898Aols2ZkAu//biAGghEiQAAMyZed46FQMKvH/DAAAAAElFTkSuQmCC',
              },
            ]}
          />
        </div>
        <div className="mt-8 md:mt-12 md:pl-16 lg:mt-0">
          <h1 className="pt-4 text-center text-3xl md:text-4xl font-bold text-white sm:pt-0 md:text-left">About</h1>
          <div className="mt-4 text-lg tracking-wide">
            <p className="">
              Hi! Glad you are here! I am{' '}
              <EmphasisText color="indigo" className="underline decoration-wavy">
                Jorge
              </EmphasisText>{' '}
              <span className="text-sm">[ˈxoɾxe]</span>. I&apos;m a Software Engineer with 10 years of experience
              working on the field.
            </p>
            <p className="mt-4">
              This is my little{' '}
              <BasicLink
                external
                href="https://maggieappleton.com/garden-history"
                color="emerald"
                className="font-semibold"
              >
                digital garden
              </BasicLink>
              . I am still working on it but I wanted to put something out there already even if it&apos;s not
              &quot;perfect&quot; 🚧.
            </p>
            <p className="mt-4">
              My goal is to share my musings about my work and experiences as a developer, but also about any other
              topics might be interesting.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">More things about me:</h2>
            <ul className="mt-4 ml-8 list-disc">
              <li className="mt-2">
                I was born and raised in <EmphasisText color="yellow">Cartagena de Indias, Colombia</EmphasisText>. But
                decided one can just get enough of the sun and decided to move to{' '}
                <EmphasisText color="cyan">Estonia</EmphasisText> (kidding, I love it here).
              </li>
              <li className="mt-2">
                I got into <EmphasisText color="sky">programming</EmphasisText> thanks to my dad. He had QBASIC and
                Visual Basic books laying around in the house that I randomly picked and got hooked since then.
              </li>
              <li className="mt-2">
                My main hobby is the <EmphasisText color="rose">guitar</EmphasisText>. I am a lefty and my main thing is
                playing heavy metal (I even was in a metal band in my uni years).
              </li>
              <li className="mt-2">
                I love <EmphasisText color="amber">cooking</EmphasisText>. From simple home-cooking, to food science, to
                baking, to making more elaborate dishes. You name it!
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
