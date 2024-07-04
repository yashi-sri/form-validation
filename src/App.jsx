import Form from "./component/Form";

function App() {
  return (
    <>
      <div className="w-screen h-screen border border-red-500 flex flex-col justify-center items-center gap-5">
        <p className="font-bold text-4xl text-slate-800">Form</p>
        <Form />
      </div>
    </>
  );
}

export default App;
