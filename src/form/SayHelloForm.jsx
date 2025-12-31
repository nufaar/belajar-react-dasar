export default function SayHelloForm() {
  return (
    <div>
      <form action="">
        <input type="text" id="input_text" />
        <button
          onClick={(e) => {
            e.preventDefault();
            const name = document.getElementById("input_text").value;
            document.getElementById("text_hello").innerText = `Hello ${name}`;
          }}
        >
          Say Hello
        </button>
      </form>
      <h1 id="text_hello"></h1>
    </div>
  );
}
