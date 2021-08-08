interface SvgProps {
  content: string;
}

const Svg = ({ content }: SvgProps) => (
  <span
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: content }}
    role="img"
  />
);

export default Svg;
