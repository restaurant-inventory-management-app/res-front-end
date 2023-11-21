import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";
import CardCategoryDisplay from "../../components/Cards/CardCategoryDisplay";
import config from "../../../config.json";


function BranchPage() { //suppose to display in each branches
  const { branchId } = useParams()
  const [categoryData, setCategoryData] = useState(null);
  const [branchData, setBranchData] = useState(null)

  useEffect(() => {
    const url = `${config.API_URL}/api/v1/category`;
    const url2 = `${config.API_URL}/api/v1/branch/${branchId}`
    axios
      .get(url)
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));

      axios
      .get(url2)
      .then((response) => {
        setBranchData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));

  }, [branchId]);
  return (
    <>
    {categoryData && branchData ? (
        <div className="container-xl">
          <h1 className="text-center"> {branchData.branch_name}'s Stock </h1>
          <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
            <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
              {categoryData.map((category, index) => (
                <CardCategoryDisplay key={index} data={category} path={`/branch/${branchId}/category/${category.category_id}`} />
              ))}
            </section>
          </section>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  )
}

export default BranchPage
