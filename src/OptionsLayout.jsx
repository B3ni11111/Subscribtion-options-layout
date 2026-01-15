import OptionCard from "./OptionCard";
import Stack from "@mui/material/Stack";

export default function OptionsLayout({ data }) {
  return (
    <>
      <Stack direction="row" spacing={2}>
        {data.map((i, idx) => {
          return (
            <Stack key={idx}>
              <OptionCard key={i.id} data={i} />
            </Stack>
          );
        })}
      </Stack>
    </>
  );
}
