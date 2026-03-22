import TopNav from "@/components/TopNav";

const portraitImg = "https://images.unsplash.com/photo-1766939228519-5f498be33e65?w=1600&q=80";

const About = () =>
<main className="bg-black text-white min-h-screen" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    <TopNav />

    {/* Hero */}
    <section className="relative h-screen overflow-hidden">
      <img
      src={portraitImg}
      alt="Даурен Карсакбаев"
      className="absolute inset-0 w-full h-full object-cover opacity-70" />
    
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-16 left-0 right-0 text-center px-6">
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight uppercase mb-4">
          Даурен Карсакбаев
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-[0.3em] uppercase text-white/70">
          Актёр театра и кино
        </p>
      </div>
    </section>

    {/* Bio */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <p className="text-base md:text-lg leading-[1.9] text-white/80">
        Профессиональный актёр с опытом работы в кино, рекламе и медиа-проектах. Обладает выразительной внешностью, харизмой и уверенной работой перед камерой. Умеет быстро вживаться в роль, передавать характер персонажа и работать в разных жанрах — от драматических до рекламных и коммерческих проектов. Открыт для сотрудничества в кино, сериалах, рекламе, клипах и телевизионных проектах.
      </p>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Основная информация */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Основная информация
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
        {[
      ["Возраст", "—"],
      ["Игровой возраст", "—"],
      ["Рост", "—"],
      ["Вес", "—"],
      ["Телосложение", "—"],
      ["Цвет глаз", "—"],
      ["Цвет волос", "—"],
      ["Размер одежды", "—"],
      ["Размер обуви", "—"],
      ["Город", "—"]].
      map(([label, value]) =>
      <div key={label} className="flex justify-between items-baseline py-3 border-b border-white/10">
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 font-semibold">{label}</span>
            <span className="text-base md:text-lg font-bold">{value}</span>
          </div>
      )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Профессиональный опыт */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Профессиональный опыт
      </h2>
      <div className="space-y-8">
        <div className="flex justify-between items-baseline py-3 border-b border-white/10">
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 font-semibold">Опыт в съёмках</span>
          <span className="text-base md:text-lg font-bold">Более 7 лет</span>
        </div>

        <div>
          <h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-white/50 font-semibold mb-5">
            Участие в съёмках:
          </h3>
          <ul className="space-y-3 pl-1">
            {["Художественных фильмов", "Сериалов", "Рекламных роликов", "Клипов", "Интернет-проектов"].map((item) =>
          <li key={item} className="text-base md:text-lg font-medium flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white/40 shrink-0" />
                {item}
              </li>
          )}
          </ul>
        </div>

        <p className="text-base md:text-lg leading-[1.9] text-white/80">
          Работа перед камерой, участие в главных и эпизодических ролях, а также в рекламных проектах.
        </p>
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Навыки */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Навыки
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
      "Актёрская импровизация",
      "Работа перед камерой",
      "Эмоциональная пластика",
      "Сценическая речь",
      "Опыт участия в рекламных съёмках",
      "Уверенное взаимодействие с партнёрами в кадре"].
      map((skill) =>
      <div key={skill} className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-base md:text-lg font-medium">
            {skill}
          </div>
      )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Языки */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Языки
      </h2>
      <div className="space-y-4">
        {[
      ["Казахский", "Свободно"],
      ["Русский", "Свободно"],
      ["Английский", "Свободно"]].
      map(([lang, level]) =>
      <div key={lang} className="flex justify-between items-baseline py-3 border-b border-white/10">
            <span className="text-base md:text-lg font-bold">{lang}</span>
            <span className="text-sm uppercase tracking-[0.2em] text-white/50 font-semibold">{level}</span>
          </div>
      )}
      </div>
    </section>
  </main>;


export default About;