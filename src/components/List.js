import Item from "./Item";

function List() {
  return (
    <>
      <h1>List of cars</h1>
      <Item modelo="Renault" ano_lançamento={1998}/>
      <Item modelo="Camaro" ano_lançamento={2013}/>
      <Item modelo="Toro" ano_lançamento={2014}/>
      <Item modelo="Doblo" ano_lançamento={2008}/>
      <Item/>
    </>
  );
};

export default List;