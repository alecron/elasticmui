import {
  Autocomplete,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Icon,
  TextField,
  Typography,
} from "@mui/material";
import Sidebar from "./Sidebar";
import CloudIcon from "@mui/icons-material/Cloud";
import Spain from "./spain.png";

function HomeContent() {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet urna ligula. Suspendisse sed velit molestie, tincidunt magna ut, rhoncus urna. Phasellus eget ornare nunc. Cras pharetra, mauris lobortis faucibus egestas, felis diam viverra justo, ac facilisis nunc turpis in nisi. Suspendisse at auctor turpis, vel feugiat arcu. Cras a massa et massa lacinia vestibulum eu ut massa. Ut vitae porta odio, quis convallis diam. Aenean tellus arcu, rhoncus ultricies egestas ac, finibus in sem. Quisque est mi, cursus sed luctus vitae, lobortis quis tellus. Morbi a finibus tortor. Curabitur enim urna, aliquam in ante a, laoreet posuere purus. Morbi aliquet blandit dictum. Phasellus varius nisi eu turpis malesuada mollis.";
  const autocomplete = [
    "First suggestion",
    "Second suggestion",
    "Third suggestion",
    "Fourth suggestion",
    "Fifth suggestion",
    "Sixth suggestion",
  ];
  return (
    <Box
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateColumns: "390px 6fr",
        gridTemplateAreas: `"sidebar results"`,
        justifyItems: "stretch",
        alignItems: "stretch",
        gridArea: "content",
      }}
    >
      <Sidebar />

      <Box
        id="main-container"
        sx={{
          gridArea: "results",
        }}
      >
        {
          //Title
        }
        <Typography id="title1" sx={{ texAlign: "center" }} variant="h1">
          SpaceQL
        </Typography>
        <Typography id="title2" sx={{ texAlign: "center" }} variant="subtitle1">
          GraphQL-based metadata browser
        </Typography>
        {
          // Searchbar
        }
        <Box
          id="searchbar-container"
          sx={{
            display: "grid",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Autocomplete
            sx={{
              width: 1,
            }}
            options={autocomplete}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  width: 1,
                }}
                label="Search"
                variant="outlined"
                placeholder="Document's title"
              />
            )}
          />
        </Box>
        {
          // END Searchbar
          // Results
        }

        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">Results</Typography>
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                marginRight: 3,
                marginBlock: 2,
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography variant="h4">
                    <Icon
                      sx={{
                        marginTop: 1,
                        marginRigth: 2,
                      }}
                    >
                      <CloudIcon />
                    </Icon>
                    Service
                  </Typography>
                  <Typography variant="h5">
                    This is an example title for a Service created for a static
                    React test
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "6fr 1fr",
                      columnGap: 3,
                    }}
                  >
                    <Typography variant="body2">{loremIpsum}</Typography>
                    <Box
                      sx={{
                        display: "grid",
                        rowGap: 1,
                      }}
                    >
                      <Chip
                        label="format1"
                        color="primary"
                        variant="outlined"
                      />
                      <Chip label="format2" color="primary" />
                      <Chip label="format3" />
                      <Chip label="format4" />
                      <Chip label="Longer text format" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      Related datasets: 1
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        marginInline: 4,
                        marginRight: 1,
                      }}
                    >
                      Language:
                    </Typography>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src={Spain}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{
                marginRight: 3,
                marginBlock: 2,
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography>
                    <Icon>
                      <CloudIcon />
                    </Icon>
                    Service
                  </Typography>
                  <Typography variant="h5">
                    This is an example title for a Service created for a static
                    React test
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "6fr 1fr",
                      columnGap: 3,
                    }}
                  >
                    <Typography variant="body2">{loremIpsum}</Typography>
                    <Box
                      sx={{
                        display: "grid",
                        rowGap: 1,
                      }}
                    >
                      <Chip label="format1" />
                      <Chip label="format2" />
                      <Chip label="format3" />
                      <Chip label="format4" />
                      <Chip label="Longer text format" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      Related datasets: 1
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        marginInline: 4,
                      }}
                    >
                      Language: Spanish
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{
                marginRight: 3,
                marginBlock: 2,
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography>
                    <Icon>
                      <CloudIcon />
                    </Icon>
                    Service
                  </Typography>
                  <Typography variant="h5">
                    This is an example title for a Service created for a static
                    React test
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "6fr 1fr",
                      columnGap: 3,
                    }}
                  >
                    <Typography variant="body2">{loremIpsum}</Typography>
                    <Box
                      sx={{
                        display: "grid",
                        rowGap: 1,
                      }}
                    >
                      <Chip label="format1" />
                      <Chip label="format2" />
                      <Chip label="format3" />
                      <Chip label="format4" />
                      <Chip label="Longer text format" />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      Related datasets: 1
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        marginInline: 4,
                      }}
                    >
                      Language: Spanish
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>

        {
          // END Results
        }
      </Box>
    </Box>
  );
}

export default HomeContent;
