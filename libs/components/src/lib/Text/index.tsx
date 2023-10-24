interface Props {
  text?: string;
}

const Text = ({ text }: Props) => {
  return <p>share {text ?? 'text'}</p>;
};

export default Text;
