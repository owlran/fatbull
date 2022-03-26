/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState, useMemo, useEffect } from "react";

import { Theme, Skeleton, Box, Typography } from "@mui/material";
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
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        // gap: "130px",
        ml: "217px",
        [theme.breakpoints.down("md")]: {
          display: "block",
          pb: "80px",
          ml: 0,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          mt: "92px",
          [theme.breakpoints.down("md")]: {
            mt: "17px",
            padding: "0 20px",
          },
        })}
      >
        <Box
          onClick={() => navigate("/")}
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.down("md")]: {
              display: "flex",
              gap: "20px",
              alignItems: "center",
              pl: "6px",
              cursor: "pointer",
            },
          })}
        >
          <VectorIcon />
          <Typography variant="h5">Home Page</Typography>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: "32px",
            ml: "-45.5px",
            mt: "-5px",
            cursor: "pointer",
            [theme.breakpoints.down("md")]: {
              mt: "37px",
            },
          })}
          onClick={() => navigate("/")}
        >
          <VectorIcon />
          <Typography
            variant="h4"
            sx={(theme) => ({
              fontSize: "30px",
              lineHeight: "45px",
              letterSpacing: "0.25px",
              fontWeight: 400,
            })}
          >
            Results
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            mt: "-7px",
            ml: "-7px",
            display: "flex",
            flexWrap: "wrap",
            [theme.breakpoints.down("md")]: {
              mt: "-16px",
              ml: 0,
            },
          })}
        >
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
                  sx={(theme: Theme) => ({
                    mt: "31px",
                    mr: "35px",
                    [theme.breakpoints.down("md")]: {
                      width: "100%",
                      mt: "40px",
                      mr: 0,
                    },
                  })}
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
