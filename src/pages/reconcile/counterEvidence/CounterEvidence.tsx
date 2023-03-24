import { Search } from "@mui/icons-material";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import Space from "src/components/space/Space";
import ListTransaction from "./ListTransaction";
import TableCounterEvidence from "./TableCounterEvidence";
import ModalAddCounterEvidence from "../../../modal/counterEvidence/ModalAddCounterEvidence";

export const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 }
];

export default function CounterEvidence() {
  return (
        <Grid container spacing={3} style={{ padding: "24px" }}>
            <Grid item lg={4} xl={3}>
                <Autocomplete
                    options={top100Films}
                    size="small"
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField {...params} label="Mã bằng chứng" variant="outlined" />
                    )}
                />
            </Grid>
            <Grid item lg={4} xl={3}>
                <Autocomplete
                    options={top100Films}
                    size="small"
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => <TextField {...params} label="Tên bằng chứng" variant="outlined" />}
                />
            </Grid>
            <Grid item lg={4} xl={3}>
                <Autocomplete
                    options={top100Films}
                    size="small"
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField {...params} label="Trạng thái" variant="outlined" />
                    )}
                />
            </Grid>
            <Grid item lg={4} xl={3}>
                <Autocomplete
                    options={top100Films}
                    size="small"
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField {...params} label="Ngày" variant="outlined" />
                    )}
                />
            </Grid>
            <Grid item lg={4} xl={3}>
                <Autocomplete
                    options={top100Films}
                    size="small"
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Mã mô tả"
                            variant="outlined"
                        />
                    )}
                />
            </Grid>
            <Grid item lg={4} xl={9} textAlign="end">
                <Space justifyContent="end">
                    <Button variant="contained" startIcon={<Search />}>
                        Tìm kiếm
                    </Button>
                </Space>
            </Grid>
            <Grid item lg={6}>
                <ModalAddCounterEvidence/>
            </Grid>
            <Grid item lg={12} style={{ height: 600, width: 1000, marginBottom: "20px" }}>
                <TableCounterEvidence />
            </Grid>
            <Grid item></Grid>
            <Grid item lg={12}>
                <ListTransaction />
            </Grid>
        </Grid>
  );
}
