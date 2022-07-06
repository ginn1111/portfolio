import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Input, { TextArea } from '../ui/input/Input';
import Typography from '../ui/typography/Typography';
import clsx from 'clsx';
import styles from './Contact.module.css';
import Blur from '../ui/blur/Blur';
import LoadingSpinner from '../ui/loading/LoadingSpinner';
import useTheme from '../../hooks/useTheme';
import Theme from '../ui/theme/Theme';

const Contact = () => {
  const [isMoon] = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();
  const submitFormHandler = async (event) => {
    event.preventDefault();
    setIsSubmit(true);
    try {
      setIsLoading(true);
      const response = await emailjs.sendForm(
        'service_vjs9bdi',
        'template_amkmsk8',
        form.current,
        'O4MO1CI_CITBwFKyx',
      );
      console.log(response.text);
    } catch (error) {
      console.log(error.text);
    } finally {
      setIsLoading(false);
    }
  };
  let reply;

  if (isSubmit && isLoading) {
    reply = <LoadingSpinner />;
  }

  if (isSubmit && !isLoading) {
    reply = <span className={styles.reply}>Thanks for your contact!</span>;
  }

  return (
    <div id="Contact" className={styles.contactContainer}>
      <section className={styles.left}>
        <Typography
          isMoon={isMoon}
          title="Get in touch"
          subTitle="Contact me"
        />
      </section>
      <section className={styles.right}>
        <form onSubmit={submitFormHandler} ref={form} className={styles.form}>
          <input type="hidden" name="user_name" value="Thuan" />
          <Input name="from_name" placeholder="Name" />
          <Input name="reply_to" placeholder="Email" type="email" />
          <TextArea name="message" row="4" placeholder="Message" />
          <button className={clsx('button', styles.submitBtn)}>Send</button>
          <Theme>
            <div className={styles.reply}>{reply}</div>
          </Theme>
        </form>
      </section>
      <Blur
        bottom="10%"
        left="5%"
        backgroundColor={'var(--blueCard)'}
        filterBlur="5rem"
      />
      <Blur
        bottom="45%"
        right="20%"
        backgroundColor={'var(--purple)'}
        filterBlur="5rem"
      />
    </div>
  );
};

export default Contact;
