import { Loading } from "react-daisyui";
import "./App.css";
import ListOfUsers from "./componets/ListOfUsers";
import { FetchUser } from "./services/Api";
import { useQuery } from "react-query";
function App() {  
  const Users = useQuery({
    queryKey: ["Users"],
    queryFn: FetchUser,
    refetchOnWindowFocus: false,
  });  
  console.log('render');  
  return (
    <>
      <div className="container grid place-items-center h-screen">
        {!Users.isLoading && !Users.isError && Users.data.length > 0 && (
          <ListOfUsers data={Users.data} />
        )}
        {Users.isLoading && <> <Loading variant="dots"/>  </>}
        {Users.isError && <div>{Users.error}</div>}
      </div>
    </>
  );
}

export default App;
