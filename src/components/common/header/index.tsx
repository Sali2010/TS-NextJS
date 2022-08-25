import React from "react";
import { Button, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import styles from "./../../../../styles/Header.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "next-themes";

const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const [handle, setHandle] = useState(false);
  console.log(theme);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <div className={styles.navbar}>
        <Box
          margin="0 auto"
          width={1152}
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={2.4}
          mt={2.4}
          sx={{
            pr: 9.8,
            pt: 2,
            pb: 2,
            background: styles.navbar,
            borderRadius: "16px",
          }}
        >
          <Box
            flex={2}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent=""
          >
            <Box>
              <Link className={styles.navLink} href="/">
                <a
                  style={{ marginLeft: "24px" }}
                  className={
                    currentRoute === "/" ? styles.active : styles.unActive
                  }
                >
                  صفحه نخست
                </a>
              </Link>
            </Box>
            <Box>
              <Link className={styles.navLink} href="/about">
                <a
                  className={
                    currentRoute === "/about" ? styles.active : styles.unActive
                  }
                >
                  درباره ما
                </a>
              </Link>
            </Box>
          </Box>

          <Box flex={2} display="flex" flexDirection="row" alignItems="center">
            <Box ml={4} display="flex" flexDirection="row" alignItems="center">
              <WbSunnyIcon color="warning" />
              <Switch
                onClick={() => (handle ? setTheme("light") : setTheme("dark"))}
                onChange={() => setHandle(!handle)}
                defaultChecked
                color="default"
              />
              <Brightness3Icon />
            </Box>

            <Box gap={2}>
              <Button
                sx={{ borderRadius: "8px", py: 1, px: 5, ml: 2 }}
                variant="contained"
              >
                <PersonIcon />
                ثبت نام
              </Button>
              <Button
                sx={{ borderRadius: "8px", py: 0.9, px: 6.56 }}
                variant="outlined"
              >
                ورود
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Header;
