import { FC } from "react";

interface props {
  className?: string;
}
const BubbleTail: FC<props> = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <g>
        <path d="M22 17H2L12 6l10 11z" stroke="#4e535c"></path>
      </g>
    </svg>
  );
};
export default BubbleTail;
