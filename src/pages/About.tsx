import TopNav from "@/components/TopNav";
import aboutHero from "@/assets/about-hero.jpeg";

const About = () =>
<main className="bg-black text-white min-h-screen" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    <TopNav />

    {/* Hero */}
    <section className="relative md:h-screen overflow-hidden">
      <img
        src={aboutHero}
        alt="Молдабаева Эльмира Абайевна"
        className="block w-full h-auto max-h-[85vh] object-contain object-[center_20%] bg-black md:absolute md:inset-0 md:h-full md:max-h-none md:object-cover md:opacity-70"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.25) 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.25) 92%, transparent 100%)",
        }}
      />
    
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative md:absolute md:bottom-16 md:left-0 md:right-0 text-center px-6 -mt-16 md:mt-0 pb-8 md:pb-0">
        <h1 className="text-4xl md:text-8xl font-extrabold tracking-tight uppercase mb-4">
          Эльмира Молдабаева
        </h1>
        <p className="text-[11px] md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/70 whitespace-nowrap">
          АКТРИСА — МОДЕЛЬ — ЛИЦО
        </p>
      </div>
    </section>

    {/* Bio */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <p className="text-base md:text-lg leading-[1.9] text-white/80 text-center">
        Я актриса с опытом участия в полнометражных фильмах, сериалах, клипах, рекламных роликах и телевизионных шоу. Обладаю уверенным присутствием в кадре, эмоциональной пластикой и навыками импровизации. Работаю на казахском и русском языках. Открыта для сотрудничества в кино, сериалах, рекламе, клипах, телепроектах и live-стриминге.
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-base">
        {[
      ["Полное имя", "Молдабаева Эльмира Абайевна"],
      ["Возраст", "41 год"],
      ["Рост", "164 см"],
      ["Вес", "53 кг"],
      ["Тип внешности", "Европеоидно-азиатский"],
      ["Цвет глаз", "Зелёный"],
      ["Цвет волос", "Коричневый"],
      ["Размер одежды", "S–M"],
      ["Размер обуви", "36"],
      ["Татуировки / шрамы", "Отсутствуют"]].
      map(([label, value]) =>
      <div key={label} className="flex justify-between items-baseline py-3 border-b border-white/10">
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 font-semibold">{label}</span>
            <span className="text-base md:text-lg font-bold text-right">{value}</span>
          </div>
      )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Фильмография */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Фильмография
      </h2>
      <div className="space-y-5">
        {[
          { title: "«Байка! Алаяқ!»", role: "Эпизод — журналист", year: "2025", director: "Дархан Саркенов" },
          { title: "«Цена успеха»", role: "Участник банкета", year: "2025", director: "Алдияр Байракимов" },
          { title: "«7 қарақшы»", role: "Зритель", year: "2025", director: "Қуаныш Бейсек", note: "Продюсеры — Алмас Жали, Анна Качко. Сценарий — Алдияр Жапархан, Қазыбек Оразбек" },
          { title: "«Рассечение»", role: "Эпизод — журналистка", year: "2025", director: "Даулет Жумабаев", note: "Международный проект Казахстан — Южная Корея. Автор идеи — Асылхан Толепов" },
          { title: "«Ерекше»", role: "Эпизод — маникюрщица; сцена «Клуб»", year: "2025", director: "Ернар Нургалиев" },
          { title: "«Дәстүр 2» (тизер)", role: "Эпизод — врач", year: "2025", director: "Алишер Утев" },
          { title: "«Мошенники в кино» (сериал)", role: "Работник офиса; приглашённая гостья на благотворительном вечере", year: "2025–2026", director: "Олжас Нурбай, Азамат Жанабеков" },
          { title: "«Байдын баласы 2»", role: "Эпизод — друг семьи", year: "2026", director: "Абдусаид Шайхисламулы" },
          { title: "«7 ата»", role: "Родственница главной героини (сцена похороны)", year: "2026 (апрель)", director: "Айсултан Сеитов" },
          { title: "«Бажа 3»", role: "Эпизод — мама именинника", year: "2026 (апрель)", director: "Олжас Нурбай" },
          { title: "«7 Ата»", role: "Родственница умершего (сцена похороны)", year: "2026 (апрель)", director: "Айсултан Сеитов" },
          { title: "«Журегімнің иесі»", role: "Эпизод — Жеңге", year: "2026", director: "—" },
          { title: "«Айыптама»", role: "Банковский работник, руководитель отдела", year: "2026", director: "Дастан Алдабек" },
          { title: "«7 апке»", role: "Групповка", year: "2026", director: "Абдусаид Шайхисламулы" },
          { title: "«Ағайынды»", role: "Главная роль — Жанар", year: "2026", director: "Дастан Абильмажинов" },
          { title: "«Хат»", role: "Эпизод — Жеңге", year: "2026", director: "Ботагөз Кеніщбай" },
          { title: "«Ханская охота»", role: "Богатая гостья", year: "2026", director: "Дархан Тулегенов" },
          { title: "«Папа, маган карашы»", role: "Групповка, пассажир автобуса", year: "2026", director: "Санжар Омаров" },
          { title: "«Начни с себя»", role: "Гостья тусау кесер", year: "2026", director: "Рашид Сулейменов" },
          { title: "«Ак саулем»", role: "Эпизод — Гульнара, супруга бизнесмена Нургельды", year: "2026", director: "Канагат Мустафин" },
          { title: "«Список желания»", role: "Сцена похороны, кухонный помощник", year: "2026", director: "Олжас Нурбай" },
        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-white/50 font-semibold shrink-0">{item.year}</span>
            </div>
            <p className="text-sm md:text-base text-white/70 mb-1">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Роль:</span>{item.role}
            </p>
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Режиссёр:</span>{item.director}
            </p>

            {item.note && <p className="text-xs text-white/40 mt-2 italic">{item.note}</p>}
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Реклама */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Реклама
      </h2>
      <div className="space-y-5">
        {[
          { title: "«Белый билет»", role: "Врач", year: "2025–2026" },
          { title: "«1Fit»", role: "Спортсменка 40+, призывающая заниматься спортом", year: "2025" },
          { title: "«Тик-так»", role: "Гостья на банкете", year: "2025" },
          { title: "«Télé 2»", role: "Зритель взлёта ракеты на Байконуре", year: "2026" },
          { title: "«Тинькофф»", role: "Прохожий", year: "2026" },
          { title: "Vivo (телефон)", role: "Гостья на свадьбе", year: "2026" },

        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-white/50 font-semibold shrink-0">{item.year}</span>
            </div>
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Роль:</span>{item.role}
            </p>
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Музыкальные клипы */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Музыкальные клипы
      </h2>
      <div className="space-y-5">
        {[
          { title: "Клип Садраддина", role: "Ругающаяся соседка", year: "2026", director: "Турар Тумарбек" },
          { title: "Клип Ирины Кайратовны", role: "Женщина с камерой", year: "2026", director: "Карина Кадырманова" },
        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-white/50 font-semibold shrink-0">{item.year}</span>
            </div>
            <p className="text-sm md:text-base text-white/70 mb-1">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Роль:</span>{item.role}
            </p>
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Режиссёр:</span>{item.director}
            </p>
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>


    {/* Телепередачи / Шоу */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Телепередачи и шоу
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: "«The Voice»", detail: "Нокауты и дуэт" },
          { title: "«Голубой огонёк»", detail: "Телеканал Qazaqstan" },
          { title: "«Новогоднее шоу»", detail: "Телеканал Astana TV" },
          { title: "«Новогодний концерт»", detail: "Телеканал Хабар" },
          { title: "«Кто инфо-цыган?»", detail: "Роль члена жюри" },
        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-4">
            <h3 className="text-base md:text-lg font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-white/50">{item.detail}</p>
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Навыки */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Профессиональные навыки
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "Работа с текстами (русский, казахский)",
          "Уверенное эмоциональное присутствие в кадре",
          "Опыт съёмки динамичных сцен",
          "Импровизация перед камерой",
          "Вокал",
          "Стрельба из лука",
        ].map((skill) =>
          <div key={skill} className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-base md:text-lg font-medium">
            {skill}
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Дополнительно */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Дополнительно
      </h2>
      
      <div className="space-y-8">
        {/* Live-стриминг */}
        <div className="text-center">
          <h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-white/50 font-semibold mb-5 text-center">
            Live-стриминг / Прямые эфиры
          </h3>
          <ul className="space-y-3 pl-1 text-center">
            {[
              "Опыт ведения прямых эфиров (TikTok, продажи, презентации)",
              "Удержание внимания аудитории",
              "Работа с камерой и импровизация",
              "Презентация продукта в реальном времени",
            ].map((item) =>
              <li key={item} className="text-base md:text-lg font-medium flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white/40 shrink-0" />
                {item}
              </li>
            )}
          </ul>
        </div>

        {/* Другое */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-base">
          {[
            ["Вождение", "Категория B (механика, автомат)"],
            ["Спорт", "Плавание, фитнес"],
          ].map(([label, value]) =>
            <div key={label} className="flex justify-between items-baseline py-3 border-b border-white/10">
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 font-semibold">{label}</span>
              <span className="text-base md:text-lg font-bold text-right">{value}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  </main>;


export default About;
