import { GradientText } from './GradientText';
import { Newsletter } from './Newsletter';

export type IHighlightProps = {
  icon: string;
  content: string;
};

const Highlight = (props: IHighlightProps) => (
  <>
    <div
      className="mb-3 inline-flex w-full items-center rounded-lg bg-purple-100 py-5 px-6 text-base text-purple-700"
      role="alert"
    >
      {props.icon}
      {props.content}
    </div>

    <Newsletter
      title={
        <div>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </div>
      }
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          esse non molestias eos excepturi, inventore atque cupiditate."
    />
  </>
);

export { Highlight };
