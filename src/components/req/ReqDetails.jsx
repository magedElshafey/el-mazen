import React, { useState } from "react";
import style from "./req.module.css";
import { useTranslation } from "react-i18next";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { request } from "../../utils/axios";
import { useMutation } from "react-query";
import Spinner from "../../utils/spinner/Spinner";
const ReqDetails = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [employee, setEmployee] = useState("");
  const [salary, setSalary] = useState("");
  const [bank, setBank] = useState("");
  const [commitments, setCommitments] = useState("");
  const [duration, setDuration] = useState("");
  const [agree, setAgree] = useState(false);
  const handlePhoneNumberChange = (
    isValid,
    value,
    selectedCountryData,
    fullNumber,
    extension
  ) => {
    setPhone(value);
  };
  const handleSendMsg = (data) => {
    return request({ url: "/financeRequest", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(handleSendMsg, {
    onSuccess: (data) => {
      console.log("data", data);
      if (data?.data.status === "success") {
        toast.success(data.data.message);
        setName("");
        setPhone("");
        setEmployee("");
        setSalary("");
        setBank("");
        setCommitments("");
        setAgree(false);
        navigate("/thanks/form");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("phone", phone);
    console.log("employee", employee);
    console.log("salary", salary);
    console.log("bank", bank);
    console.log("commitments", commitments);
    if (
      name.trim() === "" ||
      !phone.trim() === "" ||
      !employee.trim() === "" ||
      !salary.trim() === "" ||
      !bank.trim() === "" ||
      !commitments.trim() === "" ||
      !agree
    ) {
      toast.error(
        i18n.language === "ar"
          ? "جميع الحقول مطلوبة"
          : "all fields are required"
      );
    } else {
      const data = {
        name,
        employ: employee,
        phone,
        salary,
        bank_name: bank,
        commitments,
        duration,
      };
      mutate(data);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={style.mainContainer}>
          <div className="container">
            <div className="row justify-content-center">
              <div className={`col-11 col-md-6 ${style.formContainer}`}>
                <p className={`m-0 p-0 text-center mb-4 ${style.title}`}>
                  {t("navReq")}
                </p>
                <div className="row justify-content-center">
                  <form className="col-10" onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <label
                        htmlFor="name"
                        className="label d-inline-block mb-1"
                      >
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
                      <label
                        htmlFor="phone"
                        className="label d-inline-block mb-1"
                      >
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
                      </div>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="emp"
                        className="label d-inline-block mb-1"
                      >
                        {t("emp")}
                      </label>
                      <div className="inputContainer">
                        <input
                          className="inp"
                          placeholder={t("emp")}
                          type="text"
                          id="emp"
                          onChange={(e) => setEmployee(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="salary"
                        className="label d-inline-block mb-1"
                      >
                        {t("salary")}
                      </label>
                      <div className="inputContainer">
                        <input
                          min={0}
                          className="inp"
                          placeholder={t("salary")}
                          type="number"
                          id="salary"
                          onChange={(e) => setSalary(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="bank"
                        className="label d-inline-block mb-1"
                      >
                        {t("bank")}
                      </label>
                      <div className="inputContainer">
                        <input
                          className="inp"
                          placeholder={t("bank")}
                          type="text"
                          id="bank"
                          onChange={(e) => setBank(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-2 row ">
                      <div className="col-12 col-md-6 mb-2 mb-md-0">
                        <label
                          htmlFor="com"
                          className="label d-inline-block mb-1"
                        >
                          {t("com")}
                        </label>
                        <div className="inputContainer">
                          <input
                            className="inp"
                            placeholder={t("com")}
                            type="text"
                            id="com"
                            onChange={(e) => setCommitments(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mb-2 mb-md-0">
                        <label
                          htmlFor="duration"
                          className="label d-inline-block mb-1"
                        >
                          {t("duration")}
                        </label>
                        <div className="inputContainer">
                          <input
                            className="inp"
                            placeholder={t("duration")}
                            type="text"
                            id="duration"
                            onChange={(e) => setDuration(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 d-flex align-items-center gap-1">
                      <input
                        onChange={() => setAgree(!agree)}
                        type="checkbox"
                        id="check"
                      />
                      <label htmlFor="check" className="label d-inline-block">
                        {t("check")}
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className={style.btn}>{t("send")}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReqDetails;
