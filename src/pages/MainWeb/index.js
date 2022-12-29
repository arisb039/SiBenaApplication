import React from "react";

import { Column, Row, Img, Text, Button, Grid, Line } from "components";
import { useNavigate } from "react-router-dom";

const MainWebPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/loginpage");
  }
  function handleNavigate8() {
    navigate("/mapweb");
  }
  function handleNavigate9() {
    navigate("/profileweb");
  }
  function handleNavigate10() {
    navigate("/mapweb");
  }
  function handleNavigate11() {
    navigate("/settingsweb");
  }
  function handleNavigate14() {
    navigate("/helpweb");
  }
  function handleNavigate15() {
    navigate("/profileweb");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-opensans items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1170px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[1px] py-[1px] shadow-bs1 w-[100%]">
              <Img
                src="images/img_sibenalogoapp.png"
                className="max-w-[100%] mt-[3px] w-[7%]"
                alt="SiBenaLogoApp"
              />
              <Img
                src="images/img_map.svg"
                className="common-pointer max-w-[100%] sm:ml-[474px] md:ml-[612px] ml-[890px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[2%]"
                onClick={handleNavigate8}
                alt="map"
              />
              <Img
                src="images/img_notification.svg"
                className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] md:mt-[12px] mt-[18px] sm:mt-[9px] sm:w-[13px] md:w-[17px] w-[25px]"
                alt="notification"
              />
              <Img
                src="images/img_settings.svg"
                className="sm:h-[14px] md:h-[18px] h-[25px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] md:mt-[11px] mt-[17px] sm:mt-[9px] sm:w-[13px] md:w-[17px] w-[25px]"
                alt="settings"
              />
              <Img
                src="images/img_ellipse6.png"
                className="common-pointer sm:h-[20px] md:h-[25px] h-[36px] sm:ml-[12px] md:ml-[16px] ml-[24px] mt-[12px] sm:mt-[6px] md:mt-[8px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[36px]"
                onClick={handleNavigate15}
                alt="EllipseSix"
              />
            </Row>
            <Text
              className="leading-[normal] sm:mt-[31px] md:mt-[40px] mt-[59px] text-black_901 w-[100%]"
              as="h5"
              variant="h5"
            >
              Selamat Datang
              <br />
              Pak Raden!
            </Text>
          </Column>
          <Column className="flex flex-col font-plusjakartasans items-center justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
              <Column className="bg-gray_51 flex flex-col max-w-[280px] ml-[auto] mr-[auto] sm:mx-[0] sm:p-[15px] md:p-[22px] p-[33px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                  <Img
                    src="images/img_home.svg"
                    className="flex-shrink-0 max-w-[100%] w-[18%]"
                    alt="home"
                  />
                  <Text
                    className="flex-grow font-medium ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[3px] text-gray_901"
                    variant="body6"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Column className="flex flex-col justify-start md:ml-[4px] ml-[6px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Text
                    className="ml-[2px] text-gray_500 tracking-ls11 uppercase w-[auto]"
                    variant="body7"
                  >
                    Menu Lain
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[2px] sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                    <Img
                      src="images/img_user.svg"
                      className="flex-shrink-0 max-w-[100%] w-[24%]"
                      alt="user"
                    />
                    <Text
                      className="common-pointer flex-grow font-medium ml-[14px] sm:ml-[7px] md:ml-[9px] mt-[2px] text-gray_800"
                      variant="body6"
                      onClick={handleNavigate9}
                    >
                      Profil
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                    <Img
                      src="images/img_map.svg"
                      className="common-pointer max-w-[100%] mt-[1px] w-[9%]"
                      onClick={handleNavigate10}
                      alt="map One"
                    />
                    <Text
                      className="font-medium ml-[13px] sm:ml-[6px] md:ml-[8px] mt-[3px] text-gray_800 w-[auto]"
                      variant="body6"
                    >
                      Navigasi
                    </Text>
                    <Button className="cursor-pointer font-medium min-w-[20%] sm:ml-[43px] md:ml-[55px] ml-[81px] text-[10px] text-center text-indigo_A400 tracking-ls11 uppercase w-[max-content]">
                      NEW
                    </Button>
                  </Row>
                </Column>
                <Column className="flex flex-col justify-end mb-[1377px] sm:mb-[733px] md:mb-[947px] md:ml-[4px] ml-[6px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] py-[1px] sm:w-[100%] w-[64%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end mt-[1px] w-[100%]">
                    <Img
                      src="images/img_settings_17X17.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[12px] h-[17px] max-w-[100%] mb-[1px] md:w-[11px] w-[17px] sm:w-[9px]"
                      alt="settings One"
                    />
                    <Text
                      className="common-pointer flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_800"
                      variant="body6"
                      onClick={handleNavigate11}
                    >
                      Pengaturan Akun
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-end mr-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]"
                    onClick={handleNavigate3}
                  >
                    <Img
                      src="images/img_question.svg"
                      className="flex-shrink-0 sm:h-[10px] md:h-[12px] h-[17px] max-w-[100%] mb-[1px] md:w-[11px] w-[17px] sm:w-[9px]"
                      alt="question"
                    />
                    <Text
                      className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_800"
                      variant="body6"
                    >
                      Logout
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col font-inter items-center max-w-[1160px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                  <Text
                    className="font-semibold text-gray_902 w-[auto]"
                    variant="body1"
                  >
                    Semua Berita
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                    <Grid className="sm:gap-[17px] md:gap-[22px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_image.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Image"
                        />
                        <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] pt-[2px] w-[100%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-semibold text-deep_purple_500 w-[auto]"
                              variant="body5"
                            >
                              Alec Whitten • 19 Desember 2022
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                              <Text
                                className="flex-grow font-semibold sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_902"
                                variant="body1"
                              >
                                Pengumuman Penerapan RFID
                              </Text>
                              <Img
                                src="images/img_upload.svg"
                                className="flex-shrink-0 max-w-[100%] mb-[4px] w-[5%]"
                                alt="upload"
                              />
                            </Row>
                            <Text
                              className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_501 w-[100%]"
                              variant="body4"
                            >
                              Mulai 1 Januari 2023, beberapa titik di daerah
                              Bengkong Asrama akan diterapkan sistem portal
                              berbasis RFID
                            </Text>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                            <Text
                              className="bg-gray_54 font-medium pb-[2px] sm:pt-[3px] md:pt-[4px] pt-[6px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius12 text-deep_purple_500 w-[112px]"
                              variant="body5"
                            >
                              Pengumuman
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[31%] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_701 text-center w-[max-content]"
                              variant="FillGray55"
                            >
                              RFID
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_image_240X537.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Image One"
                        />
                        <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] pt-[2px] w-[100%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-semibold text-deep_purple_500 w-[auto]"
                              variant="body5"
                            >
                              Demi WIlkinson • 18 Desember 2022
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                              <Text
                                className="flex-grow font-semibold text-gray_902"
                                variant="body1"
                              >
                                Peringatan HUT Kota Batam Ke-193 Tahun
                              </Text>
                              <Img
                                src="images/img_upload.svg"
                                className="flex-shrink-0 max-w-[100%] w-[5%]"
                                alt="upload One"
                              />
                            </Row>
                            <Text
                              className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_501 w-[100%]"
                              variant="body4"
                            >
                              Memperingati HUT Kota Batam, warga Bengkong Asrama
                              mengadakan upacara memperingati HUT Kota Batam
                              Ke-193 Tahun.
                            </Text>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                            <Button
                              className="cursor-pointer font-medium min-w-[20%] text-[14px] text-center text-light_blue_900 w-[max-content]"
                              variant="FillGray56"
                            >
                              Berita
                            </Button>
                            <Button
                              className="cursor-pointer font-medium min-w-[32%] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center text-indigo_500 w-[max-content]"
                              variant="FillBlue51"
                            >
                              Kota Batam
                            </Button>
                            <Button
                              className="cursor-pointer font-medium min-w-[44%] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center text-deep_orange_900 w-[max-content]"
                              variant="FillRed50"
                            >
                              HUT Kota Batam
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_image_1.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Image Two"
                        />
                        <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] pt-[4px] w-[100%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-semibold text-deep_purple_500 w-[auto]"
                              variant="body5"
                            >
                              Natali Craig • 16 Desember 2022
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                              <Text
                                className="flex-grow font-semibold sm:mt-[3px] md:mt-[4px] mt-[6px] text-gray_902"
                                variant="body1"
                              >
                                Pengumuman Penutupan Jalur Sementara
                              </Text>
                              <Img
                                src="images/img_upload.svg"
                                className="flex-shrink-0 max-w-[100%] mb-[4px] w-[5%]"
                                alt="upload Two"
                              />
                            </Row>
                            <Text
                              className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_501 w-[100%]"
                              variant="body4"
                            >
                              Menjelang HUT Kota Batam, jalur dari dan ke arah
                              bengkong asrama ditutup sementara per tanggal 16
                              Desember sampai 18 Desember 2022.
                            </Text>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                            <Text
                              className="bg-gray_54 font-medium pb-[2px] sm:pt-[3px] md:pt-[4px] pt-[6px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius12 text-deep_purple_500 w-[112px]"
                              variant="body5"
                            >
                              Pengumuman
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[51%] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center text-indigo_500 w-[max-content]"
                              variant="FillBlue51"
                            >
                              Pemberitahuan
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_image_2.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Image Three"
                        />
                        <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] pt-[2px] w-[100%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-semibold text-deep_purple_500 w-[auto]"
                              variant="body5"
                            >
                              Drew Cano • 10 November 2022
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                              <Text
                                className="flex-grow font-semibold text-gray_902"
                                variant="body1"
                              >
                                Peringatan Hari Pahlawan
                              </Text>
                              <Img
                                src="images/img_upload.svg"
                                className="flex-shrink-0 max-w-[100%] w-[5%]"
                                alt="upload Three"
                              />
                            </Row>
                            <Text
                              className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_501 w-[100%]"
                              variant="body4"
                            >
                              Dalam rangka memperingati Hari Pahlawan, warga
                              daerah Bengkong Asrama mengadakan upacara
                              memperingati Hari Pahlawan.
                            </Text>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                            <Button
                              className="cursor-pointer font-medium min-w-[17%] text-[14px] text-center text-teal_800 w-[max-content]"
                              variant="FillLightgreen50"
                            >
                              Berita
                            </Button>
                            <Button
                              className="cursor-pointer font-medium min-w-[32%] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center text-pink_A700 w-[max-content]"
                              variant="FillGray57"
                            >
                              Hari Pahlawan
                            </Button>
                            <Button
                              className="cursor-pointer font-medium min-w-[48%] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center text-pink_700 w-[max-content]"
                              variant="FillRed51"
                            >
                              Hari Pahlawan Nasional
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_image_1.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Image Four"
                        />
                        <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] pt-[4px] w-[100%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-semibold text-deep_purple_500 w-[auto]"
                              variant="body5"
                            >
                              Natali Craig • 24 September 2022
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                              <Text
                                className="flex-grow font-semibold text-gray_902"
                                variant="body1"
                              >
                                Peringatan HUT Kepri Ke-20 Tahun
                              </Text>
                              <Img
                                src="images/img_upload.svg"
                                className="flex-shrink-0 max-w-[100%] w-[5%]"
                                alt="upload Four"
                              />
                            </Row>
                            <Text
                              className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_501 w-[100%]"
                              variant="body4"
                            >
                              Upacara Peringatan HUT Kepulauan Riau Ke-20 Tahun
                              Berlangsung Khidmat.
                            </Text>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                            <Button
                              className="cursor-pointer font-medium min-w-[30%] text-[14px] text-center text-deep_purple_500 w-[max-content]"
                              variant="FillGray54"
                            >
                              Berita
                            </Button>
                            <Text
                              className="bg-blue_51 font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] pb-[2px] sm:pt-[3px] md:pt-[4px] pt-[6px] px-[10px] sm:px-[5px] md:px-[6px] rounded-radius12 text-indigo_500 w-[133px]"
                              variant="body5"
                            >
                              HUT Kepri Ke-20
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_image_2.png"
                          className="max-w-[100%] w-[100%]"
                          alt="Image Five"
                        />
                        <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] pt-[4px] w-[100%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-semibold text-deep_purple_500 w-[auto]"
                              variant="body5"
                            >
                              Drew Cano • 17 Agustus 2022
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                              <Text
                                className="flex-grow font-semibold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_902"
                                variant="body1"
                              >
                                Kemeriahan Peringatan HUT RI Ke-77 di Bengkong
                                Asrama
                              </Text>
                              <Img
                                src="images/img_upload.svg"
                                className="flex-shrink-0 max-w-[100%] w-[5%]"
                                alt="upload Five"
                              />
                            </Row>
                            <Text
                              className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_501 w-[100%]"
                              variant="body4"
                            >
                              Acara peringatan HUT Republik Indonesia Ke-77
                              Tahun berlangsung meriah.
                            </Text>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                            <Button
                              className="cursor-pointer font-medium min-w-[24%] text-[14px] text-center text-teal_800 w-[max-content]"
                              variant="FillLightgreen50"
                            >
                              Berita
                            </Button>
                            <Button
                              className="cursor-pointer font-medium min-w-[27%] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center text-pink_A700 w-[max-content]"
                              variant="FillGray57"
                            >
                              HUT RI
                            </Button>
                            <Button
                              className="cursor-pointer font-medium min-w-[44%] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-center text-pink_700 w-[max-content]"
                              variant="FillRed51"
                            >
                              HUT RI Ke-77
                            </Button>
                          </Row>
                        </Column>
                      </Column>
                    </Grid>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[29px] md:mt-[38px] mt-[56px] outline outline-[1px] outline-bluegray_50 p-[1px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[26px] ml-[39px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="arrowleft"
                    />
                    <Text
                      className="flex-grow font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] text-bluegray_501"
                      variant="body5"
                    >
                      Sebelumnya
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                    <Button
                      className="cursor-pointer font-medium sm:h-[22px] md:h-[28px] h-[40px] text-[14px] text-center text-deep_purple_400 sm:w-[21px] md:w-[27px] w-[40px]"
                      size="md"
                      variant="FillGray54"
                    >
                      1
                    </Button>
                    <Column className="flex flex-col sm:h-[22px] md:h-[28px] h-[40px] items-center ml-[2px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius8 sm:w-[21px] md:w-[27px] w-[40px]">
                      <Text
                        className="font-medium mb-[1px] text-bluegray_501 w-[auto]"
                        variant="body5"
                      >
                        2
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:h-[22px] md:h-[28px] h-[40px] items-center ml-[2px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius8 sm:w-[21px] md:w-[27px] w-[40px]">
                      <Text
                        className="font-medium mb-[1px] text-bluegray_501 w-[auto]"
                        variant="body5"
                      >
                        3
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:h-[22px] md:h-[28px] h-[40px] items-center ml-[2px] sm:px-[4px] md:px-[5px] px-[8px] rounded-radius8 sm:w-[21px] md:w-[27px] w-[40px]">
                      <Text
                        className="font-medium sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_501 w-[auto]"
                        variant="body5"
                      >
                        ...
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:h-[22px] md:h-[28px] h-[40px] items-center ml-[2px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius8 sm:w-[21px] md:w-[27px] w-[40px]">
                      <Text
                        className="font-medium mb-[1px] text-bluegray_501 w-[auto]"
                        variant="body5"
                      >
                        8
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:h-[22px] md:h-[28px] h-[40px] items-center ml-[2px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius8 sm:w-[21px] md:w-[27px] w-[40px]">
                      <Text
                        className="font-medium mb-[1px] text-bluegray_501 w-[auto]"
                        variant="body5"
                      >
                        9
                      </Text>
                    </Column>
                    <Column className="flex flex-col sm:h-[22px] md:h-[28px] h-[40px] items-center ml-[2px] px-[12px] sm:px-[6px] md:px-[8px] rounded-radius8 sm:w-[21px] md:w-[27px] w-[40px]">
                      <Text
                        className="font-medium my-[1px] text-bluegray_501 w-[auto]"
                        variant="body5"
                      >
                        10
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:mr-[26px] mr-[39px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                    <Text
                      className="flex-grow font-medium mt-[4px] text-bluegray_501"
                      variant="body5"
                    >
                      Selanjutnya
                    </Text>
                    <Img
                      src="images/img_arrowleft.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="arrowright"
                    />
                  </Row>
                </Row>
              </Column>
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
                          alt="SiBenaLogoApp One"
                        />
                      </li>
                      <li className="w-[auto] mt-[6px] sm:mt-[3px] md:mt-[4px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-bluegray_700"
                          rel="noreferrer"
                        >
                          SiBena merupakan aplikasi sistem informasi yang
                          menyediakan pengumuman, berita, dan informasi di
                          darerah Bengkong Asrama
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
                      onClick={handleNavigate14}
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
      </Column>
    </>
  );
};

export default MainWebPage;
