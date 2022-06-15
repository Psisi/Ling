import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SignupEmailTemplate.module.css';

const SignupEmailTemplate = () => {
  const [searchParams] = useSearchParams();
  const firstName = searchParams.get('firstName');

  return (
    <div className={styles.container}>
      <h1>Welcome to Maimiao</h1>
      <p>Hello {firstName}, we have happy to have you on board!</p>
      <p>To experience our customized audiovisual services, you only need to activate your account below.</p>
      <button>Activate my account</button>
    </div>
  );
};
export default SignupEmailTemplate;