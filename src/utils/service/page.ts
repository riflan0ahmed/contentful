import client from "@/utils/graphQL/client/client";
import GET_PAGE from "@/utils/graphQL/query/page";
import toBoolean from "@/utils/helper/toBoolean";

const getPage = async (id: string) => {
  const { data, errors } = await client.rawRequest(GET_PAGE, {
    id,
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

export default getPage;
