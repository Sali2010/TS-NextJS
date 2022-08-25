import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/common/header";
import Buttons from "../src/components/custom/Button";
import styles from "../styles/About.module.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Buttons2 from "../src/components/custom/Button2";

const About: NextPage = (p) => {
  return (
    <>
      <Head>
        <title> درباره ما</title>
      </Head>
      <Header />

      <div className={styles.main}>
        <Box
          px={9.8}
          pt={5.8}
          mt={1.6}
          pb={4.8}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection="row"
          margin="0 auto"
        >
          <Box>
            <Image
              style={{
                borderRadius: "98px",
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.77) 100%)",
              }}
              width={461}
              height={517}
              src="https://picsum.photos/seed/picsum/956/517"
            />
          </Box>

          <Box>
            <Typography
              mb={2.4}
              textAlign="center"
              fontSize={40}
              fontWeight={700}
            >
              درباره ما
            </Typography>
            <Typography mr={2.4} width={499} fontSize={24}>
              نکته مهمی که در بیشتر سایتهای ایرانی توجهی به آن نمیشود طراحی صفحه
              درباره ما یا همان About Us است. اکثر افراد در این بخش مطالبی
              طولانی و خسته کننده برای کاربر و یا نوشته ای کوتاه و ناقص قرار
              میدهند که میتواند اعتبار سایت یا شرکت شما را زیر سوال ببرد.
            </Typography>
          </Box>
        </Box>
        <Box mb={4.6} pb={4.6} display="flex" justifyContent="center">
          <Buttons2 mt={1.3} href="./">
            <>
              <ArrowCircleRightIcon />
              <Typography fontSize={15}>صفحه اصلی</Typography>
            </>
          </Buttons2>
        </Box>
      </div>
    </>
  );
};

export default About;
