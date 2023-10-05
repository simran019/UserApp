import Wrapper from "../Helpers/page";

const ErrorModal = (props: any) => {
  console.log(props);
  const errorHandler = () => {
    props.onConfirm("");
  };

  return (
    <Wrapper>
      <div
        className="w-full h-full fixed bg-black opacity-80 z-10 text-white"
        style={{ top: "0px", left: "0px" }}
      />
      <div className="w-96 h-48 fixed z-30 bg-white mt-32 text-center rounded-xl flex flex-col gap-4">
        <div className="bg-fuchsia-800 text-white p-4 rounded-t-xl ">
          An Error Occured !!
        </div>
        <div>{props.message}</div>
        <button
          className="text-white bg-fuchsia-800 p-2 rounded-md w-fit self-center"
          onClick={errorHandler}
        >
          Okay
        </button>
      </div>
    </Wrapper>
  );
};

export default ErrorModal;
