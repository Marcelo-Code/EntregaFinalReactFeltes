import { Skeleton } from "@mui/material";

export const SkeletonList = () => {
  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {Array.map((element, index) => (
        <div
          key={index}
          style={{
            background: "rgba(255, 255, 255, 1)",
            boxShadow: "0 0 10px black",
            width: "300px",
            height: "441px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
            marginTop: "25px",
          }}
        >
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={250}
            height={200}
            style={{
              marginTop: "15px",
              marginBottom: "6px",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={200}
            height={70}
            style={{
              marginBottom: "6px",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={250}
            height={60}
            style={{
              marginBottom: "6px",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={150}
            height={30}
            style={{
              marginBottom: "6px",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
      ))}
    </div>
  );
};
