import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Имя",
            flex: 1,
            cellClassName: "name-column--cell",
            headerAlign: "center",
        },
        {
            field: "username",
            headerName: "Никнейм",
            flex: 1,
            headerAlign: "center",
        },
        {
            field: "birthday",
            headerName: "День рождения",
            type: "number",
            headerAlign: "center",
            align: "left",
            flex: 1,
        },
        {
            field: "phone",
            headerName: "Номер телефона",
            flex: 1,
            headerAlign: "center",
        },
        {
            field: "visits",
            headerName: "Посещения",
            flex: 1,
            headerAlign: "center",
        },
        {
            field: "last_visit",
            headerName: "Последнее посещение",
            type: "number",
            flex: 1,
            headerAlign: "center",
        },
        {
            field: "referal",
            headerName: "Реферал",
            type: "number",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "sale",
            headerName: "Скидка",
            type: "number",
            headerAlign: "center",
            flex: 1,
        },
        {
            field: "accessLevel",
            headerName: "Роль",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="65%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : access === "manager"
                                    ? colors.greenAccent[700]
                                    : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header title="База данных" subtitle="Управление базой данных" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    );
};

export default Team;