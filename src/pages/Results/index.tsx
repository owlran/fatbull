/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";

import Profile from "../Home/components/Profile";

import Button from "../../components/Button";
import VectorIcon from "../../icons/Vector";
import Result from "./components/Result";
import { getUsers as getResults } from "../../services/index";

const containerSx = {
  display: "flex",
  justifyContent: "space-between",
  gap: "130px",
};

const Results = () => {
  const navigate = useNavigate();
  console.log("render Results");
  const [searchParams] = useSearchParams();

  const params: {
    pageSize: number;
    page: number;
    keyword: string;
  } = useMemo(() => {
    return {
      pageSize: Number(searchParams.get("pageSize")) || 10,
      page: Number(searchParams.get("page")) || 1,
      keyword: searchParams.get("keyword") || "",
    };
  }, [searchParams]);
  const [users, setUsers] = useState<
    {
      id: string;
      avater: string;
      isFollowing: boolean;
      name: string;
      username: string;
    }[]
  >([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { pageSize, page: paramPage, keyword } = params;
      const { data } = await getResults(paramPage, pageSize, keyword);
      console.log({ data });
      setUsers([...data?.data]);
      setPage(paramPage);
    };
    fetchData();
  }, []);

  const handleClickMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { pageSize, keyword } = params;
      const { data } = await getResults(page, pageSize, keyword);
      console.log({ data });
      setUsers([...users, ...data?.data]);
    };
    fetchData();
  }, [page]);

  return (
    <Box sx={containerSx}>
      <Box sx={{ mt: "92px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            ml: "-37.5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <VectorIcon />
          <Typography variant="h4">{`Results`}</Typography>
        </Box>
        <Box sx={{ mt: "24px", display: "flex", gap: "34px" }}>
          {users?.map((user, index) => (
            <Result
              key={`result-${user.id}-${index}`}
              name={user.name}
              username={user.username}
            />
          ))}
        </Box>
        <Box sx={{ mt: "39px" }}>
          <Button onClick={handleClickMore}>
            <Typography variant="button">More</Typography>
          </Button>
        </Box>
      </Box>
      <Box>
        <Profile />
      </Box>
    </Box>
  );
};

export default Results;
