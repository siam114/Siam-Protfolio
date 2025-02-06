import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/siam114",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sm-siam/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/SMSiam233877",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sumsuzzaman.siam",
  },
  {
    label: "Discord",
    href: "https://discord.com/channels/@me",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-3">
          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal -up">Let&apos;s work together today!</h2>

            <ButtonPrimary
              href="mailto:smsiam987@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes='reveal -up'
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
            <div>
              <p className="mb-2 reveal -up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal -up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="mb-2 reveal -up">Spcials</p>

            <ul>
              {socials.map(({ label, href }, key) => (
                <li key={key}>
                  <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal -up">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="reveal -up">
            <img src="/logo.jpg" width={40}  height={40} alt="logo" className="rounded-lg" />
          </a>

          <p className="text-zinc-500 text-sm reveal -up">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-zinc-200">codewithsiam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
