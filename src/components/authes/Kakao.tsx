'use client';
import { setCookie } from '@/util/async/Cookie';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import CircularUnderLoad from '../CircularUnderLoad';
import styles from './Kakao.module.css';

const KakaoCallback = () => {
  const router = useRouter();
  console.log(process.env.NEXT_PUBLIC_API);
  console.log(router);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log('urlParams', urlParams);
    const code = urlParams.get('code');
    console.log('code', code);

    if (code) {
      // 백엔드 서버에 액세스 토큰과 리프레시 토큰을 요청합니다.
      fetch(`${process.env.NEXT_PUBLIC_API}auth/kakao/callback?code=${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (response) => {
          const res = await response.json();
          // console.log('json', response.json());
          console.log('1', res);
          setCookie('access_token', res.access_token);
          setCookie('refresh_token', res.refresh_token);
        })
        .then(() => router.push('/main'))
        .catch((error) => {
          // 에러 처리
          console.error(error);
          //   router.push('/error');
        });
    } else {
      // 에러 처리
      //   router.push('/error');
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <CircularUnderLoad style={{ widht: '200px' }} />
      <div>로그인중 ..</div>
    </div>
  );
};

export default KakaoCallback;
