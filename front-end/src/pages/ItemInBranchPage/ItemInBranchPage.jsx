import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardUpdate from "../../components/Cards/CardUpdate";
import config from "../../../config.json";


export default function ItemInBranchPage() {
  const { categoryId, branchId } = useParams();
  const navigate = useNavigate()
  const [itemsData, setItemsData] = useState(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const url = `${config.API_URL}/api/v1/branch/${branchId}/category/${categoryId}/items`;

    axios.get(url)
    .then((response) => setItemsData(response.data))
    .catch((error) => console.error("Error fetching data:", error));

  }, [branchId, categoryId]);
  return (
    <>
  
      {itemsData ? (
        <div className="container-lg">
          <div>
            <svg
              className="back-btn"
              onClick={handleBackClick}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="54"
              viewBox="0 0 55 54"
              fill="none"
            >
              <path
                d="M12.3125 25.3125H46.0625C46.5101 25.3125 46.9393 25.4903 47.2557 25.8068C47.5722 26.1232 47.75 26.5524 47.75 27C47.75 27.4476 47.5722 27.8768 47.2557 28.1932C46.9393 28.5097 46.5101 28.6875 46.0625 28.6875H12.3125C11.8649 28.6875 11.4357 28.5097 11.1193 28.1932C10.8028 27.8768 10.625 27.4476 10.625 27C10.625 26.5524 10.8028 26.1232 11.1193 25.8068C11.4357 25.4903 11.8649 25.3125 12.3125 25.3125Z"
                fill="#1E1E1E"
              />
              <path
                d="M13.0112 27.0002L27.0073 40.9929C27.3242 41.3098 27.5022 41.7396 27.5022 42.1877C27.5022 42.6358 27.3242 43.0656 27.0073 43.3824C26.6905 43.6993 26.2607 43.8773 25.8126 43.8773C25.3645 43.8773 24.9347 43.6993 24.6178 43.3824L9.43034 28.1949C9.27319 28.0382 9.1485 27.852 9.06343 27.6469C8.97836 27.4419 8.93457 27.2221 8.93457 27.0002C8.93457 26.7782 8.97836 26.5584 9.06343 26.3534C9.1485 26.1484 9.27319 25.9622 9.43034 25.8054L24.6178 10.6179C24.9347 10.3011 25.3645 10.123 25.8126 10.123C26.2607 10.123 26.6905 10.3011 27.0073 10.6179C27.3242 10.9348 27.5022 11.3646 27.5022 11.8127C27.5022 12.2608 27.3242 12.6906 27.0073 13.0074L13.0112 27.0002Z"
                fill="#1E1E1E"
              />
            </svg>
            <h1 className="text-center">{itemsData.category_name}</h1>
          </div>

          <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
            <section className="my-3 d-flex flex-wrap gap-5 justify-content-center justify-content-xl-start">
              {itemsData.items.map((item) => (
                <CardUpdate key={item.item_id} data={item} branchId={branchId} />
              ))}
            </section>
          </section>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
