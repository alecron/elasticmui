import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header() {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        gridArea: "Header",
        zIndex: 1500,
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1.0,
          }}
          noWrap={true}
          component="div"
        >
          SpaceQL v1.0.0
        </Typography>
        <Tooltip title="View Sources">
          <IconButton
            size="large"
            aria-haspopup={false}
            aria-label="source code"
            onClick={() => {
              window.location.href = "https://github.com/IAAA-Lab/space-ql";
            }}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
