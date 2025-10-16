'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TopMenu from '../components/TopMenu';
import CenterText from '../components/CenterText';
import BottomFooter from '../components/BottomFooter';

export default function Home() {
  return (
    <main className='d-flex flex-column min-vh-100'>
      <TopMenu />
      <CenterText />
      <BottomFooter />
    </main>
  );
}