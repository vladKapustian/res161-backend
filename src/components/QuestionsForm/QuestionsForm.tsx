import styles from "./styles.module.css";
import * as Yup from "yup";
import { Form } from "formik";
import { useFormik } from "formik";

export const QuestionsForm = () => {
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
        city: "",
        message: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(40, "Поле должно содержать 40 символов или меньше")
          .required("Обязательное поле"),
        email: Yup.string()
          .email("Невалидный Email")
          .required("Обязательное поле"),
        phoneNumber: Yup.string()
          .max(20, "Поле должно содержать 20 символов или меньше")
          .required("Required"),
        city: Yup.string().max(
          20,
          "Поле должно содержать 20 символов или меньше"
        ),
        message: Yup.string().max(
          200,
          "Поле должно содержать 20 символов или меньше"
        ),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.headers}>
          <p className={styles.headerText}>ОСТАЛИСЬ ВОПРОСЫ?</p>
          <p className={styles.headerText}>+7(938) 111-14-53</p>
          <p className={styles.headerText}>+7(938) 111-14-53</p>
        </div>

        <p className={styles.descriptionText}>
          Вы можете позвонить нам или отправить электронное письмо, и наш
          специалист <br />
          обязательно с вами свяжется
        </p>
        <form className={styles.form}>
          <input
            placeholder="Имя *"
            className={styles.smallInput}
            type="text"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <input
            placeholder="Адрес электронной почты *"
            className={styles.smallInput}
            type="text"
            name="email"
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
          />
          <input
            placeholder="Номер телефона *"
            className={styles.smallInput}
            type="text"
            name="phoneNumber"
            value={values.phoneNumber}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <input
            placeholder="Ваш город"
            className={styles.smallInput}
            type="text"
            name="city"
            value={values.city}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <textarea
            placeholder="Ваше сообщение *"
            className={styles.bigInput}
            name="message"
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
          ></textarea>
        </form>
        <div className={styles.centerButton}>
          <button className={styles.button} onClick={() => handleSubmit()}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};
