import getPage from "@/utils/service/page";

export async function getStaticProps() {
  const info = (await getPage("2GXXdvXWj6Xu1pP1fEkHVY")) as any;

  if (!info || info.page == null) {
    return {
      notFound: true,
    };
  }
  return { props: { info }, revalidate: 1 };
}
export default function Home({ info }: any) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div className="flex flex-col gap-5 justify-center container">
        <h1 className="text-4xl font-bold">
          Internal Name :- {info?.page?.internalName}
        </h1>
        <h1 className="text-4xl font-bold">Url :- {info?.page?.url}</h1>
        <h1 className="text-4xl font-bold">Id :- {info?.page?.sys?.id}</h1>
      </div>
    </main>
  );
}
