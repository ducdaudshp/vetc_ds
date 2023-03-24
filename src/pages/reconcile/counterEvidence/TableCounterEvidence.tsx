import AppTable from "src/components/table/AppTable";
import { useQuery } from "react-query";
import { type GridColDef } from "@mui/x-data-grid";
import { walletUrl } from "src/api/baseUrl";
import { useState } from "react";
import axios from "axios";
import { Delete } from "@mui/icons-material";
import { Button, Link } from "@mui/material";
import ModalEdit from "src/modal/counterEvidence/actions/ModalEdit";
 
const columns: GridColDef[] = [
  {
    field: "stt",
    headerName: "STT"
  },
  {
    field: "action",
    headerName: "Thao tác",
    maxWidth: 200,
    flex: 2,
    renderCell: () => <><Link variant="body2">DSGD</Link>/
                        <Button size="small"><Delete /></Button>/
                        <ModalEdit></ModalEdit></>
  },
  {
    field: "code", headerName: "Mã",
  },
  {
    field: "name", headerName: "Tên"
  },
  {
    field: "image", 
    headerName: "Hình ảnh",
    renderCell: () => <Link href="#" variant="body2">{"Chi tiết"}</Link>
  },
  {
    field: "status",
    headerName: "Trạng thái"
  },
  {
    field: "description",
    headerName: "Mô tả"
  },
  {
    field: "maker",
    headerName: "Người tạo"
  },
  {
    field: "createdDate",
    headerName: "Ngày tạo"
  },
  {
    field: "checker",
    headerName: "Người duyệt"
  },
  {
    field: "approveDate",
    headerName: "Ngày duyệt"
  }
];

export default function TableCounterEvidence() {
  const [pageOption, setPageOption] = useState({
    page: 1,
    limit: 10
  });
  const { data } = useQuery<any>(["fetchData", pageOption], async () =>
    await axios(`${walletUrl}/ap_params`, { params: pageOption }));

  return (
    <AppTable
      rows={data ? data?.data : []}
      columns={columns}
      pageCount={data?.totalCount}
      onPage={(page) => setPageOption(pre => ({ ...pre, page }))}
      onPageSize={(pageSize => setPageOption(pre => ({ ...pre, limit: pageSize })))}
    />
  );
}
