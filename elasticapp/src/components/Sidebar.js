import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function Sidebar() {
  const facets = [
    {
      title: "Facet1",
      subFacets: [
        { name: "subfacet1" },
        { name: "subfacet2" },
        { name: "subfacet3" },
        { name: "subfacet1" },
        { name: "subfacet2" },
        { name: "subfacet3" },
        { name: "subfacet1" },
        { name: "subfacet2" },
        { name: "subfacet3" },
        { name: "subfacet1" },
        { name: "subfacet2" },
        { name: "subfacet3" },
        { name: "subfacet1" },
        { name: "subfacet2" },
        { name: "subfacet3" },
      ],
    },
    {
      title: "Facet2",
      subFacets: [
        { name: "subfacet1" },
        { name: "subfacet2" },
        { name: "subfacet3" },
      ],
    },
    {
      title: "Facet3",
      subFacets: [
        { name: "subfacet1" },
        { name: "subfacet2" },
        { name: "subfacet3" },
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateAreas: `"lists"`,
      }}
    >
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          gridArea: "lists",
          width: 310,
        }}
      >
        <Toolbar />
        <Paper
          sx={{
            margin: 2,
            marginBottom: 0,
            marginTop: 3,
            padding: 3,
          }}
          elevation={6}
        >
          <FormControl
            sx={{
              width: 1,
            }}
          >
            <InputLabel>Results order</InputLabel>

            <Select labelId="order-label" id="order-select" label="order">
              <MenuItem>Date</MenuItem>
              <MenuItem>Relevance</MenuItem>
              <MenuItem>Name</MenuItem>
            </Select>
          </FormControl>
        </Paper>
        <List>
          {facets.map((data, idx) => (
            <Paper
              sx={{
                margin: 2,
                padding: 3,
              }}
              elevation={6}
            >
              <Typography variant="h6" textAlign={"center"}>
                {data.title}
              </Typography>
              <List
                sx={{
                  width: 290,
                }}
              >
                {data.subFacets.map((subfacet, idx) => (
                  <ListItem
                    sx={{
                      paddingLeft: "10px",
                      width: 1,
                    }}
                  >
                    <ListItemIcon>
                      <Checkbox checked={false} />
                    </ListItemIcon>
                    <ListItemText primary={subfacet.name} />
                    <Typography variant="body2">({idx})</Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
