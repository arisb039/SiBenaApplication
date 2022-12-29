import React from "react";

import { Column, Row, Img, Line, Text, Button, Stack } from "components";
import { useNavigate } from "react-router-dom";

const LandingWebPage = () => {
  const navigate = useNavigate();

  function handleNavigate16() {
    navigate("/registerweb");
  }
  function handleNavigate17() {
    navigate("/helpweb");
  }
  function handleNavigate18() {
    navigate("/registerweb");
  }
  function handleNavigate22() {
    navigate("/registerweb");
  }
  function handleNavigate23() {
    navigate("/helpweb");
  }
  function handleNavigate24() {
    navigate("/helpwebnonlogin");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-plusjakartasans items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gray_50 flex flex-col items-center justify-start p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
          <Column className="flex flex-col justify-start max-w-[1168px] sm:mb-[124px] md:mb-[160px] mb-[233px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <header className="w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                <Row className="header-row w-[12%] max-w-[100%]">
                  <Img
                    src="images/img_sibenalogoapp.png"
                    className="max-w-[100%]"
                    alt="SiBenaLogoApp"
                  />
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden md:ml-[256px] ml-[373px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%] common-row-list">
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
                        className="common-pointer cursor-pointer font-medium text-[16px] text-gray_900"
                        onClick={handleNavigate23}
                        rel="noreferrer"
                      >
                        Bantuan
                      </a>
                    </li>
                  </ul>
                </Row>
                <Line className="bg-bluegray_100 md:h-[11px] h-[15px] sm:h-[8px] sm:hidden sm:ml-[10px] md:ml-[13px] ml-[19px] sm:my-[22px] md:my-[28px] my-[42px] w-[1px]" />
                <Column className="flex flex-col sm:hidden items-center md:ml-[18px] ml-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[4%]">
                  <Text
                    className="common-pointer font-medium text-gray_900 w-[auto]"
                    variant="body4"
                    onClick={handleNavigate24}
                  >
                    Login
                  </Text>
                </Column>
                <Button
                  className="common-pointer cursor-pointer font-medium sm:hidden min-w-[15%] sm:ml-[22px] md:ml-[29px] ml-[43px] text-[16px] text-center text-gray_900 w-[max-content]"
                  onClick={handleNavigate16}
                  size="md"
                  variant="OutlineGray500"
                >
                  Buat Akun Gratis
                </Button>
              </Row>
            </header>
            <Column className="flex flex-col justify-start mt-[133px] sm:mt-[70px] md:mt-[91px] sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[49%]">
              <Text
                className="leading-[66.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                as="h1"
                variant="h1"
              >
                Dapatkan informasi terkini di Bengkong Asrama
              </Text>
              <Text
                className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[23px] md:mt-[30px] mt-[44px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[95%]"
                variant="body3"
              >
                <span className="text-gray_900 text-[18px] font-plusjakartasans">
                  Join with{" "}
                </span>
                <span className="text-gray_900 text-[18px] font-plusjakartasans font-bold">
                  4600+ Developers
                </span>
                <span className="text-gray_900 text-[18px] font-plusjakartasans">
                  {" "}
                  and start getting feedbacks right now{" "}
                </span>
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[23px] md:mt-[30px] mt-[44px] sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[82%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[45%] text-[18px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate22}
                  size="lg"
                  variant="FillIndigoA700"
                >
                  Daftar Sekarang
                </Button>
                <Column className="flex flex-col items-center ml-[10px] md:ml-[6px] sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius10 sm:w-[100%] w-[54%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Img
                      src="images/img_download.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[18px] max-w-[100%] md:w-[12px] w-[18px] sm:w-[9px]"
                      alt="download"
                    />
                    <Text
                      className="flex-grow font-bold ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_900"
                      variant="body3"
                    >
                      Download Aplikasi
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[116px] sm:p-[15px] p-[170px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center max-w-[871px] md:ml-[81px] ml-[auto] md:mr-[74px] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Stack className="h-[258px] relative w-[32%]">
              <Stack className="absolute h-[219px] top-[0] w-[100%]">
                <Stack className="absolute h-[219px] w-[100%]">
                  <Stack
                    className="absolute bg-cover bg-no-repeat h-[212px] sm:p-[4px] md:p-[6px] p-[9px] top-[3%] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group1.svg')" }}
                  >
                    <Img
                      src="images/img_location.svg"
                      className="absolute h-[39px] left-[31%] max-w-[100%] top-[0] w-[8%]"
                      alt="location"
                    />
                  </Stack>
                  <Stack
                    className="absolute bg-cover bg-no-repeat h-[191px] inset-x-[0] mx-[auto] p-[1px] rounded-radius10 sm:w-[100%] w-[48%]"
                    style={{ backgroundImage: "url('images/img_group2.svg')" }}
                  >
                    <Stack className="absolute h-[171px] left-[0] top-[2%] sm:w-[100%] w-[78%]">
                      <Column className="absolute bottom-[1%] flex flex-col items-center justify-start w-[100%]">
                        <Column className="flex flex-col items-end justify-start w-[100%]">
                          <Img
                            src="images/img_camera.svg"
                            className="max-w-[100%] sm:w-[100%] w-[44%]"
                            alt="camera"
                          />
                          <Img
                            src="images/img_vector.svg"
                            className="max-w-[100%] mt-[133px] sm:mt-[70px] md:mt-[91px] w-[100%]"
                            alt="Vector"
                          />
                        </Column>
                      </Column>
                      <Img
                        src="images/img_close.svg"
                        className="absolute bottom-[0] h-[7px] left-[42%] max-w-[100%] sm:w-[3px] md:w-[4px] w-[7px]"
                        alt="close"
                      />
                      <Img
                        src="images/img_location.svg"
                        className="absolute h-[43px] left-[1%] max-w-[100%] top-[32%] w-[28%]"
                        alt="location One"
                      />
                    </Stack>
                    <Img
                      src="images/img_sibenalogoapp_88X76.png"
                      className="absolute h-[88px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[59%]"
                      alt="SiBenaLogoApp One"
                    />
                  </Stack>
                </Stack>
                <Img
                  src="images/img_volume.svg"
                  className="absolute bottom-[32%] h-[55px] left-[21%] max-w-[100%] w-[15%]"
                  alt="volume"
                />
              </Stack>
              <Img
                src="images/img_vector_red_300.svg"
                className="absolute bottom-[0] h-[168px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[50%]"
                alt="Vector One"
              />
            </Stack>
            <Column className="flex flex-col justify-start mb-[4px] md:ml-[114px] ml-[166px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
              <Text className="text-gray_901 w-[auto]" as="h4" variant="h4">
                Pengantar Aplikasi
              </Text>
              <Text
                className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900 w-[100%]"
                variant="body4"
              >
                SiBena adalah aplikasi yang memberikan informasi dan lokasi di
                daerah bengkong asrama. SiBena berperan dalam pertukaran
                informasi mengenai informasi atau berita penting di sekitar
                bengkong asrama.
              </Text>
            </Column>
          </Row>
        </Row>
        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[112px] sm:p-[15px] p-[164px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center max-w-[942px] mb-[1px] md:ml-[88px] ml-[auto] md:mr-[28px] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Img
              src="images/img_001drawkitcon.svg"
              className="sm:h-[145px] md:h-[187px] h-[271px] max-w-[100%] sm:w-[144px] md:w-[186px] w-[271px]"
              alt="001drawkitcon"
            />
            <Column className="flex flex-col justify-start md:ml-[117px] ml-[171px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
              <Text
                className="leading-[48.00px] md:leading-[normal] sm:leading-[normal] text-gray_901 w-[100%]"
                as="h4"
                variant="h4"
              >
                Update Informasi, Pengumuman dan Berita
              </Text>
              <Text
                className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[91%]"
                variant="body4"
              >
                Kami tetap memberikan informasi penting untuk anda. Dengan
                aplikasi SiBena, anda dapat mengetahui pemberitahuan atau
                informasi penting di Bengkong Asrama.
              </Text>
            </Column>
          </Row>
        </Row>
        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[125px] sm:p-[15px] p-[183px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center max-w-[890px] md:ml-[90px] ml-[auto] md:mr-[35px] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Img
              src="images/img_vector_indigo_A700.svg"
              className="max-w-[100%] sm:mt-[18px] md:mt-[24px] mt-[35px] w-[26%]"
              alt="vector Two"
            />
            <Column className="flex flex-col justify-start mb-[3px] md:ml-[133px] ml-[194px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
              <Text
                className="leading-[48.00px] md:leading-[normal] sm:leading-[normal] text-gray_901 w-[100%]"
                as="h4"
                variant="h4"
              >
                Penelusuran Lokasi Dengan Navigasi
              </Text>
              <Text
                className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[91%]"
                variant="body4"
              >
                Perlu mencari lokasi di sekitar Bengkong Asrama? SiBena dapat
                menampilkan lokasi-lokasi yang anda butuhkan di sekitar Bengkong
                Asrama. Sehingga anda dapat menemukan lokasi yang anda perlukan.
              </Text>
            </Column>
          </Row>
        </Row>
        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-center md:p-[106px] p-[155px] sm:p-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[970px] md:ml-[55px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="text-black_902 tracking-ls2 w-[auto]"
              as="h2"
              variant="h2"
            >
              👋
            </Text>
            <Text
              className="leading-[62.00px] md:leading-[normal] sm:leading-[normal] md:ml-[29px] ml-[43px] sm:mx-[0] text-black_902 tracking-ls2 sm:w-[100%] w-[60%]"
              as="h2"
              variant="h2"
            >
              Dapatkan informasi terbaru di Bengkong Asrama sekarang!
            </Text>
            <Column className="flex flex-col items-center md:ml-[20px] ml-[30px] sm:mx-[0] sm:px-[0] rounded-radius4638 sm:w-[100%] w-[28%]">
              <Button
                className="common-pointer cursor-pointer font-semibold text-[16px] text-center text-white_A700 tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                onClick={handleNavigate18}
                shape="RoundedBorder27"
                size="lg"
                variant="FillBlueA701"
              >
                Registrasi Sekarang
              </Button>
              <Text
                className="font-normal sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-bluegray_500 w-[auto]"
                variant="body5"
              >
                100% Gratis
              </Text>
            </Column>
          </Row>
        </Row>
        <footer className="bg-gray_50 font-poppins rounded-radius4 w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1170px] ml-[auto] mr-[auto] sm:mx-[0] mx-[auto] sm:my-[48px] md:my-[62px] my-[91px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%] common-column-list">
                <ul className="flex flex-col">
                  <li className="w-[27%] max-w-[100%]">
                    <Img
                      src="images/img_sibenalogoapp.png"
                      className="cursor-pointer max-w-[100%]"
                      alt="SiBenaLogoApp Two"
                    />
                  </li>
                  <li className="w-[auto] mt-[6px] sm:mt-[3px] md:mt-[4px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-bluegray_700"
                      rel="noreferrer"
                    >
                      SiBena merupakan aplikasi sistem informasi yang
                      menyediakan pengumuman, berita, dan informasi di darerah
                      Bengkong Asrama
                    </a>
                  </li>
                  <li className="w-[49%] mt-[45px] sm:mt-[23px] sm:w-[100%] md:mt-[30px] max-w-[100%]">
                    <Img
                      src="images/img_social.svg"
                      className="cursor-pointer max-w-[100%]"
                      alt="Social"
                    />
                  </li>
                </ul>
              </Column>
              <Column className="flex flex-col justify-start md:ml-[198px] ml-[288px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
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
                  onClick={handleNavigate17}
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
    </>
  );
};

export default LandingWebPage;
