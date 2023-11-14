import Navigation from "../components/Navigation";
import NavFooter from "../components/NavFooter";

export default function Home() {
  const test = ["test", 2, 3];

  return (
    <>
      <Navigation reverseOrder />
      <main className="bg-slate-50 p-8 flex flex-col gap-4 my-16">
        <h1 className="text-4xl font-bold text-center">Home Page</h1>
        <div className="lg:w-1/2 mx-auto">
          <p className="mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>

          {test.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </main>
      <NavFooter />
    </>
  );
}
