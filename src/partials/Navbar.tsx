import {
  Logo,
  GradientText,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';
// Initials https://monogrammaker.com/
const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={<img className="w-12" src="/assets/images/logo.png" />}
          name="emanuelpetre.dev"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="https://calendly.com/meet_manu">
          <GradientText>
            Hire me!
          </GradientText>
        </NavMenuItem>
        <NavMenuItem href="/posts">Posts</NavMenuItem>
        <NavMenuItem href="https://github.com/epetre">GitHub</NavMenuItem>
        <NavMenuItem href="https://twitter.com/Emanuel58020058">
          Twitter
        </NavMenuItem>
        <NavMenuItem href="https://linkedin.com/in/emanuelpetre">
          LinkedIn
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
