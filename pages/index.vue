<template>
  <div>
    <Head>
      <Title>Sketchub.eu</Title>
    </Head>
    <!-- Landing page -->
    <section class="">
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1
                class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
              >
                3D modely
              </h1>

              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Tato stránka obsahuje projekty dvou studentů, <strong>Adama Hurta</strong> a
                <strong>Lukáše Kalendy</strong>, kteří společně vytvářejí fyzické modely
                bitevnich lodí.
              </p>

              <button
                class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-purple-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                <NuxtLink to="/kontakt"> Kontakt </NuxtLink>
              </button>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              class="lg:max-w-sm"
              src="/img/landing_chart.svg"
              alt="World Network Ilustration"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- HMS King George V -->
    <section class="" id="king-george">
      <h2
        class="text-center text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
        id="kurzy"
      >
        HMS King George V
      </h2>
      <div class="container mx-auto">
        <div
          class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
        >
          <img
            class="lg:max-w-sm"
            src="/img/king_george.png"
            alt="World Network Ilustration"
          />
        </div>
      </div>
    </section>

    <!-- O HMS King George V -->
    <section class="">
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex dark:bg-blue-800 p-6 rounded-lg">
          <div class="w-full lg:w-1/2 p-3">
            <div class="lg:max-w-lg">
              <h2
                class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
              >
                O projektu
              </h2>

              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Tento model lodi byl tvořen v rámci Studentského projektu ve
                třetím ročníku. Nejprve jsme si zpracovali z dostupných náčrtů
                na internetu 2D nákresy. Na základě vlastních úprav jsme s
                využitím programu Fusion 360 přešli do 3D prostoru. Zde bylo
                nutné celý model připravit tak, aby byl tisknutelný na FDM
                tiskárně.
              </p>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Celý model je složen z <strong>65 dílků</strong>, které jsou k sobě přilepeny.
                Nejdelší tisky trvaly okolo jednoho celého dne a bylo
                spotřebována přes <strong>500m</strong> PLA kabelu.
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              class="w-full h-full lg:max-w-3xl"
              src="/img/learning_team.svg"
              alt="World Network Ilustration"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- HMS Ark Royal -->
    <section class="" id="ark-royal">
      <h2
        class="text-center text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
        id="kurzy"
      >
        HMS Ark Royal
      </h2>
      <div class="container mx-auto p-10">
        <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/dLmEzHozhc9WbTkwPa" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/christchurchsu-now-coming-soon-up-dLmEzHozhc9WbTkwPa">via GIPHY</a></p>
      </div>
    </section>
  </div>
</template>
