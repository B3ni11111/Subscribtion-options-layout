import Stack from "@mui/material/Stack";
import BetterOptionCard from "./BetterOptionCard";

export default function OptionsLayout({ data }) {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
        p: 4,
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      {data.map((item) => (
        <BetterOptionCard key={item.id} data={item} />
      ))}
    </Stack>
  );
}
