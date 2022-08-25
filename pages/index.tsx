import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/common/header";
import Buttons from "../src/components/custom/Button";
import styles from "../styles/About.module.css";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Home: NextPage = (p) => {
  return (
    <>
      <Head>
        <title> صفحه اصلی</title>
      </Head>
      <Header />
      <div className={styles.main}>
        <Box
          px={9.8}
          pt={5.8}
          mt={1.6}
          mb={4.6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box display="flex" justifyContent="center" alignItems="flex-end">
            <Image
              priority={true}
              style={{
                borderRadius: "16px",
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.77) 100%)",
              }}
              width={956}
              height={517}
              src="https://picsum.photos/seed/picsum/956/517"
            />
            <Typography
              mb={4.6}
              fontWeight={700}
              color="#fff"
              position="absolute"
              fontSize={40}
            >
              ساحل پورتو پرتقال
            </Typography>
          </Box>

          <Typography fontSize={20} mt={2.4} width={956}>
            شهر آرکوزلو یک حومه مسکونی ممتاز پورتو است که از بسیاری جهات دارای
            زمین گلف 9 سوراخ معروف ، ویلاهای مجلل و عمارت است. خود میرامار به
            عنوان مقصدی برای تعطیلات عمومی در نظر گرفته می شود که پرتغالی ها از
            مناطق همسایه آن را دوست دارند. با این حال ، این ساحل هنوز به عنوان
            یک مقصد گردشگری بین المللی چندان مشهور نشده است ، که به
            بازدیدکنندگانش مکانی برای لذت بردن می دهد.
          </Typography>
          <Box mb={4.6} pb={4.6}>
            <Buttons mt={6.4} href="/about">
              <>
                <Typography fontSize={15}>درباره ما</Typography>
                <ArrowCircleLeftIcon />
              </>
            </Buttons>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
