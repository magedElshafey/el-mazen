import React, { useState } from "react";
import style from "./contact.module.css";
import { useTranslation } from "react-i18next";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { useMutation } from "react-query";
import { request } from "../../utils/axios";
import toast from "react-hot-toast";
const Contactus = ({ social }) => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handlePhoneNumberChange = (
    isValid,
    value,
    selectedCountryData,
    fullNumber,
    extension
  ) => {
    setPhone(value);
  };
  const [message, setMessage] = useState("");
  const handleSendMsg = (data) => {
    return request({ url: "/sendContactMessage", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(handleSendMsg, {
    onSuccess: (data) => {
      if (data?.data.status === "success") {
        toast.success(
          i18n.language === "en"
            ? "your message sent succfully"
            : "تم ارسال رسالتك بنجاح"
        );
        setName("");
        setPhone("");
        setMessage("");
        setEmail("");
      }
    },
    onError: () => {
      toast.error(
        i18n.language === "en"
          ? "there is an error occurred , please try again"
          : "حدث خطأ عند ارسال البيانات حاول مرة اخري"
      );
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("phone", phone);
    console.log("email", email);
    console.log("msg", message);
    if (name.trim() === "" || email.trim() === "") {
      toast.error(
        i18n.language === "ar"
          ? "جميع الحقول المطلوبة"
          : "All Fields are Required"
      );
      return;
    } else {
      const contactData = { name, phone, content: message, email };
      mutate(contactData);
    }
  };
  return (
    <div className={style.mainContainer}>
      <div className="container ">
        <div className="row gap-5 justify-content-end align-items-center">
          <div className="col-12 col-md-7 mb-3 p-2">
            <p className={`m-0 p-0 mb-3 ${style.title}`}>{t("navContact")}</p>
            <form onSubmit={handleClick}>
              <div className="mb-2">
                <label htmlFor="name" className="label d-inline-block mb-1">
                  {t("name")}
                </label>
                <div className="inputContainer">
                  <input
                    className="inp"
                    placeholder={t("name")}
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="label d-inline-block mb-1">
                  {t("email")}
                </label>
                <div className="inputContainer">
                  <input
                    className="inp"
                    placeholder={t("email")}
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <svg
                    className={`inputSvg ${
                      i18n.language === "ar" ? style.ltr : style.rtl
                    } `}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M15.75 3.9375L9 10.125L2.25 3.9375H15.75Z"
                      fill="#6C727F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.83535 3.55741C2.04527 3.3284 2.40109 3.31293 2.6301 3.52285L9 9.36193L15.3699 3.52285C15.5989 3.31293 15.9547 3.3284 16.1647 3.55741C16.3746 3.78641 16.3591 4.14223 16.1301 4.35215L9.3801 10.5397C9.16504 10.7368 8.83496 10.7368 8.61991 10.5397L1.86991 4.35215C1.6409 4.14223 1.62543 3.78641 1.83535 3.55741Z"
                      fill="#6C727F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.6875 3.9375C1.6875 3.62684 1.93934 3.375 2.25 3.375H15.75C16.0607 3.375 16.3125 3.62684 16.3125 3.9375V13.5C16.3125 13.7984 16.194 14.0845 15.983 14.2955C15.772 14.5065 15.4859 14.625 15.1875 14.625H2.8125C2.51413 14.625 2.22798 14.5065 2.017 14.2955C1.80603 14.0845 1.6875 13.7984 1.6875 13.5V3.9375ZM2.8125 4.5V13.5H15.1875V4.5H2.8125Z"
                      fill="#6C727F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.18409 8.61981C8.39407 8.84876 8.37868 9.20459 8.14973 9.41456L2.80598 14.3153C2.57702 14.5253 2.2212 14.5099 2.01123 14.281C1.80125 14.052 1.81664 13.6962 2.04559 13.4862L7.38934 8.58544C7.61829 8.37547 7.97412 8.39085 8.18409 8.61981Z"
                      fill="#6C727F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.81591 8.61981C10.0259 8.39085 10.3817 8.37547 10.6107 8.58544L15.9544 13.4862C16.1834 13.6962 16.1988 14.052 15.9888 14.281C15.7788 14.5099 15.423 14.5253 15.194 14.3153L9.85028 9.41456C9.62132 9.20459 9.60594 8.84876 9.81591 8.61981Z"
                      fill="#6C727F"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="phone" className="label d-inline-block mb-1">
                  {t("phone")}
                </label>
                <div className="inputContainer">
                  <IntlTelInput
                    containerClassName="intl-tel-input top-label-input"
                    inputClassName="phone"
                    placeholder=""
                    defaultCountry="sa"
                    onPhoneNumberChange={handlePhoneNumberChange}
                  />
                  <svg
                    className={`inputSvg ${
                      i18n.language === "ar" ? style.ltr : style.rtl
                    } `}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M6.50391 8.77484C7.08273 9.97016 8.04929 10.9342 9.24609 11.51C9.33437 11.5518 9.43202 11.5699 9.52942 11.5625C9.62681 11.5551 9.72061 11.5225 9.80156 11.4678L11.5594 10.2936C11.637 10.2409 11.7268 10.2088 11.8202 10.2002C11.9137 10.1916 12.0078 10.2068 12.0938 10.2444L15.3844 11.6577C15.4968 11.7045 15.5908 11.7869 15.6518 11.8924C15.7128 11.9978 15.7374 12.1204 15.7219 12.2412C15.6176 13.0553 15.2202 13.8034 14.6042 14.3457C13.9882 14.8879 13.1957 15.1872 12.375 15.1873C9.83887 15.1873 7.40661 14.1799 5.61329 12.3865C3.81998 10.5932 2.8125 8.16097 2.8125 5.62484C2.81268 4.80415 3.1119 4.01165 3.65416 3.39562C4.19642 2.7796 4.94456 2.38226 5.75859 2.27796C5.87942 2.26244 6.00199 2.28707 6.10745 2.34806C6.2129 2.40904 6.29538 2.503 6.34219 2.61546L7.75547 5.91312C7.79222 5.99774 7.8076 6.0901 7.80024 6.18206C7.79288 6.27402 7.76302 6.36276 7.71328 6.44046L6.53906 8.2264C6.48679 8.30718 6.4561 8.40002 6.44995 8.49604C6.44379 8.59206 6.46237 8.68805 6.50391 8.77484Z"
                      fill="#6C727F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.68711 1.72003C5.93023 1.68884 6.17686 1.73841 6.38905 1.86112C6.60029 1.98329 6.76573 2.17119 6.86017 2.39613L8.27141 5.68904C8.27161 5.68951 8.27182 5.68998 8.27202 5.69045C8.34508 5.8593 8.37562 6.04351 8.36095 6.22692C8.34623 6.41084 8.28651 6.58833 8.18703 6.74372L8.18333 6.74951L7.01131 8.53203C7.53437 9.61084 8.40677 10.4811 9.48683 11.0016L9.48911 11.0001L11.2455 9.82677C11.4014 9.72152 11.5813 9.65729 11.7686 9.64004C11.9559 9.62279 12.1446 9.65307 12.317 9.72808C12.3177 9.72839 12.3184 9.7287 12.3191 9.72901L15.604 11.1398C15.8288 11.2342 16.0166 11.3996 16.1387 11.6108C16.2614 11.823 16.311 12.0696 16.2798 12.3127C16.1581 13.2624 15.6946 14.1353 14.9759 14.7679C14.2572 15.4005 13.3326 15.7496 12.3751 15.7498C9.68981 15.7498 7.11435 14.6831 5.21554 12.7843C3.31674 10.8855 2.25 8.31016 2.25 5.62484C2.25022 4.66737 2.5993 3.74266 3.23194 3.02396C3.86453 2.30531 4.73747 1.84174 5.68711 1.72003ZM6.50391 8.77484L5.99652 9.01766C5.91345 8.84408 5.87629 8.65209 5.8886 8.46005C5.90091 8.26801 5.96228 8.08234 6.06683 7.92079L6.06904 7.91737L7.23951 6.13716L7.23844 6.1347L5.82517 2.83705C5.14879 2.92496 4.52713 3.25522 4.07638 3.76729C3.62453 4.28061 3.37518 4.94098 3.375 5.62484M6.50391 8.77484L5.99764 9.02C6.63186 10.3297 7.69091 11.386 9.00224 12.0169L9.00537 12.0184C9.18193 12.102 9.37722 12.1382 9.57202 12.1234C9.76631 12.1086 9.95343 12.0437 10.1151 11.9348C10.1155 11.9346 10.1159 11.9343 10.1163 11.934L11.8718 10.7613L15.1624 12.1745L15.1633 12.1749C15.0753 12.8513 14.7446 13.4727 14.2326 13.9235C13.7192 14.3753 13.0589 14.6247 12.375 14.6248M3.375 5.62484C3.37503 8.01174 4.32324 10.301 6.01104 11.9888C7.69884 13.6766 9.9881 14.6248 12.375 14.6248"
                      fill="#6C727F"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="label d-inline-block mb-1">
                  {t("message")}
                </label>
                <div className="areaContainer">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    className="area"
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className={style.btn}>
                  {t("send")}
                </button>
              </div>
            </form>
          </div>
          <div className={`col-12 col-md-4  ${style.infoContainer} d-flex  `}>
            <div>
              <p className={`m-0 p-0 mb-4  ${style.title}`}>{t("info")}</p>
              <div className="d-flex align-items-center  gap-1 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="10"
                  viewBox="0 0 25 20"
                  fill="none"
                >
                  <path
                    d="M2.5 20C1.8125 20 1.22375 19.755 0.733752 19.265C0.243752 18.775 -0.000831211 18.1867 2.12224e-06 17.5V2.5C2.12224e-06 1.8125 0.245002 1.22375 0.735002 0.733752C1.225 0.243752 1.81334 -0.000831211 2.5 2.12224e-06H22.5C23.1875 2.12224e-06 23.7762 0.245002 24.2662 0.735002C24.7562 1.225 25.0008 1.81333 25 2.5V17.5C25 18.1875 24.755 18.7762 24.265 19.2662C23.775 19.7562 23.1867 20.0008 22.5 20H2.5ZM12.5 11.25L22.5 5V2.5L12.5 8.75L2.5 2.5V5L12.5 11.25Z"
                    fill="white"
                  />
                </svg>
                <a
                  className="text-white"
                  href={`mailto:${social.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.email}
                </a>
              </div>
              <div className="d-flex align-items-center  gap-1 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.82667 10.3867C6.74667 14.16 9.84 17.24 13.6133 19.1733L16.5467 16.24C16.9067 15.88 17.44 15.76 17.9067 15.92C19.4 16.4133 21.0133 16.68 22.6667 16.68C23.4 16.68 24 17.28 24 18.0133V22.6667C24 23.4 23.4 24 22.6667 24C10.1467 24 0 13.8533 0 1.33333C0 0.6 0.6 0 1.33333 0H6C6.73333 0 7.33333 0.6 7.33333 1.33333C7.33333 3 7.6 4.6 8.09333 6.09333C8.24 6.56 8.13333 7.08 7.76 7.45333L4.82667 10.3867Z"
                    fill="white"
                  />
                </svg>
                <a
                  className="text-white"
                  href={`tel:${social.phone}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.phone}
                </a>
              </div>
              <div className="d-flex align-items-center   gap-1 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="19"
                  viewBox="0 0 20 29"
                  fill="none"
                >
                  <path
                    d="M10 13.5714C9.0528 13.5714 8.14439 13.1952 7.47462 12.5254C6.80485 11.8556 6.42857 10.9472 6.42857 10C6.42857 9.0528 6.80485 8.14439 7.47462 7.47462C8.14439 6.80485 9.0528 6.42857 10 6.42857C10.9472 6.42857 11.8556 6.80485 12.5254 7.47462C13.1952 8.14439 13.5714 9.0528 13.5714 10C13.5714 10.469 13.4791 10.9334 13.2996 11.3667C13.1201 11.8 12.857 12.1937 12.5254 12.5254C12.1937 12.857 11.8 13.1201 11.3667 13.2996C10.9334 13.4791 10.469 13.5714 10 13.5714ZM10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 17.5 10 28.5714 10 28.5714C10 28.5714 20 17.5 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0Z"
                    fill="white"
                  />
                </svg>
                <a className="text-white" href="www">
                  {social.address}
                </a>
              </div>
              <div className="d-flex align-items-center  gap-3 mt-3">
                <a href={social.linkedIn} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      d="M31.1111 0C32.1425 0 33.1317 0.409721 33.861 1.13903C34.5903 1.86834 35 2.85749 35 3.88889V31.1111C35 32.1425 34.5903 33.1317 33.861 33.861C33.1317 34.5903 32.1425 35 31.1111 35H3.88889C2.85749 35 1.86834 34.5903 1.13903 33.861C0.409721 33.1317 0 32.1425 0 31.1111V3.88889C0 2.85749 0.409721 1.86834 1.13903 1.13903C1.86834 0.409721 2.85749 0 3.88889 0H31.1111ZM30.1389 30.1389V19.8333C30.1389 18.1522 29.471 16.5398 28.2823 15.3511C27.0935 14.1623 25.4812 13.4944 23.8 13.4944C22.1472 13.4944 20.2222 14.5056 19.2889 16.0222V13.8639H13.8639V30.1389H19.2889V20.5528C19.2889 19.0556 20.4944 17.8306 21.9917 17.8306C22.7136 17.8306 23.4061 18.1174 23.9166 18.6279C24.4271 19.1384 24.7139 19.8308 24.7139 20.5528V30.1389H30.1389ZM7.54444 10.8111C8.41082 10.8111 9.24171 10.4669 9.85433 9.85433C10.4669 9.24171 10.8111 8.41082 10.8111 7.54444C10.8111 5.73611 9.35278 4.25833 7.54444 4.25833C6.67291 4.25833 5.83708 4.60455 5.22081 5.22081C4.60455 5.83708 4.25833 6.67291 4.25833 7.54444C4.25833 9.35278 5.73611 10.8111 7.54444 10.8111ZM10.2472 30.1389V13.8639H4.86111V30.1389H10.2472Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href={social.facebook} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      d="M35 17.5C35 7.84 27.16 0 17.5 0C7.84 0 0 7.84 0 17.5C0 25.97 6.02 33.0225 14 34.65V22.75H10.5V17.5H14V13.125C14 9.7475 16.7475 7 20.125 7H24.5V12.25H21C20.0375 12.25 19.25 13.0375 19.25 14V17.5H24.5V22.75H19.25V34.9125C28.0875 34.0375 35 26.5825 35 17.5Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href={social.instagram} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      d="M19.299 0.00215308C20.576 -0.00274706 21.853 0.010087 23.1296 0.0406512L23.4691 0.0529006C23.861 0.0668998 24.2478 0.0843989 24.715 0.105398C26.5769 0.192893 27.8473 0.486879 28.962 0.919106C30.117 1.36358 31.0899 1.96555 32.0629 2.9385C32.9525 3.81277 33.641 4.87031 34.0805 6.03759C34.5127 7.15229 34.8067 8.42447 34.8942 10.2864C34.9152 10.7519 34.9327 11.1403 34.9467 11.5323L34.9572 11.8718C34.9883 13.1478 35.0017 14.4242 34.9975 15.7006L34.9992 17.006V19.2984C35.0035 20.5754 34.9901 21.8524 34.959 23.129L34.9485 23.4684C34.9345 23.8604 34.917 24.2472 34.896 24.7144C34.8085 26.5763 34.511 27.8467 34.0805 28.9614C33.6424 30.1299 32.9537 31.1883 32.0629 32.0623C31.1878 32.9518 30.1298 33.6402 28.962 34.0799C27.8473 34.5121 26.5769 34.8061 24.715 34.8936C24.2478 34.9146 23.861 34.9321 23.4691 34.9461L23.1296 34.9566C21.853 34.9877 20.576 35.0011 19.299 34.9969L17.9936 34.9986H15.703C14.426 35.0029 13.149 34.9895 11.8724 34.9584L11.5329 34.9479C11.1175 34.9328 10.7022 34.9153 10.287 34.8954C8.42508 34.8079 7.15464 34.5104 6.0382 34.0799C4.87046 33.6413 3.81273 32.9527 2.93911 32.0623C2.04848 31.1878 1.35933 30.1296 0.919713 28.9614C0.487485 27.8467 0.1935 26.5763 0.106004 24.7144C0.0865153 24.2992 0.0690161 23.8838 0.053507 23.4684L0.0447576 23.129C0.0124956 21.8524 -0.0020886 20.5754 0.0010097 19.2984V15.7006C-0.00387424 14.4242 0.0089598 13.1478 0.0395079 11.8718L0.0517572 11.5323C0.0657565 11.1403 0.0832555 10.7519 0.104254 10.2864C0.19175 8.42272 0.485735 7.15404 0.917962 6.03759C1.35784 4.86974 2.04834 3.81249 2.94086 2.94025C3.81388 2.04911 4.87094 1.35934 6.0382 0.919106C7.15464 0.486879 8.42333 0.192893 10.287 0.105398L11.5329 0.0529006L11.8724 0.0441512C13.1484 0.0119053 14.4248 -0.00267885 15.7012 0.000403298L19.299 0.00215308ZM17.5001 8.7517C16.3408 8.73531 15.1898 8.94948 14.114 9.38179C13.0382 9.81409 12.059 10.4559 11.2334 11.2699C10.4078 12.0839 9.75221 13.0539 9.30474 14.1235C8.85726 15.1931 8.62683 16.341 8.62683 17.5004C8.62683 18.6598 8.85726 19.8077 9.30474 20.8772C9.75221 21.9468 10.4078 22.9168 11.2334 23.7308C12.059 24.5449 13.0382 25.1867 14.114 25.619C15.1898 26.0513 16.3408 26.2655 17.5001 26.2491C19.8206 26.2491 22.0461 25.3272 23.687 23.6864C25.3278 22.0455 26.2497 19.82 26.2497 17.4995C26.2497 15.179 25.3278 12.9535 23.687 11.3126C22.0461 9.67178 19.8206 8.7517 17.5001 8.7517ZM17.5001 12.2515C18.1975 12.2387 18.8904 12.3649 19.5384 12.6229C20.1864 12.8808 20.7765 13.2653 21.2743 13.7539C21.772 14.2425 22.1674 14.8253 22.4374 15.4685C22.7073 16.1116 22.8464 16.802 22.8466 17.4995C22.8467 18.197 22.7078 18.8875 22.4381 19.5307C22.1683 20.1739 21.7731 20.7569 21.2755 21.2456C20.7779 21.7343 20.188 22.119 19.54 22.3772C18.8921 22.6354 18.1992 22.7619 17.5019 22.7492C16.1095 22.7492 14.7743 22.1961 13.7897 21.2116C12.8052 20.2271 12.2521 18.8918 12.2521 17.4995C12.2521 16.1072 12.8052 14.7719 13.7897 13.7874C14.7743 12.8029 16.1095 12.2498 17.5019 12.2498L17.5001 12.2515ZM26.6871 6.12684C26.1226 6.14943 25.5887 6.38959 25.1973 6.797C24.8058 7.20442 24.5872 7.74749 24.5872 8.31248C24.5872 8.87746 24.8058 9.42053 25.1973 9.82795C25.5887 10.2354 26.1226 10.4755 26.6871 10.4981C27.2673 10.4981 27.8236 10.2677 28.2339 9.85744C28.6441 9.44723 28.8745 8.89086 28.8745 8.31073C28.8745 7.7306 28.6441 7.17422 28.2339 6.76401C27.8236 6.3538 27.2673 6.12334 26.6871 6.12334V6.12684Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
