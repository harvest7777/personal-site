import SectionsContainer from "./sections-container";
import BulletedParagraph from "./bulleted-paragraph";
import Image from "next/image";
import ImageWrapper from "./image-wrapper";
import HobbyCarousel, { type HobbySlide } from "./hobby-carousel";
import MessageForm from "./message-form";
import Link from "next/link";

const HOBBY_SLIDES: HobbySlide[] = [
  { src: "/miat.jpg", alt: "my 1992 miata", title: "my 1992 miata!" },
  {
    src: "/corne.jpg",
    alt: "corne keyboard",
    title: "my mouseless corne setup",
  },
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

      <SectionsContainer heading="ryan tran" id="ryan tran">
        <ul>
          <li>
            <Link href="https://open.spotify.com/track/2TmqHjg7uhizGndzXQdFuf?si=3f1d056966284a1e" className="underline">talk 2 me</Link>{" "}about ducks, ergonomic keyboards, old japanese cars, programming, and philosphy :D
          </li>
          <li>
            have a hard problem and want a new addition to your team?
            <br></br>
            <Link href="mailto:ryan.tran7312@gmail.com" className="underline">email me</Link>
          </li>
        </ul>
      </SectionsContainer>

      <SectionsContainer heading="work" id="work">
        <BulletedParagraph title={<>swe intern @ <Link href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" className="underline">spacex</Link></>}>
          <ul>
            <li>summer 2026 starlink team</li>
          </ul>
        </BulletedParagraph>
        <BulletedParagraph title={<>undergrad researcher @ <Link href="https://www.csulb.edu" target="_blank" rel="noopener noreferrer" className="underline">csulb</Link></>}>
          <ul>
            <li>
              author, simulation development, llm training and evaluation
            </li>
          </ul>
        </BulletedParagraph>
        <BulletedParagraph title="swe intern @ htm coaching">
          <ul>
            <li>
              dev, payments, cicd, project planning, talking with stakeholders
            </li>
          </ul>
        </BulletedParagraph>
        <BulletedParagraph title={<>swe intern @ <Link href="https://fetch.ai" target="_blank" rel="noopener noreferrer" className="underline">fetch ai</Link></>}>
          <ul>
            <li>
              ai agent development, observability, testability, cost cutting
            </li>
          </ul>
        </BulletedParagraph>

        <BulletedParagraph title={<>swe intern @ <Link href="https://bazalu.com" target="_blank" rel="noopener noreferrer" className="underline">bazalu</Link></>}>
          <ul>
            <li>
              full stack dev, worked side by side with founding team to implement anything we envisioned
            </li>
          </ul>
        </BulletedParagraph>
      </SectionsContainer>
      <SectionsContainer heading="school" id="career">
        <BulletedParagraph title="cs @ csulb">
          <ul>
            <li>expected may 2027</li>
            <li>gpa: 4</li>
          </ul>
        </BulletedParagraph>

        <BulletedParagraph title="nhs">
          <ul>
            <li>gpa: 4.45</li>
            <li>uwgpa: 4</li>
          </ul>
        </BulletedParagraph>

      </SectionsContainer>

      <SectionsContainer heading="wins" id="wins">
        <BulletedParagraph title="startnow">
          <ul>
            <li>
              1st @ la hacks 2025
            </li>
          </ul>
        </BulletedParagraph>

        <BulletedParagraph title="communal pet duck">
          <ul>
            <li>
              1st @ marinahacks 2024
            </li>
          </ul>
        </BulletedParagraph>

        <BulletedParagraph title="pictochat">
          <ul>
            <li>
              1st @ marinahacks 2023
            </li>
          </ul>
        </BulletedParagraph>

        <BulletedParagraph title="10 scholarships">
          <ul>
            <li>
              $20k
            </li>
          </ul>
        </BulletedParagraph>
      </SectionsContainer>

<SectionsContainer heading="non-tech" id="awesome">
        <HobbyCarousel slides={HOBBY_SLIDES} />
      </SectionsContainer>

      {/*<SectionsContainer heading="say something" id="say-something">*/}
      {/*  <MessageForm />*/}
      {/*</SectionsContainer>*/}
    </div>
  );
}
