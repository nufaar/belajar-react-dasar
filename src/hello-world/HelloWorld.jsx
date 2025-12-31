import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Hello World",
  };
  return (
    <>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </>
  );
}

function HeaderHelloWorld({ text = "ups, lupa kasih teks" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const text = "Selmat Belajar ReactJS";
  return <p className="content">{text.toLowerCase()}</p>;
}
