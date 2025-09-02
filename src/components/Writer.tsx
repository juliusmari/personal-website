import { Typewriter } from "react-simple-typewriter";

const Writer = () => {
  return (
    <Typewriter
      loop
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={1000}
      cursor
      cursorStyle="|"
      words={[
        "Make a difference.",
        "Pursue your passions.",
        "Unleash your potential.",
      ]}
    />
  );
};

export default Writer;
