import Image from 'next/image';

export default function BellLogo({
  desktopWidth = 100,
  desktopHeight = 50,
  mobileWidth = 50,
  mobileHeight = 25
}) {
  return (
    <>
      <Image
        src='/bell_logo_blue.png'
        width={desktopWidth}
        height={desktopHeight}
        className='hidden md:block'
        alt='Bell logo'
      />
      <Image
        src='/bell_logo_blue.png'
        width={mobileWidth}
        height={mobileHeight}
        className='block md:hidden'
        alt='Bell logo mobile'
      />
    </>
  );
}
