type Props = {
  params: {
    id: string;
  };
};

function Contact({ params: { id } }: Props) {
  return <div>Contact with id:{id}</div>;
}

export default Contact;
