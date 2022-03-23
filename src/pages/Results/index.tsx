/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState, useMemo, useEffect } from "react";

import { Skeleton, Box, Typography } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";

import Profile from "../Home/components/Profile";

import Button from "../../components/Button";
import VectorIcon from "../../icons/Vector";
import Result from "./components/Result";
import { getUsers as getResults } from "../../services/index";

type UserType = {
  id: string;
  avater: string;
  isFollowing: boolean;
  name: string;
  username: string;
};

const containerSx = {
  display: "flex",
  justifyContent: "space-between",
  gap: "130px",
};

const Results = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const params: {
    pageSize: number;
    page: number;
    keyword: string;
  } = useMemo(() => {
    return {
      pageSize: Number(searchParams.get("pageSize")) || 0,
      page: Number(searchParams.get("page")) || 0,
      keyword: searchParams.get("keyword") || "",
    };
  }, [searchParams]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState(params.page);
  const [totalResults, setTotalResults] = useState(0);

  const handleClickMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  useEffect(() => {
    const { pageSize, keyword } = params;
    const fetchData = async () => {
      const { data } = await getResults(page, pageSize, keyword);
      setUsers([...users, ...data?.data]);
      setTotalResults(data?.total);
    };
    if (users.length >= totalResults && totalResults !== 0) {
      return;
    }
    if (pageSize === 0) {
      return;
    }
    fetchData();
    setLoading(false);
  }, [page]);

  return (
    <Box sx={containerSx}>
      <Box sx={{ mt: "92px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            ml: "-36.5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <VectorIcon />
          <Typography variant="h4">Results</Typography>
        </Box>
        <Box sx={{ mt: "-7px", display: "flex", flexWrap: "wrap" }}>
          {loading
            ? Array.from({ length: params?.pageSize || 20 }).map((_, index) => (
                <Skeleton
                  sx={{ bgcolor: "grey.900", mt: "31px", mr: "24px" }}
                  key={`result-skeleton-${index}`}
                  variant="rectangular"
                  width="150px"
                  height="199px"
                />
              ))
            : users?.map((user, index) => (
                <Result
                  key={`result-${user.id}-${index}`}
                  name={user.name}
                  username={user.username}
                  sx={{
                    mt: "31px",
                    mr: "24px",
                  }}
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
