import {
  Logo,
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
          name="emanuelpetre.com"
        />
      </a>

      <NavMenu>
        {/* <NavMenuItem href="/posts">Posts (soon)</NavMenuItem> */}
        <NavMenuItem href="/">Posts (soon)</NavMenuItem>
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
