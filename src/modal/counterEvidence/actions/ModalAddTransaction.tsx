import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { Add, Close } from "@mui/icons-material";
import Space from "src/components/space/Space";

const style = {
  position: "absolute' as 'absolute",
  top: "50%",
  left: "50%",
  transform: "translate(70%, 70%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 }
];

export default function ModalAddTransaction() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
        <>
            <Button variant="contained" onClick={handleOpen} startIcon={<Add />}>Thêm giao dịch</Button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" style={{ textAlign: "center" }}>
                        Thêm giao dịch
                    </Typography>
                    <Grid container spacing={3} >
                        <Grid item lg={12} xl={12}>
                            <Autocomplete
                                options={top100Films}
                                size="small"
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => <TextField {...params} label="Mã giao dịch" variant="outlined" />}
                            />
                        </Grid>
                        <Grid item lg={12} xl={12}>
                            <Autocomplete
                                options={top100Films}
                                size="small"
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => <TextField {...params} label="Trạng thái đối soát" variant="outlined" />}
                            />
                        </Grid>
                        <Grid item lg={12}>
                            <Space justifyContent="center">
                                <Button variant="contained" startIcon={<Close />} onClick={handleClose}>
                                    Đóng
                                </Button>
                                <Button variant="contained" startIcon={<Add />}>
                                    Thêm giao dịch
                                </Button>
                            </Space>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
  );
}
