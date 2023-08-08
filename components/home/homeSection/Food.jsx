import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";

import { fetchData } from "./dataFetch/FetchData";
import { CircularProgress } from "@mui/material";


// export async function getServerSideProps(){
//   const res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
//   const data=await res.json();
//   return{
//     props:{
//       todos:data
//     }
  
//   } 
// }

const Food = () => {
  const { data, isLoading } = useQuery(["no1"], () => fetchData());
  // const [data,setData]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  }
  const items = data.meals;

  return (
    <section className="container mx-auto">
      <div>
        <div>
          <h1 className="text-center font-bold text-4xl ">Order Food </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {items.map((item) => (
            <div key={item.idMeal} className="shadow-lg rounded-lg">
              <Image
                className="w-full mt-2 rounded-lg"
                src={item.strMealThumb}
                alt={item.strMeal}
                width={200}
                height={150}
              />
              <h2 className="font-medium text-3xl text-center mt-4">
                {item.strMeal}
              </h2>
              <h2 className="font-medium text-3xl text-center mt-4">
                price: {parseInt(Math.random() * 1000)}
              </h2>

              <div className="flex items-center justify-center mt-3">
                <Link href={`/foodDetailsPage/${item.idMeal}`}>
                  <button
                    className=" text-[#4C8488]
          text-[18px] lg:px-8 px-4 lg:py-4 py-2 rounded-[30px] border 
           border-[#4C8488]
          font-medium hover:bg-[#4C8488] hover:text-white mb-5"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;
