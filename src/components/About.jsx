const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 20,
    },
    {
      label: "Years of experience",
      number: 0,
    },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal -up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m SM Sumsuzzaman (SM Siam), a passionate Frontend
            Developer dedicated to crafting visually stunning and highly
            functional web applications. My programming journey began with a
            deep curiosity about web technologies, which led me to master HTML,
            CSS, JavaScript, and React.js. I specialize in building interactive,
            user-friendly, and responsive web interfaces. Beyond coding, I enjoy
            playing football, traveling, and exploring creative design trends.I
            am always eager to learn, collaborate, and take on new challenges.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/logo.jpg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[30px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
