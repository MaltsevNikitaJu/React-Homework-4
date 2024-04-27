import useUserList from "../CustomHooks/useUserList";

function UserListDiv() {
  const { isLoading, hasError, fetchedData } = useUserList();

  return (
    <div>
      {isLoading && <h2>Загрузка...</h2>}
      {hasError && <h2>Произошла ошибка при загрузке данных</h2>}
      {fetchedData?.map((element) => {
        return (
          <div key={element.id}>
            <h2>{element.name}</h2>
            <h3>{element.username}</h3>
            {element.email}
          </div>
        );
      })}
    </div>
  );
}

export default UserListDiv;
