import TableDetailUI from "./tableDetail.presenter";

export default function TableDetail(props) {
  return <TableDetailUI fetchData={props.fetchData} />;
}
