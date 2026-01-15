import * as React from "react";
import { Box, Typography, Collapse, Fade } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import "./App.css";
import AppleIcon from "@mui/icons-material/Apple";

export default function BetterOptionCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box className="option-card">
      <Box className="card-icon" onClick={handleExpandClick}>
        <Box className={expanded ? "icon-minus" : "icon-plus"}></Box>
      </Box>

      <Typography variant="h6" className="card-title">
        {data.optionName}
      </Typography>

      <Typography
        variant="h3"
        className="main-price"
        sx={{ color: data.priceColor }}
      >
        ${data.price}
        <span className="price-period">/mo.</span>
      </Typography>

      <Typography variant="body2" className="save-message">
        {data.saveMessage}
      </Typography>

      {data.hasSharing && (
        <Box className="sharing-info">
          <PeopleIcon sx={{ fontSize: 16, color: "#666", mr: 0.5 }} />
          <Typography variant="body2" className="sharing-text">
            Share with up to five people
          </Typography>
        </Box>
      )}

      <Collapse in={expanded} timeout={300}>
        <Box className="divider" />
      </Collapse>

      <Collapse in={expanded} timeout={400}>
        <Box className="services-list">
          {data.services.map((service, idx) => (
            <Box
              key={idx}
              className="service-item"
              sx={{
                animationDelay: `${idx * 50}ms`,
              }}
            >
              <Box className="service-left">
                <Box className="service-icon">
                  <Box>
                    <AppleIcon />
                  </Box>
                </Box>
                <Typography variant="body2" className="service-name">
                  {service.name}
                </Typography>
                {service.badge && (
                  <Box className="storage-badge">{service.badge}</Box>
                )}
              </Box>
              <Typography variant="body2" className="service-price">
                ${service.price}/mo.
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>

      <Collapse in={expanded} timeout={350}>
        <Box className="price-summary">
          <Typography variant="body2" className="original-price">
            ${data.originalPrice}/mo.
          </Typography>
          <Typography variant="body2" className="current-price">
            ${data.price}/mo.
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}
