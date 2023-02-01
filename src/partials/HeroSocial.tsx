type IHeroSocialProps = {
  src: string;
  alt: string;
};

const HeroSocial = (props: IHeroSocialProps) => (
  <img
    className="mr-2 h-8 w-8 hover:translate-y-1"
    src={props.src}
    alt={props.alt}
    loading="lazy"
  ></img>
);

export { HeroSocial };
