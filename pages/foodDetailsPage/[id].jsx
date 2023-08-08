import FoodDetailsPageContainer from "@/components/foodDetailsPage/FoodDetailsPageContainer";
import LandingLayout from "@/components/layout/LandingLayout";
import { QueryClient } from "react-query";
export async function getServerSideProps(context) {
  try {
    // console.log(context.id)
    const queryClient = new QueryClient();
    const data = await queryClient.fetchQuery(["single_data"], () =>
      axiousResuest({
        url: `https://www.themealdb.com/api/json/v1/1/search.php?i=${id}`,
        method: "get",
      })
    );
    console.log("data",data);
    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        postData: data,
      },
    };
  } catch (error) {
    console.log(error, 5555);
    return {
      props: {
        postData: null,
      },
    };
  }
}

const Details = ({ postData }) => {
  return (
    <div>
      <FoodDetailsPageContainer postData={postData} />
    </div>
  );
};

export default Details;

Details.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
