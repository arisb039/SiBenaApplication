import React from "react";

import { Column, Row, Img, Line, Text, Button, List, Stack } from "components";
import { useNavigate } from "react-router-dom";

const HelpWebNonLoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate21() {
    navigate("/");
  }
  function handleNavigate26() {
    navigate("/");
  }
  function handleNavigate27() {
    navigate("/loginpage");
  }
  function handleNavigate28() {
    navigate("/registerweb");
  }
  function handleNavigate29() {
    navigate("/helpweb");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-plusjakartasans items-center justify-end mx-[auto] pt-[13px] sm:pt-[6px] md:pt-[8px] w-[100%]">
        <header className="max-w-[1160px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
            <Row className="header-row w-[12%] max-w-[100%]">
              <Img
                src="images/img_sibenalogoapp.png"
                className="common-pointer max-w-[100%]"
                onClick={handleNavigate26}
                alt="SiBenaLogoApp"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden md:ml-[257px] ml-[374px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%] common-row-list">
              <ul className="flex flex-row items-start justify-center sm:hidden">
                <li className="w-[auto] sm:w-[100%] sm:my-[10px] my-[1px]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-medium text-[16px] text-gray_900"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li className="w-[auto] mt-[1px] ml-[79px] sm:ml-[42px] sm:w-[100%] sm:my-[10px] md:ml-[54px]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-medium text-[16px] text-gray_900"
                    rel="noreferrer"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li className="w-[auto] mb-[1px] ml-[66px] sm:ml-[35px] sm:w-[100%] sm:my-[10px] md:ml-[45px]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-medium text-[16px] text-gray_900"
                    rel="noreferrer"
                  >
                    Bantuan
                  </a>
                </li>
              </ul>
            </Row>
            <Line className="bg-bluegray_100 md:h-[11px] h-[15px] sm:h-[8px] sm:hidden sm:mb-[23px] md:mb-[30px] mb-[44px] sm:ml-[10px] md:ml-[13px] ml-[19px] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[1px]" />
            <Column className="flex flex-col sm:hidden items-center md:ml-[18px] ml-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[4%]">
              <Text
                className="common-pointer font-medium text-gray_900 w-[auto]"
                variant="body4"
                onClick={handleNavigate27}
              >
                Login
              </Text>
            </Column>
            <Button
              className="common-pointer cursor-pointer font-medium sm:hidden min-w-[15%] sm:ml-[22px] md:ml-[29px] ml-[43px] text-[16px] text-center text-gray_900 w-[max-content]"
              onClick={handleNavigate28}
              size="md"
              variant="OutlineGray500"
            >
              Buat Akun Gratis
            </Button>
          </Row>
        </header>
        <Column className="flex flex-col font-inter items-center justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[768px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start px-[122px] sm:px-[15px] md:px-[83px] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                <Text
                  className="text-gray_902 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Frequently Asked Questions
                </Text>
                <Text
                  className="font-normal sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-bluegray_501 w-[auto]"
                  variant="body2"
                >
                  Semua yang anda perlu ketahui tentang Aplikasi SiBena
                </Text>
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Text
                      className="font-medium text-gray_902 w-[auto]"
                      variant="body3"
                    >
                      Apa itu SiBena?
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-black_900 w-[100%]"
                      variant="body4"
                    >
                      SiBena adalah aplikasi yang memberikan informasi dan
                      lokasi di daerah bengkong asrama. SiBena berperan dalam
                      pertukaran informasi mengenai informasi atau berita
                      penting di sekitar bengkong asrama.
                    </Text>
                  </Column>
                  <Img
                    src="images/img_volume_26X24.svg"
                    className="max-w-[100%] w-[4%]"
                    alt="volume"
                  />
                </Row>
                <List
                  className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <Column className="flex flex-col justify-end sm:mx-[0] md:pr-[4px] pr-[7px] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Text
                          className="font-medium text-gray_902 w-[auto]"
                          variant="body3"
                        >
                          Registrasi akun SiBena
                        </Text>
                      </Column>
                      <Img
                        src="images/img_plus.svg"
                        className="max-w-[100%] w-[4%]"
                        alt="plus"
                      />
                    </Row>
                  </Column>
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <Column className="flex flex-col justify-end sm:mx-[0] md:pr-[4px] pr-[7px] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Text
                          className="font-medium text-gray_902 w-[auto]"
                          variant="body3"
                        >
                          Cara mengatur ulang password
                        </Text>
                      </Column>
                      <Img
                        src="images/img_plus.svg"
                        className="max-w-[100%] w-[4%]"
                        alt="plus One"
                      />
                    </Row>
                  </Column>
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <Column className="flex flex-col justify-end sm:mx-[0] md:pr-[4px] pr-[7px] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Text
                          className="font-medium text-gray_902 w-[auto]"
                          variant="body3"
                        >
                          Halaman aplikasi SiBena
                        </Text>
                      </Column>
                      <Img
                        src="images/img_plus.svg"
                        className="max-w-[100%] w-[4%]"
                        alt="plus Two"
                      />
                    </Row>
                  </Column>
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <Column className="flex flex-col justify-end sm:mx-[0] md:pr-[4px] pr-[6px] sm:pt-[3px] md:pt-[4px] pt-[6px] sm:px-[0] sm:w-[100%] w-[94%]">
                        <Text
                          className="font-medium text-gray_902 w-[auto]"
                          variant="body2"
                        >
                          Cara menyalakan autentikasi dua faktor
                        </Text>
                      </Column>
                      <Img
                        src="images/img_plus.svg"
                        className="max-w-[100%] w-[4%]"
                        alt="plus Three"
                      />
                    </Row>
                  </Column>
                </List>
              </Column>
            </Column>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1216px] ml-[auto] mr-[auto] sm:mt-[43px] md:mt-[55px] mt-[81px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="bg-gray_53 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius16 w-[100%]">
              <Stack className="h-[56px] relative w-[11%]">
                <Column className="absolute bottom-[0] flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                      alt="Avatar"
                    />
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                      alt="Avatar One"
                    />
                  </Row>
                </Column>
                <Img
                  src="images/img_avatar_56X56.png"
                  className="absolute sm:h-[30px] md:h-[39px] h-[56px] inset-x-[27%] rounded-radius50 sm:w-[29px] md:w-[38px] w-[56px]"
                  alt="Avatar Two"
                />
              </Stack>
              <Column className="flex flex-col items-center justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                <Text
                  className="font-medium text-gray_902 w-[auto]"
                  variant="body2"
                >
                  Masih ada pertanyaan?
                </Text>
                <Text
                  className="font-normal md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-bluegray_501 w-[auto]"
                  variant="body3"
                >
                  <span className="text-bluegray_501 text-[18px] font-inter">
                    Tidak dapat menemukan jawaban yang Anda cari
                  </span>
                  <span className="text-bluegray_501 text-[18px] font-inter">
                    ?
                  </span>
                  <span className="text-bluegray_501 text-[18px] font-inter">
                    {" "}
                    Silakan mengobrol dengan tim kami yang ramah.
                  </span>
                </Text>
              </Column>
              <Button
                className="cursor-pointer font-medium min-w-[13%] sm:mt-[17px] md:mt-[22px] mt-[32px] text-[16px] text-center text-white_A700 w-[max-content]"
                size="md"
                variant="OutlineDeeppurple400"
              >
                Berhubungan
              </Button>
            </Column>
          </Column>
          <footer className="bg-gray_50 font-poppins sm:mt-[14px] md:mt-[19px] mt-[28px] rounded-radius4 w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1170px] ml-[auto] mr-[auto] sm:mx-[0] mx-[auto] sm:my-[48px] md:my-[62px] my-[91px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%] common-column-list">
                  <ul className="flex flex-col">
                    <li className="w-[32%] max-w-[100%]">
                      <Img
                        src="images/img_sibenalogoapp.png"
                        className="common-pointer cursor-pointer max-w-[100%]"
                        onClick={handleNavigate21}
                        alt="SiBenaLogoApp One"
                      />
                    </li>
                    <li className="w-[auto] mt-[6px] sm:mt-[3px] md:mt-[4px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-bluegray_700"
                        rel="noreferrer"
                      >
                        Clarity gives you the blocks and components you need to
                        create a truly professional website.
                      </a>
                    </li>
                    <li className="w-[56%] mt-[45px] sm:mt-[23px] sm:w-[100%] md:mt-[30px] max-w-[100%]">
                      <Img
                        src="images/img_social.svg"
                        className="cursor-pointer max-w-[100%]"
                        alt="Social"
                      />
                    </li>
                  </ul>
                </Column>
                <Column className="flex flex-col justify-start md:ml-[227px] ml-[330px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Text
                    className="font-semibold text-blue_A701 tracking-ls11 uppercase w-[auto]"
                    variant="body6"
                  >
                    Perusahaan
                  </Text>
                  <Text
                    className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_700 w-[100%]"
                    variant="body5"
                  >
                    Tentang Kami <br />
                    <br />
                    Fitur <br />
                    <br />
                    Karir{" "}
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start md:ml-[22px] ml-[32px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Text
                    className="font-semibold text-blue_A701 tracking-ls11 uppercase w-[auto]"
                    variant="body6"
                  >
                    Bantuan
                  </Text>
                  <Text
                    className="common-pointer font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_700 w-[100%]"
                    variant="body5"
                    onClick={handleNavigate29}
                  >
                    <span className="text-bluegray_700 text-[14px] font-poppins">
                      Pusat Bantuan
                      <br />
                      <br />
                    </span>
                    <span className="text-bluegray_700 text-[14px] font-poppins">
                      Terms & Conditions
                      <br />
                    </span>
                    <span className="text-bluegray_700 text-[14px] font-poppins">
                      <br />
                    </span>
                    <span className="text-bluegray_700 text-[14px] font-poppins">
                      Privacy Policy
                    </span>
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start md:ml-[22px] ml-[32px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Text
                    className="font-semibold text-blue_A701 tracking-ls11 uppercase w-[auto]"
                    variant="body6"
                  >
                    Resources
                  </Text>
                  <Text
                    className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_700 w-[100%]"
                    variant="body5"
                  >
                    Berita
                    <br />
                    <br />
                    Peta
                    <br />
                    <br />
                    How to - Blog
                  </Text>
                </Column>
              </Row>
              <Column className="flex flex-col items-center justify-start sm:mt-[32px] md:mt-[41px] mt-[61px] w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_600 w-[auto]"
                  variant="body5"
                >
                  © Copyright 2022, All Rights Reserved by SiBena
                </Text>
                <Line className="bg-gray-300 h-[1px] w-[100%]" />
              </Column>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default HelpWebNonLoginPage;
