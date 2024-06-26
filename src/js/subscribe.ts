import Validator from "./classes/Validator";
import axios from "axios";

export default function subscribe() {
  const forms = Array.from<HTMLFormElement>(
    document.querySelectorAll(".js-subscribe")
  );

  forms.forEach((form) => {
    const formValidator = new Validator(form);
    const controller = new AbortController();
    const submitBtn = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]'
    );

    const success = document.querySelector("#success-modal");
    const handleFormSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      if (!formValidator || !form) return;
      formValidator.validate();

      console.log("Validated", formValidator.valid);

      if (formValidator.valid) {
        const formData = new FormData(form);
        if (submitBtn) submitBtn.disabled = true;
        axios
          .post(form.action, formData, {
            signal: controller.signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res.data);

            if (res.data.status === "mail_sent") {
              success?.classList.add("active");
              document.body.classList.add("modal-open");
              if (form) {
                form.reset();
              }
            } else {
              console.log("Form not sent", res.data);
            }
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
          });
      }
    };
    form.addEventListener("submit", handleFormSubmit);
  });
}
