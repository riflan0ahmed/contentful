import client from "@/utils/graphQL/client/client";
import GET_PAGES from "@/utils/graphQL/query/pages";
import toBoolean from "@/utils/helper/toBoolean";

const getPages = async () => {
  const { data, errors } = await client.rawRequest(GET_PAGES, {
    preview: toBoolean(process.env.NEXT_PUBLIC_PREVIEW as string),
  });

  if (
    errors?.map(
      (error: any) => error.extensions.contentful.code === "UNRESOLVABLE_LINK"
    )
  ) {
    return data;
  } else {
    return data;
  }
};

export default getPages;
