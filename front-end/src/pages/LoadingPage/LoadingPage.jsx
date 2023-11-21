import { Hourglass } from "react-loader-spinner";

export default function LoadingPage() {
  return (
    <section className="d-flex justify-content-center align-items-center w-100 h-100">
      <Hourglass
        visible={true}
        height="40"
        width="40"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#1E1E1E", "#6e6d6d"]}
      />
    </section>
  );
}
