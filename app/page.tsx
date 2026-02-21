import SectionsContainer from "./sections-container";
import BulletedParagraph from "./bulleted-paragraph";
import Image from "next/image";
import ImageWrapper from "./image-wrapper";
import HobbyCarousel, { type HobbySlide } from "./hobby-carousel";
import MessageForm from "./message-form";

const HOBBY_SLIDES: HobbySlide[] = [
  { src: "/miat.jpg", alt: "my 1992 miata", title: "my 1992 miata!" },
  { src: "/corne.jpg", alt: "corne keyboard", title: "my mouseless corne setup" },
  { src: "/duckies.jpg", alt: "duckies", title: "more ducks" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 w-full items-center justify-center align-middle py-32">
      <ImageWrapper
        src="/eepy_colored.png"
        alt="eepy ducky"
        className="my-16"
        width={320}
      />

      <SectionsContainer heading="hiii" id="hiii">
        <ul>
          <li>
            i am ryan. i like learning about anything interesting to me which
            currently includes competitive programming, system design, and
            ergonomic keyboards.
          </li>
        </ul>
      </SectionsContainer>
      <SectionsContainer heading="career" id="career">
        <BulletedParagraph title="student @ csulb">
          <ul>
            <li>cs, expected may 2027, gpa: 4.0</li>
          </ul>
        </BulletedParagraph>

        <BulletedParagraph title="swe intern @ spacex">
          <ul>
            <li>incoming summer 2026 to the starlink team!!!!!</li>
          </ul>
        </BulletedParagraph>
        <BulletedParagraph title="swe intern @ htm coaching">
          <ul>
            <li>
              this was a huge e2e project i took ownership of. it was my first
              time being responsible for handling recurring revenue ($10k arr!)
              and payouts of that revenue to our partners. i learned a lot about
              system design and scalable codebase patterns like mvvm. this was a
              complete rewrite followed by a 200k+ record data migraiton from
              the legacy app. was definitely shaking in my boots when i realized
              how much work we had to get done.
            </li>
          </ul>
        </BulletedParagraph>
        <BulletedParagraph title="swe intern @ fetch ai">
          <ul>
            <li>
              did lots of ai agent work. react style agents & workflows were a
              lot of fun to learn about! flew to the uk, canada, and the bay a
              few times to lead hackathons and partnership events. ill always
              look back fondly at my time at fetch and am grateful for my
              wonderful co interns who hold me accountable in my career & life.
            </li>
          </ul>
        </BulletedParagraph>

        <BulletedParagraph title="swe intern @ bazalu">
          <ul>
            <li>
              my first swe internship, i mainly did full stack development and
              learned what an orm was and why they were useful.
            </li>
          </ul>
        </BulletedParagraph>
      </SectionsContainer>

      <SectionsContainer heading="wins" id="wins">
        <BulletedParagraph title="wasted 1k hours award @ leetcode">
          <ul>
            <li>
              sunk 1k hours of my life to solve over 680 problems and
              counting...
            </li>
            <li>
              follow 4 follow?{" "}
              <a
                href="https://leetcode.com/u/supahsilly12345/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://leetcode.com/u/supahsilly12345/
              </a>
            </li>
          </ul>
        </BulletedParagraph>
        <BulletedParagraph title="scholarships">
          <ul>
            <li>
              like $20k+ across 10 or so scholarships, i learned i enjoy writing
              personal essays
            </li>
          </ul>
        </BulletedParagraph>
        <BulletedParagraph title="1st place @ la hacks">
          <ul>
            <li>
              won $2.5k for ai track, 2k competitors, debugged a lot of cursor
              code
            </li>
          </ul>
        </BulletedParagraph>

        <BulletedParagraph title="1st place @ csulb hackathon">
          <ul>
            <li>
              made a multiplayer ducky game with fun stack aws, docker,
              socket.io
            </li>
          </ul>
        </BulletedParagraph>

        <BulletedParagraph title="1st place @ very small hackathon">
          <ul>
            <li>
              made a chatting app with simple full stack react, flask, socket.io
            </li>
          </ul>
        </BulletedParagraph>
      </SectionsContainer>

      <SectionsContainer heading="ssm" id="ssm">
        <BulletedParagraph title="">
          <ul>
            <li>@bagillionaire on discord</li>
            <li>
              <a
                href="https://www.linkedin.com/in/wisp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/wisp/
              </a>
            </li>
            <li>
              <a
                href="https://github.com/harvest7777"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/harvest7777
              </a>
            </li>
          </ul>
        </BulletedParagraph>
      </SectionsContainer>

      <SectionsContainer heading="life outside of tech" id="awesome">
        <HobbyCarousel slides={HOBBY_SLIDES} />
      </SectionsContainer>

      <SectionsContainer heading="say something" id="say-something">
        <MessageForm />
      </SectionsContainer>
    </div>
  );
}
