import AppTable from "src/components/table/AppTable";
import { useQuery } from "react-query";
import { type GridColDef } from "@mui/x-data-grid";
import { walletUrl } from "src/api/baseUrl";
import { useState } from "react";
import axios from "axios";
import { Create, Delete, ImportExportOutlined, TableViewOutlined } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import Space from "src/components/space/Space";
import ModalAddTransaction from "../../../modal/counterEvidence/actions/ModalAddTransaction";
 
const columns: GridColDef[] = [
  {
    field: "stt",
    headerName: "STT"
  },
  {
    field: "code", headerName: "Mã",
  },
  {
    field: "transactionDate", headerName: "Ngày GD"
  },
  {
    field: "amount",
    headerName: "Số tiền"
  },
  {
    field: "transactionType",
    headerName: "Loại GD"
  },
  {
    field: "status",
    headerName: "Trạng thái GD"
  },
  {
    field: "statusReconcile",
    headerName: "Trạng thái đối soát"
  },
  {
    field: "maker",
    headerName: "Người tạo"
  },
  {
    field: "makerDate",
    headerName: "Ngày tạo"
  },
  {
    field: "checker",
    headerName: "Người duyệt"
  },
  {
    field: "checkerDate",
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
    <Grid container spacing={3}>
        <Grid item lg={6}>
        <Space>
          <Button variant="contained" startIcon={<TableViewOutlined />}>
            Template
          </Button>
          <Button variant="contained" startIcon={<ImportExportOutlined />}>
            Import File
          </Button>
          <ModalAddTransaction></ModalAddTransaction>
          <Button variant="contained" startIcon={<Create />}>
            Tạo bản ghi ĐS
          </Button>
          <Button variant="contained" startIcon={<Delete />}>
            Xóa
          </Button>
        </Space>
      </Grid>
    <Grid item lg={12} sx={{ width: 1000 }}>
        <AppTable
            rows={data ? data?.data : []}
            columns={columns}
            pageCount={data?.totalCount}
            onPage={(page) => setPageOption(pre => ({ ...pre, page }))}
            onPageSize={(pageSize => setPageOption(pre => ({ ...pre, limit: pageSize })))}
        />
    </Grid>
    </Grid>
  );
}
