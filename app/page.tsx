import SectionsContainer from "./sections-container";
import BulletedParagraph from "./bulleted-paragraph";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-24 w-fit items-center justify-center align-middle">
      <SectionsContainer heading="current" id="current">
        <BulletedParagraph title="contract swe @ a coaching platform">
          <ul>
            <li>
              $10k arr (although not a billion dollars, seeing recurring revenue
              is a first for me)
            </li>
            <li>rewriting a vibecoded codebase from scratch 😭 🙏</li>
            <li>
              payment systems, multi tenancy, modern stack w supabase nextjs
              stripe, migrating ~200k records over
            </li>
          </ul>
        </BulletedParagraph>
        <BulletedParagraph title="swe intern @ fetch ai">
          <ul>
            <li>
              mentoring at all the hackathons (most notable was cal hacks)
            </li>
            <li>
              making agent with modern ai stack langgraph, chromadb, supabase
            </li>
          </ul>
        </BulletedParagraph>
      </SectionsContainer>

      <SectionsContainer heading="accomplishments" id="accomplishments">
        <BulletedParagraph title="wasted 1k hours award @ leetcode">
          <ul>
            <li>
              sunk 1k hours of my life to solve over 680 problems and
              counting...
            </li>
            <li>
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

      <SectionsContainer heading="life outside of tech" id="awesome">
        <BulletedParagraph title="my 1992 miata!">
          <Image src="/miat.jpg" alt="my 1992 miata" width={300} height={200} />
        </BulletedParagraph>

        <BulletedParagraph title="my mouseless corne setup">
          <Image
            src="/corne.jpg"
            alt="corne keyboard"
            width={300}
            height={200}
          />
        </BulletedParagraph>
        <BulletedParagraph title="more ducks">
          <Image src="/duckies.jpg" alt="duckies" width={300} height={200} />
        </BulletedParagraph>
      </SectionsContainer>
    </div>
  );
}
