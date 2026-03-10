import Image from "next/image";

const TDEE_CALCULATOR_URL = "https://mnonline-tdee-calculator.vercel.app/";
const MNONLINE_URL = "https://mnonlinecoach.com";

export default function FatLossGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Cover */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[#0D0D0D]" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#F5500A]/10 rounded-full blur-[100px]" />
        <div className="absolute right-12 top-12 font-[family-name:var(--font-bebas)] text-[11px] tracking-[4px] text-[#F0EDE8]/60 uppercase">
          MN ONLINE COACHING
        </div>
        <div className="relative z-10 px-16 pb-24 md:px-28">
          <div className="text-[11px] tracking-[4px] text-[#F5500A] uppercase mb-6">
            Free Resource — Complete Guide
          </div>
          <h1
            className="text-[clamp(48px,6vw,80px)] leading-[0.95] tracking-[2px] mb-6"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            The Complete
            <br />
            <span className="text-[#F5500A]">Fat Loss</span>
            <br />
            Guide
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[1.7] text-[#F0EDE8]/90 mb-8">
            Everything you need to understand nutrition, training, and lifestyle
            to build the body you actually want — without the bullshit.
          </p>
          <div className="w-12 h-px bg-[#F5500A]/40 mb-8" />
          <div
            className="flex flex-wrap items-center gap-3 text-sm text-[#AAAAAA]"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            <span className="font-semibold text-[#F0EDE8]">Maciej Nowicki</span>
            <span className="w-1 h-1 rounded-full bg-[#F5500A]" />
            <span>MN Online Coaching</span>
            <span className="w-1 h-1 rounded-full bg-[#F5500A]" />
            <span>mnonlinecoach.com</span>
          </div>
        </div>
      </section>

      {/* TOC */}
      <section className="py-24 px-16 md:px-28 bg-[#0D0D0D]">
        <h2
          className="text-[clamp(36px,4vw,52px)] tracking-[2px] mb-16"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          What&apos;s <span className="text-[#F5500A]">Inside</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <div
              className="text-[#F5500A] text-sm tracking-[3px] mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              01
            </div>
            <div
              className="text-lg font-semibold tracking-wide mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Nutrition
            </div>
            <ul className="space-y-3 text-[#AAAAAA] text-[15px]">
              <li>General Nutrition Overview</li>
              <li>Calories & Energy Balance</li>
              <li>Macronutrients Explained</li>
              <li>Protein, Fats & Carbs</li>
              <li>Supplements</li>
              <li>Maximising Your Calories</li>
            </ul>
          </div>
          <div>
            <div
              className="text-[#F5500A] text-sm tracking-[3px] mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              02
            </div>
            <div
              className="text-lg font-semibold tracking-wide mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Training
            </div>
            <ul className="space-y-3 text-[#AAAAAA] text-[15px]">
              <li>Introduction to Training</li>
              <li>Structuring Your Sessions</li>
              <li>Progressive Overload</li>
              <li>NEAT & Cardio</li>
              <li>Training Tips</li>
            </ul>
          </div>
          <div>
            <div
              className="text-[#F5500A] text-sm tracking-[3px] mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              03
            </div>
            <div
              className="text-lg font-semibold tracking-wide mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Lifestyle
            </div>
            <ul className="space-y-3 text-[#AAAAAA] text-[15px]">
              <li>Lifestyle Overview</li>
              <li>Sleep</li>
              <li>Stress Management</li>
              <li>Rest & Recovery</li>
              <li>What&apos;s Next</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <div className="pt-20 pb-0 px-16 md:px-28">
        <div
          className="text-[11px] tracking-[4px] text-[#F5500A] uppercase mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          From the Coach
        </div>
        <h2
          className="text-[clamp(36px,4vw,52px)] tracking-[2px] mb-8"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          Welcome.
        </h2>
      </div>
      <div className="pt-10 px-16 md:px-28">
        <div className="max-w-[780px] space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90">
          <p>
            You&apos;re reading this because something isn&apos;t working. Maybe
            you&apos;ve been &quot;eating healthy&quot; for months but the weight
            isn&apos;t shifting. Maybe you&apos;ve tried programmes and diets
            before and got somewhere — then fell off. Maybe you just don&apos;t
            have a clue where to start and don&apos;t want to waste any more
            time guessing.
          </p>
          <p>
            This guide is for you. Not the person who&apos;s been training for
            ten years. Not the gym rat who lives and breathes macros.{" "}
            <strong>
              You — a working man who wants to build a body he&apos;s actually
              proud of, without turning his life upside down.
            </strong>
          </p>
          <p>
            I&apos;m going to walk you through the three things that determine
            whether you succeed at fat loss: Nutrition, Training, and Lifestyle.
            They work together. You can&apos;t hack one and ignore the others
            and expect results that stick.
          </p>
          <p>
            Everything in here is based on what I&apos;ve learned training out of
            boxing gyms, coaching real clients, and living this stuff day to day.
            No academic waffle. No 47-step protocols. Just the principles that
            actually move the needle — explained straight.
          </p>
          <p>Let&apos;s get into it.</p>
        </div>
        <div className="max-w-[780px] mt-12 p-8 border-l-4 border-[#F5500A] bg-[#F5500A]/10">
          <p
            className="text-xl leading-relaxed text-[#F0EDE8] italic mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            &quot;Fat loss is simple. Not easy — but simple. Once you understand
            the fundamentals, most of the confusion disappears.&quot;
          </p>
          <div
            className="text-sm text-[#AAAAAA]"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Maciej Nowicki — MN Online Coaching
          </div>
        </div>
      </div>

      {/* Section 01: Nutrition */}
      <div className="mt-20 pt-20 pb-12 px-16 md:px-28 bg-[#141414]">
        <div
          className="text-[#F5500A] text-sm tracking-[3px] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          01
        </div>
        <div
          className="text-[11px] tracking-[4px] text-[#AAAAAA] uppercase mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Section One
        </div>
        <h2
          className="text-[clamp(36px,4vw,52px)] tracking-[2px] mb-6"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          Nutrition
        </h2>
        <p className="max-w-[720px] text-[17px] leading-[1.7] text-[#F0EDE8]/85">
          You can&apos;t out-train a bad diet. But you also don&apos;t need a
          perfect one. What you need is a nutrition approach that creates
          progress <em>and</em> that you can actually sustain.
        </p>
      </div>
      <div className="px-16 md:px-28 py-12 bg-[#141414]">
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="relative w-full aspect-[16/10] rounded overflow-hidden">
            <Image
              src="/images/nutrition-healthy.png"
              alt="Healthy salad with grilled chicken"
              fill
              className="object-cover"
              sizes="900px"
            />
          </div>
        </div>

        {/* 1.1 Calories */}
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="flex gap-8 mb-8">
            <div
              className="text-[#F5500A] text-sm tracking-[2px] shrink-0"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              1.1
            </div>
            <div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                The Foundation
              </div>
              <h3
                className="text-2xl tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Calories & Energy Balance
              </h3>
            </div>
          </div>
          <div className="ml-[72px] space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90">
            <p>
              Fat loss is simple — not easy. You must burn more calories than
              you consume. That&apos;s it. Everything else — the fad diets, the
              cut-out-carbs movements, the &quot;eat this not that&quot; noise —
              is just a variation on this single principle.
            </p>
            <p>
              A calorie deficit means you are consuming fewer calories than your
              body needs to maintain its current weight. Your body then turns to
              stored body fat for energy. Over time, body fat reduces. That&apos;s
              the mechanism. There is no magic beyond that.
            </p>
            <p>
              There is no one-size-fits-all deficit. Dropping 600+ calories below
              your maintenance sounds aggressive and it is — for most people,
              that level of restriction is unsustainable. You white-knuckle it
              for two weeks, fall off, and end up back where you started plus
              some guilt. A moderate deficit of 300–500 calories below your
              maintenance is where most people should start. It&apos;s enough to
              drive consistent progress without making your life miserable.
            </p>
          </div>
          <div className="ml-[72px] mt-10 p-6 border border-[#F5500A]/30 bg-[#F5500A]/5 rounded">
            <p className="text-[#F0EDE8] font-medium mb-2">
              A general starting point: consume 10–15 calories per pound of
              bodyweight daily. Where you land on that scale depends on how
              active you are.
            </p>
            <p className="text-[#AAAAAA] text-sm">
              Adjust based on progress every 2–3 weeks. The plan that works is
              the one you can stick to.
            </p>
          </div>
          <div className="ml-[72px] mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-[#1A1A1A] rounded text-center">
              <div
                className="text-2xl text-[#F5500A] mb-1"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                300–500
              </div>
              <div className="text-sm text-[#AAAAAA]">
                Calorie deficit per day
              </div>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded text-center">
              <div
                className="text-2xl text-[#F5500A] mb-1"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                0.5–1kg
              </div>
              <div className="text-sm text-[#AAAAAA]">
                Sustainable weekly loss
              </div>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded text-center">
              <div
                className="text-2xl text-[#F5500A] mb-1"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                10–15
              </div>
              <div className="text-sm text-[#AAAAAA]">
                Cals per lb bodyweight
              </div>
            </div>
          </div>
        </div>

        {/* 1.2 Macros */}
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="flex gap-8 mb-8">
            <div
              className="text-[#F5500A] text-sm tracking-[2px] shrink-0"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              1.2
            </div>
            <div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                What Your Food is Made Of
              </div>
              <h3
                className="text-2xl tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Macronutrients
              </h3>
            </div>
          </div>
          <div className="ml-[72px] space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90 mb-10">
            <p>
              Macronutrients make up the calories in everything you eat. Protein,
              fats, and carbohydrates each contribute differently to your total
              calorie intake. Understanding them removes the guesswork and gives
              you real control over what you&apos;re eating.
            </p>
          </div>
          <div className="ml-[72px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🍽️",
                name: "Protein",
                cal: "4 kcal / gram",
                desc: "Builds and repairs muscle. Non-negotiable for body composition. Target: 0.8–1.2g per lb of bodyweight.",
              },
              {
                icon: "🫒",
                name: "Fats",
                cal: "9 kcal / gram",
                desc: "Supports hormone function and brain health. Minimum 0.2–0.3g per lb of bodyweight daily.",
              },
              {
                icon: "🌾",
                name: "Carbs",
                cal: "4 kcal / gram",
                desc: "Your body's primary fuel. Fill remaining calories after hitting protein and fat targets.",
              },
              {
                icon: "🍺",
                name: "Alcohol",
                cal: "7 kcal / gram",
                desc: "Empty calories with zero nutritional benefit. Not off-limits — but it needs to be tracked honestly.",
              },
            ].map((m) => (
              <div
                key={m.name}
                className="p-6 bg-[#1A1A1A] rounded border border-[#2A2A2A]"
              >
                <span className="text-2xl mb-3 block">{m.icon}</span>
                <div
                  className="text-lg font-semibold mb-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {m.name}
                </div>
                <div className="text-sm text-[#F5500A] mb-3">{m.cal}</div>
                <p className="text-sm text-[#AAAAAA] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="ml-[72px] mt-10 p-6 bg-[#1A1A1A] rounded border-l-4 border-[#F5500A]">
            <div
              className="text-[11px] tracking-[3px] text-[#F5500A] uppercase mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Priority Macro
            </div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Why Protein Comes First
            </h4>
            <ul className="space-y-4">
              {[
                "Protein is the most important macronutrient for body composition. Full stop. Hit your protein target every single day before worrying about anything else.",
                "General sources: chicken, fish, eggs, dairy, tofu, lean meats, Greek yoghurt, cottage cheese. Whole food sources first — supplement to fill gaps only.",
                "Newer to tracking, or carrying more body fat? Start at 0.7–1g per lb. Leaner and more experienced? 1–1.2g per lb is appropriate.",
                "Protein keeps you fuller for longer, helps preserve muscle in a deficit, and has a higher thermic effect — meaning your body burns more calories just digesting it.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-[15px] text-[#F0EDE8]/85">
                  <span className="text-[#F5500A] shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-[72px] mt-10 space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90">
            <p>
              <strong>On carbs:</strong> Carbohydrates are not the enemy. They
              are not making you fat. No single macronutrient causes fat gain —
              overconsumption of total calories does. Carbs are your body&apos;s
              preferred fuel source and play a major role in training performance
              and recovery. Good sources include rice, oats, pasta, breads,
              potatoes, fruit and vegetables. Your carb intake will naturally be
              what remains after you&apos;ve set your protein and fat targets.
            </p>
          </div>
          <div className="ml-[72px] mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#1A1A1A] rounded">
              <div
                className="text-base font-semibold mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Fat Sources to Prioritise
              </div>
              <p className="text-[15px] text-[#F0EDE8]/85 leading-relaxed">
                Eggs, dairy, nuts, seeds, oils, and predominantly red meats.
                Dietary fats regulate hormonal and cognitive function — they are
                essential, not optional. A minimum of 0.2–0.3g per lb of
                bodyweight keeps your body running properly.
              </p>
            </div>
            <div className="p-6 bg-[#1A1A1A] rounded">
              <div
                className="text-base font-semibold mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Carb Sources to Prioritise
              </div>
              <p className="text-[15px] text-[#F0EDE8]/85 leading-relaxed">
                Rice, pasta, breads, oats, potatoes, and other whole grains.
                Fruit and veg. These provide fibre, vitamins, and sustained
                energy. The key is portion control — not elimination. Eat carbs.
                Just track them.
              </p>
            </div>
          </div>
        </div>

        {/* 1.3 Supplements */}
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="flex gap-8 mb-8">
            <div
              className="text-[#F5500A] text-sm tracking-[2px] shrink-0"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              1.3
            </div>
            <div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                The Supporting Cast
              </div>
              <h3
                className="text-2xl tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Supplements
              </h3>
            </div>
          </div>
          <div className="ml-[72px] space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90 mb-10">
            <p>
              Supplements do exactly what the name says — they supplement a
              solid nutrition foundation. They are not a shortcut. They are not
              a replacement. The person with perfect supplement stack and poor
              nutrition will always lose to the person who nails their food and
              skips the extras.
            </p>
            <p>
              That said, used correctly, a few key supplements are genuinely
              useful.
            </p>
          </div>
          <div className="ml-[72px] grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🥛", title: "Whey Protein", desc: "Convenient when hitting protein targets from whole foods becomes difficult. Not better than real food — just faster and easier on the go." },
              { icon: "⚡", title: "Creatine Monohydrate", desc: "The most research-backed performance supplement available. Supports strength and endurance during resistance training. 5g daily. That's it." },
              { icon: "💊", title: "Multivitamin", desc: "Insurance against nutritional gaps. Not essential if your diet is varied, but a solid catch-all for most people eating in a calorie deficit." },
            ].map((s) => (
              <div
                key={s.title}
                className="p-6 bg-[#1A1A1A] rounded border border-[#2A2A2A]"
              >
                <div className="text-2xl mb-3">{s.icon}</div>
                <div
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {s.title}
                </div>
                <p className="text-sm text-[#AAAAAA] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 1.4 Maximising Calories */}
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="flex gap-8 mb-8">
            <div
              className="text-[#F5500A] text-sm tracking-[2px] shrink-0"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              1.4
            </div>
            <div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Smart Strategies
              </div>
              <h3
                className="text-2xl tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Maximising Your Calories
              </h3>
            </div>
          </div>
          <div className="ml-[72px] space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90 mb-10">
            <p>
              Knowing your calorie target is step one. Making those calories
              work for you — keeping you full, fuelling your training, and
              fitting your actual life — is where most people struggle.
            </p>
          </div>
          <div className="ml-[72px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/nutrition-mealprep.png"
                alt="Meal prep containers with balanced meals"
                fill
                className="object-cover"
                sizes="450px"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div
                className="text-[11px] tracking-[3px] text-[#F5500A] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Strategy 01
              </div>
              <h4
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Food Volume
              </h4>
              <div className="space-y-4 text-[15px] text-[#F0EDE8]/85 leading-relaxed">
                <p>
                  A calorie is a calorie — but 1,800 calories can look
                  completely different depending on what you eat. 100g of
                  strawberries is about 33 calories. 100g of peanut butter is
                  over 590. Same weight, different world.
                </p>
                <p>
                  The goal is to eat as much food as possible within your
                  calorie target. That means prioritising lower-calorie-density
                  foods: fruits, vegetables, leafy greens, lean protein sources.
                  These fill you up without burning through your budget.
                </p>
                <p>
                  This doesn&apos;t mean peanut butter is bad. It means be
                  aware. Calorie-dense foods need to be weighed and tracked.
                  They add up faster than you think.
                </p>
              </div>
            </div>
          </div>
          <div className="ml-[72px] mt-12 p-6 bg-[#1A1A1A] rounded border-l-4 border-[#F5500A]">
            <div
              className="text-[11px] tracking-[3px] text-[#F5500A] uppercase mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Flexible Strategy
            </div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Banking Calories
            </h4>
            <ul className="space-y-4">
              {[
                "Eat 150–200 calories below your daily target Monday to Friday. Over 5 days, that builds a 750–1,000 calorie buffer for the weekend.",
                "Useful for social events, meals out, or situations where tracking becomes impractical. Gives you flexibility without derailing progress.",
                "Non-negotiable rule: never sacrifice protein to save calories. Keep protein high regardless of the approach you're using.",
                "This is a tool, not a weekly ritual. Abuse it and you stall. Use it occasionally and it keeps you sane without wrecking your results.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-[15px] text-[#F0EDE8]/85">
                  <span className="text-[#F5500A] shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section 02: Training */}
      <div className="pt-20 pb-12 px-16 md:px-28 bg-[#0D0D0D]">
        <div
          className="text-[#F5500A] text-sm tracking-[3px] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          02
        </div>
        <div
          className="text-[11px] tracking-[4px] text-[#AAAAAA] uppercase mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Section Two
        </div>
        <h2
          className="text-[clamp(36px,4vw,52px)] tracking-[2px] mb-6"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          Training
        </h2>
        <p className="max-w-[720px] text-[17px] leading-[1.7] text-[#F0EDE8]/85">
          Nutrition handles the fat loss. Training shapes what&apos;s underneath
          — and preserves the muscle you&apos;ve worked to build. Here&apos;s how
          to do it without overcomplicating it.
        </p>
      </div>
      <div className="px-16 md:px-28 py-12 bg-[#0D0D0D]">
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="relative w-full aspect-[16/10] rounded overflow-hidden">
            <Image
              src="/images/training-barbell.png"
              alt="Hands gripping a barbell"
              fill
              className="object-cover"
              sizes="900px"
            />
          </div>
        </div>

        {/* 2.1 Structuring Training */}
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="flex gap-8 mb-8">
            <div
              className="text-[#F5500A] text-sm tracking-[2px] shrink-0"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              2.1
            </div>
            <div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Getting the Framework Right
              </div>
              <h3
                className="text-2xl tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Structuring Your Training
              </h3>
            </div>
          </div>
          <div className="ml-[72px] space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90 mb-10">
            <p>
              How you structure your training depends on four variables: your
              training experience, your goal, your lifestyle, and your ability to
              recover. That&apos;s it. There&apos;s no universal answer to how
              many days you should train — there&apos;s only the right answer{" "}
              <em>for you</em>.
            </p>
            <p>
              If you&apos;re brand new to resistance training, programming six
              sessions a week is short-sighted and unsustainable. Start with
              three. Execute them well. Build from there. An experienced trainer
              has earned the capacity to handle more volume. Earn your right to
              progress.
            </p>
          </div>
          <div className="ml-[72px] grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { val: "3–4x", label: "Sessions per week for beginners" },
              { val: "4–5x", label: "Sessions for intermediate lifters" },
              { val: "MRV", label: "Maximal Recoverable Volume — your ceiling" },
            ].map((s) => (
              <div
                key={s.val}
                className="p-6 bg-[#141414] rounded text-center border border-[#2A2A2A]"
              >
                <div
                  className="text-2xl text-[#F5500A] mb-1"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {s.val}
                </div>
                <div className="text-sm text-[#AAAAAA]">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="ml-[72px] space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90">
            <p>
              The concept of{" "}
              <strong>MRV (Maximal Recoverable Volume)</strong> is worth
              understanding. It&apos;s the maximum amount of training you can
              complete and still recover from properly before the next session.
              Train beyond your MRV consistently and you don&apos;t get fitter —
              you get more fatigued, more injury-prone, and your results stall.
              Work up to your MRV over time. Don&apos;t jump straight to it.
            </p>
          </div>
        </div>

        {/* 2.2 Progressive Overload */}
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="flex gap-8 mb-8">
            <div
              className="text-[#F5500A] text-sm tracking-[2px] shrink-0"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              2.2
            </div>
            <div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                The Driver of Results
              </div>
              <h3
                className="text-2xl tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Progressive Overload
              </h3>
            </div>
          </div>
          <div className="ml-[72px] space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90 mb-10">
            <p>
              Progressive overload is the method of advancing your training over
              time so your body continues to be challenged — and continues to
              adapt. Without it, you plateau. The body is efficient. It stops
              changing once it has adapted to the current demand. You have to
              keep raising the bar.
            </p>
            <p>
              This doesn&apos;t mean adding weight every single session. It means
              finding a way to make the work harder or better in some measurable
              way.
            </p>
          </div>
          <div className="ml-[72px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📈", title: "Increase Load", desc: "Add weight to the bar or dumbbells when you can complete your target reps with clean form across all sets." },
              { icon: "🔄", title: "Increase Reps", desc: "Hit the top of your rep range consistently before increasing load. One extra rep each week compounds quickly." },
              { icon: "➗", title: "Increase Sets", desc: "Add an additional set to a given exercise as your capacity grows. More volume at the same intensity drives adaptation." },
              { icon: "✓", title: "Improve Execution", desc: "Better form, greater range of motion, more controlled tempo. Clean technique is overload. Earn your right to go heavier." },
              { icon: "⏱️", title: "Time Under Tension", desc: "Slow the eccentric (lowering) phase. Two seconds down, one second pause, one second up. Muscles are working harder without touching the weight." },
              { icon: "⏬", title: "Reduce Rest", desc: "Completing the same work in less time increases training density. Use with caution — quality of reps must not be sacrificed." },
            ].map((o) => (
              <div
                key={o.title}
                className="p-6 bg-[#141414] rounded border border-[#2A2A2A]"
              >
                <div className="text-2xl mb-3">{o.icon}</div>
                <div
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {o.title}
                </div>
                <p className="text-sm text-[#AAAAAA] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
          <div className="ml-[72px] mt-12 p-8 border-l-4 border-[#F5500A] bg-[#F5500A]/5">
            <p
              className="text-xl leading-relaxed text-[#F0EDE8] italic mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              &quot;It could simply be one extra rep from the week before, or
              better form on a set you&apos;ve been doing for months. Progress
              doesn&apos;t have to be dramatic. It just has to be consistent.&quot;
            </p>
            <div
              className="text-sm text-[#AAAAAA]"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Maciej Nowicki
            </div>
          </div>
        </div>

        {/* 2.3 NEAT & Cardio */}
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="flex gap-8 mb-8">
            <div
              className="text-[#F5500A] text-sm tracking-[2px] shrink-0"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              2.3
            </div>
            <div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Movement Beyond the Gym
              </div>
              <h3
                className="text-2xl tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                NEAT & Cardio
              </h3>
            </div>
          </div>
          <div className="ml-[72px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="text-[11px] tracking-[3px] text-[#F5500A] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                The Underrated Lever
              </div>
              <h4
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                NEAT
              </h4>
              <div className="space-y-4 text-[15px] text-[#F0EDE8]/85 leading-relaxed">
                <p>
                  <strong>NEAT — Non-Exercise Activity Thermogenesis</strong> —
                  is the calories your body burns through all movement that
                  isn&apos;t formal exercise. Walking to the kitchen. Taking the
                  stairs. Fidgeting. Moving around at work. It accounts for a
                  massive chunk of your daily calorie burn.
                </p>
                <p>
                  Most people underestimate how much daily movement (or lack of
                  it) affects their results. Two people with identical diets and
                  identical training programmes can see very different fat loss
                  outcomes simply because one sits at a desk all day and the
                  other is on their feet.
                </p>
                <p>
                  Maximise yours. Take the stairs. Park further away. Walk
                  where you&apos;d drive. It adds up faster than a cardio session
                  you dread and skip half the time.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/lifestyle-running.png"
                alt="Running shoes on wet street"
                fill
                className="object-cover"
                sizes="450px"
              />
            </div>
          </div>
          <div className="ml-[72px] mt-12 p-6 bg-[#141414] rounded border-l-4 border-[#F5500A]">
            <div
              className="text-[11px] tracking-[3px] text-[#F5500A] uppercase mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Cardio Protocol
            </div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Using Cardio Effectively
            </h4>
            <ul className="space-y-4">
              {[
                "Cardio is a tool for creating additional calorie expenditure when NEAT and diet alone are not moving the needle. It is not punishment. It is not mandatory.",
                "Low-intensity steady-state cardio (LISS) — walking, cycling, light rowing — is the most sustainable form. It doesn't spike appetite significantly and it doesn't compete with strength training recovery.",
                "2–3 sessions of 20–40 minutes per week is sufficient for most people. More is not automatically better. Don't trade recovery capacity for extra cardio sessions.",
                "Cardio has benefits beyond calorie burn: improved cardiovascular health, better resting heart rate, enhanced mood and energy levels. When used correctly it is genuinely worth your time.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-[15px] text-[#F0EDE8]/85">
                  <span className="text-[#F5500A] shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2.4 Training Tips */}
        <div className="max-w-[900px] mx-auto mb-16">
          <div className="flex gap-8 mb-8">
            <div
              className="text-[#F5500A] text-sm tracking-[2px] shrink-0"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              2.4
            </div>
            <div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Make it Count
              </div>
              <h3
                className="text-2xl tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Training Tips
              </h3>
            </div>
          </div>
          <div className="ml-[72px] grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Form Over Weight", desc: "Leave your ego at the door. Sacrificing range of movement for an extra 5kg is how you pick up injuries. Standardise your reps. Earn your right to progress." },
              { icon: "📋", title: "Stick to the Plan", desc: "Programme hopping kills progress. It's impossible to measure improvement if you're changing exercises every week. Execute the plan. Review. Adjust. Repeat." },
              { icon: "📝", title: "Log Your Sessions", desc: "Phone or pen and paper — doesn't matter. Record the weight, sets, and reps for every session. You cannot manage what you don't measure." },
            ].map((t) => (
              <div
                key={t.title}
                className="p-6 bg-[#141414] rounded border border-[#2A2A2A]"
              >
                <div className="text-2xl mb-3">{t.icon}</div>
                <div
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {t.title}
                </div>
                <p className="text-sm text-[#AAAAAA] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 03: Lifestyle */}
      <div className="pt-20 pb-12 px-16 md:px-28 bg-[#141414]">
        <div
          className="text-[#F5500A] text-sm tracking-[3px] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          03
        </div>
        <div
          className="text-[11px] tracking-[4px] text-[#AAAAAA] uppercase mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Section Three
        </div>
        <h2
          className="text-[clamp(36px,4vw,52px)] tracking-[2px] mb-6"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          Lifestyle
        </h2>
        <p className="max-w-[720px] text-[17px] leading-[1.7] text-[#F0EDE8]/85">
          You can nail nutrition and training and still struggle. If you&apos;re
          running on 4 hours of sleep and maxed out on stress, your body is
          fighting against you. Here&apos;s what to fix.
        </p>
      </div>
      <div className="px-16 md:px-28 py-12 bg-[#141414]">
        <div className="max-w-[900px] mx-auto mb-12">
          <div className="relative w-full aspect-[16/10] rounded overflow-hidden">
            <Image
              src="/images/lifestyle-sleep.png"
              alt="Bedroom with nightstand, lamp, and journal"
              fill
              className="object-cover"
              sizes="900px"
            />
          </div>
        </div>
        <div className="max-w-[780px] mx-auto mb-12 space-y-5 text-[17px] leading-[1.7] text-[#F0EDE8]/90">
          <p>
            Your ability to succeed with nutrition and training is almost
            entirely dependent on the lifestyle surrounding it. If you&apos;re
            stressed to the eyeballs, running on broken sleep, and grinding
            yourself into the ground — your ability to train hard, recover
            properly, and make good decisions falls off a cliff. You&apos;re only
            human. Life takes its toll. These are not soft factors — they are
            performance factors.
          </p>
        </div>
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              num: "01",
              title: "Sleep",
              body: (
                <>
                  <p>
                    Sleep is the most underrated fat loss variable there is. When
                    you&apos;re fatigued, you lean on caffeine, you give in to
                    cravings, you skip sessions, and you make worse decisions
                    across the board. All of these hurt your progress.
                  </p>
                  <p className="mt-4">
                    Target a minimum of 7 hours of quality sleep per night. Not 7
                    hours in bed — 7 hours of actual sleep. To get there: set a
                    non-negotiable bedtime. Build a pre-bed wind-down routine.
                    Phone down an hour before sleep. Consistent sleep schedule
                    seven days a week. It&apos;s boring. It works.
                  </p>
                </>
              ),
            },
            {
              num: "02",
              title: "Stress",
              body: (
                <>
                  <p>
                    Chronic stress elevates cortisol — the hormone your body
                    uses in fight-or-flight mode. Sustained high cortisol
                    increases fat storage (particularly around the midsection),
                    tanks testosterone, impairs recovery, and drives emotional
                    eating.
                  </p>
                  <p className="mt-4">
                    You can&apos;t eliminate stress. But you can manage it.
                    Regular training itself is one of the best stress management
                    tools available to you. Beyond that: protect time off, set
                    work boundaries, invest in sleep, and don&apos;t use food as
                    the primary coping mechanism when things get hard.
                  </p>
                </>
              ),
            },
            {
              num: "03",
              title: "Rest & Recovery",
              body: (
                <>
                  <p>
                    Rest days are not wasted days. They are the days your body
                    actually builds and repairs. The training session is the
                    stimulus. The recovery period is where the adaptation
                    happens. Cut your rest short and you cut your results short.
                  </p>
                  <p className="mt-4">
                    Active recovery is valuable on days off — a walk, a stretch,
                    light mobility work. What it isn&apos;t is another hard
                    session disguised as recovery. Give your body what it needs.
                    Push hard on training days. Rest genuinely on off days.
                    That&apos;s the rhythm that compounds over months.
                  </p>
                </>
              ),
            },
          ].map((card) => (
            <div
              key={card.num}
              className="p-6 bg-[#1A1A1A] rounded border border-[#2A2A2A]"
            >
              <div
                className="text-[#F5500A] text-sm tracking-[2px] mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {card.num}
              </div>
              <div
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {card.title}
              </div>
              <div className="text-[15px] text-[#F0EDE8]/85 leading-relaxed space-y-2">
                {card.body}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[780px] mx-auto p-8 border-l-4 border-[#F5500A] bg-[#F5500A]/5 mb-12">
          <p
            className="text-xl leading-relaxed text-[#F0EDE8] italic mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            &quot;The guys who get real, lasting results aren&apos;t necessarily
            the ones who train hardest. They&apos;re the ones who are consistent
            — day after day, week after week, even when life gets in the way.&quot;
          </p>
          <div
            className="text-sm text-[#AAAAAA]"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Maciej Nowicki — MN Online Coaching
          </div>
        </div>
        <div className="max-w-[900px] mx-auto p-6 bg-[#1A1A1A] rounded border-l-4 border-[#F5500A] mt-12">
          <div
            className="text-[11px] tracking-[3px] text-[#F5500A] uppercase mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Quick Reference
          </div>
          <h4
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Your Fat Loss Checklist
          </h4>
          <ul className="space-y-4">
            {[
              "Hit your calorie target daily. A moderate deficit of 300–500 calories below maintenance is the starting point.",
              "Prioritise protein. 0.8–1.2g per lb of bodyweight. Every day. Non-negotiable.",
              "Track honestly. Weigh your food. Log everything. You cannot manage what you're not measuring.",
              "Train with resistance 3–4x per week. Progress overload week to week. Log your sessions.",
              "Keep daily movement high. 8,000–10,000 steps per day is a solid baseline. Take every opportunity to move.",
              "Get 7+ hours of sleep every night. This is as important as what you eat and how you train.",
              "Manage your stress. Your body cannot lose fat effectively in a perpetual state of high cortisol.",
              "Be patient. Real results take 12–16 weeks of consistent effort to show properly. Don't judge progress by the scale alone.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-[15px] text-[#F0EDE8]/85 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <span className="text-[#F5500A] shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 px-16 md:px-28 bg-[#141414] border-t border-[#2A2A2A]">
        <div
          className="text-[11px] tracking-[5px] text-[#F5500A] uppercase mb-6 text-center"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          You&apos;ve Got the Knowledge. Now Get the Support.
        </div>
        <h2
          className="text-[clamp(48px,6vw,80px)] tracking-[2px] text-center mb-6"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          Ready to Actually
          <br />
          <span className="text-[#F5500A]">Build?</span>
        </h2>
        <p className="max-w-[560px] mx-auto text-center text-[17px] leading-[1.7] text-[#F0EDE8]/85 mb-10">
          This guide gives you the foundation. But knowing what to do and having
          someone keep you accountable while you do it are two very different
          things. That&apos;s where I come in.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href={MNONLINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#F5500A] text-white font-semibold text-center hover:bg-[#e04809] transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Work with Maciej
          </a>
          <a
            href={TDEE_CALCULATOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#2A2A2A] text-[#F0EDE8] font-semibold text-center hover:bg-[#1A1A1A] transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Free Macro Calculator
          </a>
        </div>
        <div className="pt-12 mt-12 border-t border-white/8 max-w-[800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[#2A2A2A]">
            <a
              href={TDEE_CALCULATOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#1A1A1A] text-center hover:bg-[#222] transition-colors block"
            >
              <div
                className="text-[#F5500A] text-[28px] tracking-[2px] mb-2"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Free
              </div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                TDEE Calculator
              </div>
              <p className="text-[13px] text-[#AAAAAA] leading-relaxed mt-2">
                Find your exact calorie and macro targets in 60 seconds.
              </p>
            </a>
            <a
              href={MNONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#1A1A1A] text-center hover:bg-[#222] transition-colors block"
            >
              <div
                className="text-[#F5500A] text-[28px] tracking-[2px] mb-2"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                £197
              </div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                28-Day Challenge
              </div>
              <p className="text-[13px] text-[#AAAAAA] leading-relaxed mt-2">
                28 days of structured programming and daily accountability.
              </p>
            </a>
            <a
              href={MNONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#1A1A1A] text-center hover:bg-[#222] transition-colors block"
            >
              <div
                className="text-[#F5500A] text-[28px] tracking-[2px] mb-2"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                £249
              </div>
              <div
                className="text-[11px] tracking-[3px] text-[#AAAAAA] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                1-to-1 Coaching
              </div>
              <p className="text-[13px] text-[#AAAAAA] leading-relaxed mt-2">
                Fully personalised monthly coaching with direct access to
                Maciej.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-16 md:px-28 bg-black flex flex-col md:flex-row items-center justify-between gap-4">
        <div
          className="text-lg tracking-[4px]"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          MN ONLINE COACHING
        </div>
        <div
          className="text-xs tracking-[2px] text-[#AAAAAA]"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          © 2026 MN Online Coaching · Sheffield, UK
        </div>
        <a
          href={MNONLINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[2px] text-[#F5500A] hover:underline"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          mnonlinecoach.com
        </a>
      </footer>
    </div>
  );
}
