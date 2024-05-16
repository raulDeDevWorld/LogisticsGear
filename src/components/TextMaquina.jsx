import { TypeAnimation } from 'react-type-animation';

const TextMaquina = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Especialistas en servicios TERRESTRES',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Especialistas en servicios MARITIMOS',
        1000,
        'Especialistas en servicios AEREOS',
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '16px', display: 'inline-block', color: 'white', width: '300px', textAlign: 'left', }}
      repeat={Infinity}
    />
  );
};
export default TextMaquina