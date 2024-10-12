import { LineChart } from "@mui/x-charts/LineChart";

export const SecondGraph = () => {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      // width={500}
      height={300}
      xs={{ width: { xs: "400px", sm: "900px", md: "500px" } }}
    />
  );
};
