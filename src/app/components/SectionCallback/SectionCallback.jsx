"use client";
import ru from "react-phone-input-2/lang/ru.json";
import PhoneInput from "react-phone-input-2";
import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import { SocialLinkLine } from "../SocialLInkLine/SocialLinkLine";

import "./sectionCallback_tamp.css";

export function SectionCallback() {
  return (
    <div className="sectionWrapper">
      <section className="sectionCallback">
        <div className="sectionCallbackTitleBlock">
          <div>
            <h3 className="sectionCallbackTextColor sectionCallbackTextTitle">
              Назначьте встречу
            </h3>
            <p className="sectionCallbackTextColor">
              Мы перезвоним для уточнения деталей и ваших указаний к
              предстоящему обсуждению.
            </p>
          </div>
         <SocialLinkLine classUl="sectionCallbackSocialLinks" />
        </div>
        <form className="sectionCallbackForm" id="callbackForm">
          <fieldset className="sectionCallbackFieldset">
            <div>
              <label className="sectionCallbackLabel" htmlFor="callbackForm_name">
                Ваше имя:
              </label>
              <input
                className="sectionCallbackInputName"
                type="text"
                id="callbackForm_name"
                placeholder="Введите ваше имя"
                name="name"
                autoComplete="on"
                required
              />
            </div>
            <div>
              <label className="sectionCallbackLabel" htmlFor="callbackForm_phone">
                Номер телефона:
              </label>
              <PhoneInput
                preferredCountries={["ru", "kz", "by"]}
                localization={ru}
                country={"ru"}
                value={"7"}
                placeholder="XXX-XX-XX"
                inputProps={{
                  name: "phone",
                  required: true,
                  id: "callbackForm_phone",
                  autoComplete: "on",
                }}
                containerClass="phoneInputContainer"
                inputClass="phoneInputInput"
                buttonClass="phoneInputBtn"
                dropdownClass="phoneInputDropDown"
              />
            </div>
          </fieldset>
          <ButtonCommon
            type="submit"
            size="large"
            classSpecify="SectionCallbackSubmitBtn"
          >
            отправить
          </ButtonCommon>
        </form>
      </section>
    </div>
  );
}
