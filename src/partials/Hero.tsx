import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

import { HeroSocial } from '@/partials/HeroSocial';
// https://github.com/gauravghongde/social-icons
// https://github.com/ixartz/astro-boilerplate-components

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Emanuel</GradientText>
        </>
      }
      description={
        <>
          Technically, I'm a software engineer, but I view myself as just a
          builder and a craftsman. I spent the last 15 years building Apps and
          enjoyed the journey. Along the way, I founded 2 companies and built
          them from the ground up. I'm also a dad of 4 awesome kids 😊 and a
          fitness and nutrition geek 💪. I'm passionate about incremental gains
          and have a strong growth mindset.
        </>
      }
      avatar={
        <img
          className="h-64 w-64 rounded-full"
          src="/assets/images/avatar_33.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/Emanuel58020058">
            <HeroSocial src="/assets/images/twitter.png" alt="Twitter icon" />
          </a>

          <a href="https://github.com/epetre">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/emanuelpetre">
            <HeroSocial src="/assets/images/linkedin.png" alt="LinkedIn icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
