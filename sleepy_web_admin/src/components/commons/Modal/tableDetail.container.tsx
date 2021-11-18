import TableDetailUI from "./tableDetail.presenter";

export default function TableDetail(props) {
  // function onLoadMore(){

  // }

  return <TableDetailUI fetchData={props.fetchData} />;
}
