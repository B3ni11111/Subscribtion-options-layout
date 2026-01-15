import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { v4 as uuid } from "uuid";
import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function OptionCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, position: "relative", pb: expanded ? 3.5 : 0 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.optionName}
          </Typography>
          <Typography gutterBottom variant="h5" component="span">
            ${data.price}
          </Typography>
          <Typography gutterBottom variant="h8" component="span">
            / month
          </Typography>
          <Typography
            variant="ul"
            sx={{
              color: "text.secondary",
              pl: 2,
              ml: 0,
              listStylePosition: "inside",
            }}
          >
            {data.info.map((i) => {
              return <li key={uuid()}>{i}</li>;
            })}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton
        onClick={handleExpandClick}
        sx={{
          position: "absolute",
          bottom: 8,
          right: 8,
        }}
      >
        <ExpandMoreIcon />
      </IconButton>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ p: 0 }}>
          <CardMedia sx={{ height: 140 }} image={data.gif} title="gif" />
        </CardContent>
      </Collapse>
    </Card>
  );
}
