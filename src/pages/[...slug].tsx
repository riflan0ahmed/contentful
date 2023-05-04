import getPage from "@/utils/service/page";
import getPages from "@/utils/service/pages";

export async function getStaticPaths() {
  const data: any = await getPages();

  const paths: any = [];

  data.pageCollection.items.map((item: any) =>
    item.url !== "/"
      ? paths.push({
          params: { slug: [item.url] },
        })
      : null
  );

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const url = context.params.slug;

  const pages: any = await getPages();
  const filteredPage = pages.pageCollection.items.filter(
    (item: any) => item.url === url[0]
  );

  if (filteredPage.length < 1 || !filteredPage[0].sys.id) {
    return {
      notFound: true,
    };
  }

  const query = filteredPage[0].sys.id as string;
  const info = (await getPage(query)) as any;

  if (!info || info.page == null) {
    return {
      notFound: true,
    };
  }

  return { props: { query, info }, revalidate: 1 };
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
